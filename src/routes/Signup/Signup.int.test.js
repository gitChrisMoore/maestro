import Signup from './Signup';
import { render, screen } from '../../test-utils';

describe('Signup Int Tests', () => {
    it('render the email page', async () => {
        render(<Signup />);
        expect(screen.getByTestId('email')).not.toBeNull();
    });
});
