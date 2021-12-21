import { renderHook, act } from '../../../../test-utils';
import { useNameForm } from './useNameForm';

const MOCK_EXISTING_USER_1 = {
    email: global.MOCK_DATA_USERS.user1.email,
    password: global.MOCK_DATA_USERS.user1.password
};

global.alert = jest.fn();

describe('useNameForm Integration test', () => {
    it('Should submit a valid phone number', async () => {
        const { result } = renderHook(useNameForm);
        await act(async () => {
            await result.current.handleSubmit(MOCK_EXISTING_USER_1);
        });
    });
    it('Should alert if invalid phone number', async () => {
        const { result } = renderHook(useNameForm);
        await act(async () => {
            await result.current.handleSubmit(null);
        });
        expect(global.alert).toHaveBeenCalledTimes(1);
    });
});
