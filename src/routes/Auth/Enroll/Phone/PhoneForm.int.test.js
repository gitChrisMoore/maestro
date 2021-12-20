import { supabase } from '../../../../lib/data/supabase';
import { PhoneForm } from './PhoneForm';
import { render, fireEvent, waitFor } from '../../../../test-utils';

let MOCK_USER_1 = global.MOCK_DATA_USERS.user1;
let loggedinUserID;

beforeAll(async () => {
    const { error } = await supabase.auth.signIn(MOCK_USER_1);
    if (error) throw new Error('error in beforeall:', error.message);
});
describe('PhoneForm Int Tests', () => {
    it('should have a valid auth session', () => {
        const session = supabase.auth.session();
        loggedinUserID = session.user.id;
        expect(loggedinUserID).not.toBeNull();
    });
    it('should require all fields to be filled out before subnmission', async () => {
        const { getByTestId } = render(<PhoneForm />);

        let MOCK_USER_1_phoneNumber = getByTestId('phoneNumber').querySelector('input');
        let submitForm = getByTestId('submitPhoneForm');

        await waitFor(() => {
            fireEvent.change(MOCK_USER_1_phoneNumber, {
                target: { value: MOCK_USER_1.phoneNumber }
            });
        });

        await waitFor(() => {
            fireEvent.submit(submitForm);
        });
    });
});
