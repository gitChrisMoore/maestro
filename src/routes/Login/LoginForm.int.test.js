import { LoginForm } from './LoginForm';
import { render, fireEvent, waitFor } from '../../test-utils';

let MOCK_USER_1 = global.MOCK_DATA_USERS.user1;

describe('LoginForm Int Tests', () => {
    it('should require all fields to be filled out before subnmission', async () => {
        const { getByTestId } = render(<LoginForm />);

        let MOCK_USER_1_email = getByTestId('email').querySelector('input');
        let MOCK_USER_1_password = getByTestId('password').querySelector('input');
        let submitForm = getByTestId('submitLoginForm');

        await waitFor(() => {
            fireEvent.change(MOCK_USER_1_email, { target: { value: MOCK_USER_1.email } });
        });
        await waitFor(() => {
            fireEvent.change(MOCK_USER_1_password, { target: { value: MOCK_USER_1.password } });
        });

        await waitFor(() => {
            fireEvent.submit(submitForm);
        });
    });
});
