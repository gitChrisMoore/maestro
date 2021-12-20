import { supabase } from '../../../../lib/data/supabase';
import { AddressForm } from './AddressForm';
import { render, fireEvent, waitFor } from '../../../../test-utils';

let MOCK_USER_1 = global.MOCK_DATA_USERS.user1;
let loggedinUserID;

beforeAll(async () => {
    const { error } = await supabase.auth.signIn(MOCK_USER_1);
    if (error) throw new Error('error in beforeall:', error.message);
});
describe('AddressForm Int Tests', () => {
    it('should have a valid auth session', () => {
        const session = supabase.auth.session();
        loggedinUserID = session.user.id;
        expect(loggedinUserID).not.toBeNull();
    });
    it('should require all fields to be filled out before subnmission', async () => {
        const { getByTestId } = render(<AddressForm />);

        let MOCK_USER_1_address1 = getByTestId('address1').querySelector('input');
        let MOCK_USER_1_address2 = getByTestId('address2').querySelector('input');
        let MOCK_USER_1_city = getByTestId('city').querySelector('input');
        let MOCK_USER_1_state = getByTestId('state').querySelector('input');
        let MOCK_USER_1_postalCode = getByTestId('postalCode').querySelector('input');
        let submitAddressForm = getByTestId('submitAddressForm');

        await waitFor(() => {
            fireEvent.change(MOCK_USER_1_address1, { target: { value: MOCK_USER_1.address1 } });
        });
        await waitFor(() => {
            fireEvent.change(MOCK_USER_1_address2, { target: { value: MOCK_USER_1.address2 } });
        });
        await waitFor(() => {
            fireEvent.change(MOCK_USER_1_city, { target: { value: MOCK_USER_1.city } });
        });
        await waitFor(() => {
            fireEvent.change(MOCK_USER_1_state, { target: { value: MOCK_USER_1.state } });
        });
        await waitFor(() => {
            fireEvent.change(MOCK_USER_1_postalCode, { target: { value: MOCK_USER_1.postalCode } });
        });
        await waitFor(() => {
            fireEvent.submit(submitAddressForm);
            // debug()
        });
    });
    // @TODO tests running in parrlel cause this challenging
});
