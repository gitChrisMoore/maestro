// import { renderHook } from '../../../test-utils';
// import { usePasswordForm } from './usePasswordForm';
// import { render, renderHook, getByTestId, debug } from '../../../test-utils';
import { renderHook } from '../../../test-utils';
// import { PasswordForm } from './PasswordForm';
import { usePasswordForm } from './usePasswordForm';
// import { useNavigate } from 'react-router-dom';
// import { useAuth } from '../../../contexts/Auth';

// let MOCK_EXISTING_USER_1 = global.MOCK_DATA_USERS.user1;

const MOCK_EXISTING_USER_1 = {
    email: global.MOCK_DATA_USERS.user1.email,
    password: global.MOCK_DATA_USERS.user1.password
};

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useLocation: () => ({
        pathname: 'localhost:3000/example/path',
        state: { email: 'email@gnmail.com' }
    })
}));

describe('usePasswordForm', () => {
    it('Should throw error that user already exists', async () => {
        const { result } = renderHook(usePasswordForm);
        await expect(result.current.handleSignup(MOCK_EXISTING_USER_1)).rejects.toHaveProperty(
            'message',
            'User already registered'
        );
    });
    // it('Should provide a default message', () => {
    //     // const { result } = render(<PasswordForm />);

    //     const { debug, getByTestId } = render(<PasswordForm newEmail={MOCK_EXISTING_USER_1.email} />);
    //     debug();
    // });
});
