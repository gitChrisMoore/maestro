import { LoginForm } from './LoginForm';
import { render, waitFor, screen, fireEvent } from '../../test-utils';
import userEvent from '@testing-library/user-event';
import { useAuth } from '../../contexts/Auth';
const { signIn } = useAuth();
jest.mock('../../contexts/Auth');

let MOCK_USER_1 = global.MOCK_DATA_USERS.user1;

beforeEach(() => {
    signIn.mockClear();
});

describe('LoginForm', () => {
    it('should have called signIn', async () => {
        render(<LoginForm />);

        userEvent.type(screen.getByLabelText(/email/i), MOCK_USER_1.email);
        userEvent.type(screen.getByLabelText(/password/i), MOCK_USER_1.password);

        await waitFor(async () => {
            let submitForm = screen.getByTestId('submitForm');
            fireEvent.submit(submitForm);
        });
        await waitFor(() =>
            expect(signIn).toHaveBeenCalledWith({
                firstName: MOCK_USER_1.email,
                lastName: MOCK_USER_1.password
            })
        );
    });
});
