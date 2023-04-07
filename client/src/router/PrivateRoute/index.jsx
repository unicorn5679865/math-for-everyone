import { useAuth } from "../../hooks/useAuth";
import { Navigate, Route } from "react-router-dom";

export default ({ component, ...rest }) => {
    
    const { authData } = useAuth();

    if (!authData) {
        return <Navigate to={"/signin"} replace />
    }

    return (
        <Route {...rest} render={props => <component {...props} />} />
    ) 
};