import { supabase } from "../../lib/data/supabase";
import { LoginForm } from "./LoginForm";
import { render, fireEvent, waitFor, screen, wrapper, getByRole, mount } from "../../test-utils"
import userEvent from '@testing-library/user-event'


let MOCK_USER_1 = global.MOCK_DATA_USERS.user1
let loggedinUserID;


describe('LoginForm Int Tests', () => {

    it('should require all fields to be filled out before subnmission', async () => {
        const { debug, getByTestId } = render(
            <LoginForm />
        )
        
        let MOCK_USER_1_email = getByTestId('email').querySelector('input')
        let MOCK_USER_1_password = getByTestId('password').querySelector('input')
        let submitForm = getByTestId('submitLoginForm')

        await waitFor(() => {
            fireEvent.change(MOCK_USER_1_email, {target: {value: MOCK_USER_1.email}}) 
        })       
        await waitFor(() => {
            fireEvent.change(MOCK_USER_1_password, {target: {value: MOCK_USER_1.password}}) 
        })
        
        await waitFor(() => {
            fireEvent.submit(submitForm)
        })
    });
})