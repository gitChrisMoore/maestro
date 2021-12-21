import { renderHook, act } from '../../test-utils';
import { useLoginForm } from './useLoginForm';

const MOCK_EXISTING_USER_1 = {
    email: global.MOCK_DATA_USERS.user1.email,
    password: global.MOCK_DATA_USERS.user1.password
};
const MOCK_EXISTING_USER_1_ERROR = {
    email: global.MOCK_DATA_USERS.user1.email,
    password: 'asdasd'
};

global.alert = jest.fn();

describe('useEmailForm Integration test', () => {
    it('Should log the user in', async () => {
        const { result } = renderHook(useLoginForm);
        await act(async () => {
            await result.current.handleSubmit(MOCK_EXISTING_USER_1);
        });
    });
    it('Should not allow login with a invalid password', async () => {
        const { result } = renderHook(useLoginForm);
        await act(async () => {
            await result.current.handleSubmit(MOCK_EXISTING_USER_1_ERROR);
        });
        expect(global.alert).toHaveBeenCalledTimes(1);
    });
    it('Should throw error that user already exists', async () => {
        const { result } = renderHook(useLoginForm);
        await expect(result.current.handleSubmit(null)).rejects.toHaveProperty(
            'message',
            "Cannot destructure property 'email' of 'object null' as it is null."
        );
    });
});
