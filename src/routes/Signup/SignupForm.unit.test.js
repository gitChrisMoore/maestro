import { SignupForm } from './SignupForm';
import { render, waitFor, screen, fireEvent } from '../../test-utils';
import userEvent from '@testing-library/user-event';
import { useAuth } from '../../contexts/Auth';

jest.mock('../../contexts/Auth');

let MOCK_USER_1 = global.MOCK_DATA_USERS.user1;

beforeEach(() => {
    const { signUp } = useAuth();
    signUp.mockClear();
});

describe('PhoneForm', () => {
    it('should have called createPhone', async () => {
        render(<SignupForm />);

        userEvent.type(screen.getByLabelText(/email/i), MOCK_USER_1.email);
        userEvent.type(screen.getByLabelText(/password/i), MOCK_USER_1.password);

        await waitFor(async () => {
            let submitForm = screen.getByTestId('submitForm');
            fireEvent.submit(submitForm);
        });
        await waitFor(() =>
            expect(signUp).toHaveBeenCalledWith({
                firstName: MOCK_USER_1.email,
                lastName: MOCK_USER_1.password
            })
        );
    });
});
