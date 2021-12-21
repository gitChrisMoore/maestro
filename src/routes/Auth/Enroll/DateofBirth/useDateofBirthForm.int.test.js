import { renderHook, act } from '../../../../test-utils';
import { useDateofBirthForm } from './useDateofBirthForm';

const MOCK_EXISTING_USER_1 = {
    email: global.MOCK_DATA_USERS.user1.email,
    password: global.MOCK_DATA_USERS.user1.password
};

global.alert = jest.fn();

describe('useDateofBirthForm Integration test', () => {
    it('Should submit a valid phone number', async () => {
        const { result } = renderHook(useDateofBirthForm);
        await act(async () => {
            await result.current.handleSubmit(MOCK_EXISTING_USER_1);
        });
    });
    it('Should alert if invalid phone number', async () => {
        const { result } = renderHook(useDateofBirthForm);
        await act(async () => {
            await result.current.handleSubmit(null);
        });
        expect(global.alert).toHaveBeenCalledTimes(1);
    });
});
