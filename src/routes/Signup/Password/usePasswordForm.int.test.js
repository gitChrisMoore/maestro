import { renderHook, act } from '../../../test-utils';
import { usePasswordForm } from './usePasswordForm';
import { supabase } from '../../../lib/data/supabase';
import UserInterface from '../../../lib/domain/user/UserInterface';
const { deleteUserByID } = UserInterface();

const MOCK_EXISTING_USER_1 = {
    email: global.MOCK_DATA_USERS.user1.email,
    password: global.MOCK_DATA_USERS.user1.password
};
const MOCK_EXISTING_USER_3 = {
    email: global.MOCK_DATA_USERS.user3_destructive.email,
    password: global.MOCK_DATA_USERS.user3_destructive.password
};

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useLocation: () => ({
        pathname: 'localhost:3000/example/path',
        state: { email: MOCK_EXISTING_USER_3.email }
    })
}));

async function cleanUpUser(CLEANUP_USER_ID) {
    try {
        await deleteUserByID(CLEANUP_USER_ID);
    } catch (error) {
        console.log('cleanUpUser error - ', error.message);
    }
}
beforeAll(async () => {
    const { user } = await supabase.auth.signIn(MOCK_EXISTING_USER_3);
    if (user) await cleanUpUser(user.id);
});

afterAll(async () => {
    const { user } = await supabase.auth.signIn(MOCK_EXISTING_USER_3);
    if (user) await cleanUpUser(user.id);
});

describe('usePasswordForm', () => {
    it('Should throw error that user already exists', async () => {
        const { result } = renderHook(usePasswordForm);
        await expect(result.current.handleSignup(MOCK_EXISTING_USER_1)).rejects.toHaveProperty(
            'message',
            'User already registered'
        );
    });
    it('Should return a valid un and password', async () => {
        const { result } = renderHook(usePasswordForm);
        let temp_pw = { password: MOCK_EXISTING_USER_1.password };
        await act(async () => {
            const validSignupFields = await result.current.validateSignupFields(temp_pw);
            expect(validSignupFields.password).toBe(MOCK_EXISTING_USER_1.password);
        });
    });
    it('Should error on invalid password', async () => {
        const { result } = renderHook(usePasswordForm);
        await expect(result.current.validateSignupFields(123)).rejects.toHaveProperty(
            'message',
            'validateSignupFields - error - password'
        );
    });
    it('Should register a new user', async () => {
        const { result } = renderHook(usePasswordForm);
        await act(async () => {
            const newUser = await result.current.handleSignup(MOCK_EXISTING_USER_3);
            expect(newUser.id).not.toBeNull;
        });
    });
    it('Should not let a existing user sign up', async () => {
        const { result } = renderHook(usePasswordForm);
        await expect(result.current.handelSubmit(MOCK_EXISTING_USER_3)).rejects.toHaveProperty(
            'message',
            'User already registered'
        );
    });
    it('Should  handle the creation of a new user', async () => {
        const { user } = await supabase.auth.signIn(MOCK_EXISTING_USER_3);
        if (user) await cleanUpUser(user.id);

        const { result } = renderHook(usePasswordForm);
        await act(async () => {
            const newUser = await result.current.handelSubmit(MOCK_EXISTING_USER_3);
            expect(newUser.id).not.toBeNull;
        });
    });
});
