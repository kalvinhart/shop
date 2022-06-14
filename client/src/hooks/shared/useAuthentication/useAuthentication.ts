import { useAppSelector } from "../../../application/hooks/useAppSelector"

export const useAuthentication = () => {
    const {loading, error, user, isAuthenticated} = useAppSelector(state => state.auth);

    return {
        loading, 
        error,
        user,
        isAuthenticated
    }
}