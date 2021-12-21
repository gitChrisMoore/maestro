import { AddressForm } from './AddressForm';
import { render, waitFor, screen, fireEvent } from '../../../../test-utils';
import userEvent from '@testing-library/user-event';
import { createAddress } from '../../../../lib/domain/address/Address';
jest.mock('../../../../lib/domain/address/Address');

let MOCK_USER_1 = global.MOCK_DATA_USERS.user1;

beforeEach(() => {
    createAddress.mockClear();
});

describe('AddressForm', () => {
    it('should have called createAddress', async () => {
        render(<AddressForm />);

        userEvent.type(screen.getByLabelText(/address1/i), MOCK_USER_1.address1);
        userEvent.type(screen.getByLabelText(/address2/i), MOCK_USER_1.address2);
        userEvent.type(screen.getByLabelText(/city/i), MOCK_USER_1.city);
        userEvent.type(screen.getByLabelText(/state/i), MOCK_USER_1.state);
        userEvent.type(screen.getByLabelText(/posta/i), MOCK_USER_1.postalCode);

        await waitFor(async () => {
            let submitForm = screen.getByTestId('submitForm');
            fireEvent.submit(submitForm);
        });
        await waitFor(() =>
            expect(createAddress).toHaveBeenCalledWith({
                address1: MOCK_USER_1.address1,
                address2: MOCK_USER_1.address2,
                city: MOCK_USER_1.city,
                state: MOCK_USER_1.state,
                postalCode: MOCK_USER_1.postalCode,
                country: 'US'
            })
        );
    });
});
