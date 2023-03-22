import { Link } from "react-router-dom";
import Card from "../components/UI/Card";
import RegisterForm from "../components/Forms/Auth/RegisterForm";

export default function Register() {
  return (
    <div className="h-screen flex items-center mx-4">
      <div className="max-w-md mx-auto grow -mt-24">
        <Card>
          <h1 className="text-3xl font-bold text-gray-400 text-center">Register</h1>
          <RegisterForm />
          <div className="flex justify-center">
            <span className="text-sm text-bold">Already have an account? <Link to="/login" className="text-blue border-blue border-b-2 rounded overflow-hidden">Login here!</Link></span>
          </div>
        </Card>
      </div>
    </div>
  );
};
