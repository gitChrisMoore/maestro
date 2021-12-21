import { renderHook } from '../../../test-utils';
import { useEmailForm } from './useEmailForm';

describe('useEmailForm Integration test', () => {
    it('Should throw error that user already exists', async () => {
        const { result } = renderHook(useEmailForm);
        await expect(result.current.handleSubmit(null)).rejects.toHaveProperty(
            'message',
            'no email found'
        );
    });
});
