import { Link } from "react-router-dom";
import Card from "../components/ui/Card"
import LoginForm from "../components/Forms/Auth/LoginForm";

export default function Login() {
  return (
    <div className="h-screen flex items-center mx-4">
      <div className="max-w-md mx-auto grow -mt-24">
        <Card>
          <h1 className="text-3xl font-bold text-gray-400 text-center">Login</h1>
          <LoginForm />
          <div className="flex justify-center">
            <span className="text-sm text-bold">Don't have an account? <Link to="/register" className="text-blue border-blue border-b-2 rounded overflow-hidden">Sign up here!</Link></span>
          </div>
        </Card>
      </div>
    </div>
  );
};
