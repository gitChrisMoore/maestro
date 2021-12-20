import Login from './Login';
import { render } from '../../test-utils';

describe('Dashboard Int Tests', () => {
    it('should require all fields to be filled out before subnmission', async () => {
        render(<Login />);
    });
});
