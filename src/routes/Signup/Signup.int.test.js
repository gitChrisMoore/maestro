
import Signup from "./Signup";
import { render } from "../../test-utils"

describe('Signup Int Tests', () => {

    it('should require all fields to be filled out before subnmission', async () => {
        const { debug, getByTestId, screen, findAllByText } = render(
            <Signup />
        )
    });
    
});
