import { supabase } from '../../../../lib/data/supabase';
import { renderHook, act } from '../../../../test-utils';
import { useAddressForm } from './useAddressForm';

let MOCK_USER_1 = global.MOCK_DATA_USERS.user1;
let loggedinUserID;

global.alert = jest.fn();

beforeAll(async () => {
    const { error } = await supabase.auth.signIn(MOCK_USER_1);
    if (error) throw new Error('error in beforeall:', error.message);
});

describe('useAddressForm Integration test', () => {
    it('should have a valid auth session', () => {
        const session = supabase.auth.session();
        loggedinUserID = session.user.id;
        expect(loggedinUserID).not.toBeNull();
    });
    it('Should submit a valid phone number', async () => {
        const { result } = renderHook(useAddressForm);
        await act(async () => {
            await result.current.handleSubmit(global.MOCK_DATA_USERS.user1);
        });
    });
    it('Should alert if invalid phone number', async () => {
        const { result } = renderHook(useAddressForm);
        await act(async () => {
            await result.current.handleSubmit(null);
        });
        expect(global.alert).toHaveBeenCalledTimes(1);
    });
});
