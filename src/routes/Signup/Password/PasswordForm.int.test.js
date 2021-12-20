import { supabase } from "../../../lib/data/supabase";
import { PasswordForm } from "./PasswordForm"
import { render, fireEvent, waitFor, act, getByTestId } from "../../../test-utils"

let MOCK_USER_1 = global.MOCK_DATA_USERS.user1
let loggedinUserID;


describe('PhoneForm Int Tests', () => {

    it('should require all fields to be filled out before subnmission', async () => {
        const { debug, getByTestId } = render(
            <PasswordForm />
        )

        let MOCK_USER_1_password = getByTestId('password').querySelector('input')
        let submitForm = getByTestId('submitPasswordForm')

        await waitFor(() => {
            fireEvent.change(MOCK_USER_1_password, {target: {value: MOCK_USER_1.password}}) 
        })

        

        await waitFor(() => {
            fireEvent.submit(submitForm)
        })
    });
})