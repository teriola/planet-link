import { Navigate, Outlet } from "react-router-dom";
import { useAuthContext } from "../contexts/AuthContext";


export default function PrivateRoutes() {
    const { user } = useAuthContext();
    console.log(user);
    return user ? <Outlet /> : <Navigate to='/login' />
}
