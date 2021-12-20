import { supabase } from "../../../lib/data/supabase";
import Dashboard from "./Dashboard"
import { render, fireEvent, waitFor, act, getByTestId } from "../../../test-utils"

let MOCK_USER_1 = global.MOCK_DATA_USERS.user1
let loggedinUserID;

beforeAll(async () => {
    const { session,error } = await supabase.auth.signIn(MOCK_USER_1)
    if (error) throw new Error('error in beforeall:', error.message)
    
});
describe('Dashboard Int Tests', () => {
    it('should have a valid auth session', () => {
        const session = supabase.auth.session()
        loggedinUserID = session.user.id
    });
    it('should require all fields to be filled out before subnmission', async () => {
        const { debug, getByTestId, screen, findAllByText } = render(
            <Dashboard />
        )
    });
    
});
