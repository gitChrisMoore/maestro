import { PhoneForm } from './PhoneForm';
import { render, waitFor, screen, fireEvent } from '../../../../test-utils';
import userEvent from '@testing-library/user-event';
import { createPhone } from '../../../../lib/domain/phone/Phone';
jest.mock('../../../../lib/domain/phone/Phone');

let MOCK_USER_1 = global.MOCK_DATA_USERS.user1;

beforeEach(() => {
    createPhone.mockClear();
});

describe('PhoneForm', () => {
    it('should have called createPhone', async () => {
        render(<PhoneForm />);

        userEvent.type(screen.getByLabelText(/phoneNumber/i), MOCK_USER_1.phoneNumber);

        await waitFor(async () => {
            let submitForm = screen.getByTestId('submitForm');
            fireEvent.submit(submitForm);
        });
        await waitFor(() =>
            expect(createPhone).toHaveBeenCalledWith({
                phoneNumber: MOCK_USER_1.phoneNumber
            })
        );
    });
});
