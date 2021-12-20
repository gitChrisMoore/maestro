import Signup from './Signup';
import { render } from '../../test-utils';

describe('Signup Int Tests', () => {
    it('render the email page', async () => {
        render(<Signup />);
    });
});
