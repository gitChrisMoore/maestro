import { useAuth } from '../../contexts/Auth';

export const getUserId = async () => {
    const { user } = useAuth();
    if (user.id) return user.id;
    else throw Error('no user id');
};
