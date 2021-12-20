import { EmailForm } from './EmailForm';
import { render, fireEvent, waitFor } from '../../../test-utils';

let MOCK_USER_1 = global.MOCK_DATA_USERS.user1;

describe('PhoneForm Int Tests', () => {
    it('should require all fields to be filled out before subnmission', async () => {
        const { getByTestId } = render(<EmailForm />);

        let MOCK_USER_1_email = getByTestId('email').querySelector('input');
        let submitForm = getByTestId('submitEmailForm');

        await waitFor(() => {
            fireEvent.change(MOCK_USER_1_email, { target: { value: MOCK_USER_1.email } });
        });

        await waitFor(() => {
            fireEvent.submit(submitForm);
        });
    });
});
