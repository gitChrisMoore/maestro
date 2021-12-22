import { PersonForm } from './PersonForm';
import { render, waitFor, screen, fireEvent } from '../../../../test-utils';
import userEvent from '@testing-library/user-event';
import { createPerson } from '../../../../lib/domain/person/Person';
jest.mock('../../../../lib/domain/person/Person');

let MOCK_USER_1 = global.MOCK_DATA_USERS.user1;

beforeEach(() => {
    createPerson.mockClear();
});

describe('PersonForm', () => {
    it('should have called createPerson', async () => {
        render(<PersonForm />);

        userEvent.type(screen.getByLabelText(/firstName/i), MOCK_USER_1.firstName);
        userEvent.type(screen.getByLabelText(/lastName/i), MOCK_USER_1.lastName);
        userEvent.type(screen.getByLabelText(/dateofBirth/i), MOCK_USER_1.dateofBirth);

        await waitFor(async () => {
            let submitForm = screen.getByTestId('submitForm');
            fireEvent.submit(submitForm);
        });
        await waitFor(() =>
            expect(createPerson).toHaveBeenCalledWith({
                firstName: MOCK_USER_1.firstName,
                lastName: MOCK_USER_1.lastName,
                dateofBirth: MOCK_USER_1.dateofBirth
            })
        );
    });
});
