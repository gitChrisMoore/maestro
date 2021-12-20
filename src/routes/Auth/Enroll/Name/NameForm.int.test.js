import { supabase } from "../../../../lib/data/supabase";
import { NameForm } from "./NameForm"
import { render, fireEvent, waitFor, act, getByTestId } from "../../../../test-utils"

let MOCK_USER_1 = global.MOCK_DATA_USERS.user1
let loggedinUserID;

beforeAll(async () => {
    const { session,error } = await supabase.auth.signIn(MOCK_USER_1)
    if (error) throw new Error('error in beforeall:', error.message)
    
});
describe('NameForm Int Tests', () => {
    it('should have a valid auth session', () => {
        const session = supabase.auth.session()
        loggedinUserID = session.user.id
    });
    it('should require all fields to be filled out before subnmission', async () => {
        const { debug, getByTestId, screen, findAllByText } = render(
            <NameForm />
        )
        
        let MOCK_USER_1_firstName = getByTestId('firstName').querySelector('input')
        let MOCK_USER_1_lastName = getByTestId('lastName').querySelector('input')
        let submitForm = getByTestId('submitDateofBirthForm')

        await waitFor(() => {
            fireEvent.change(MOCK_USER_1_firstName, {target: {value: MOCK_USER_1.firstName}}) 
        })
        await waitFor(() => {
            fireEvent.change(MOCK_USER_1_lastName, {target: {value: MOCK_USER_1.lastName}}) 
        })

        await waitFor(() => {
            fireEvent.submit(submitForm)
        })
    });
})