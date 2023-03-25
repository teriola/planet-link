import { Navigate, Outlet } from "react-router-dom";
import { useAuthContext } from "../contexts/AuthContext";


export default function PrivateRoutes() {
    const { user } = useAuthContext();
    return user.accessToken ? <Outlet /> : <Navigate to='/' />
}
