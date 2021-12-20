import { supabase } from "../../../../lib/data/supabase";
import { DateofBirthForm } from "./DateofBirthForm";
import { render, fireEvent, waitFor, act, getByTestId } from "../../../../test-utils"

let MOCK_USER_1 = global.MOCK_DATA_USERS.user1
let loggedinUserID;

beforeAll(async () => {
    const { session,error } = await supabase.auth.signIn(MOCK_USER_1)
    if (error) throw new Error('error in beforeall:', error.message)
    
});
describe('PersonForm Int Tests', () => {
    it('should have a valid auth session', () => {
        const session = supabase.auth.session()
        loggedinUserID = session.user.id
    });
    it('should require all fields to be filled out before subnmission', async () => {
        const { debug, getByTestId, screen, findAllByText } = render(
            <DateofBirthForm />
        )
        let MOCK_USER_1_dateofBirth = getByTestId('dateofBirth').querySelector('input')
        let submitDateofBirthForm = getByTestId('submitDateofBirthForm')

        await waitFor(() => {
            fireEvent.change(MOCK_USER_1_dateofBirth, {target: {value: MOCK_USER_1.dateofBirth}}) 
        })

        await waitFor(() => {
            fireEvent.submit(submitDateofBirthForm)
            // debug()
        })
    });
})