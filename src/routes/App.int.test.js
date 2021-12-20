import App from "./App"
import {render} from '@testing-library/react'

describe('App Int Tests', () => {

    it('should render', async () => {
        const { debug, getByTestId, screen, findAllByText } = render(
            <App />
        )
    });
    
});
