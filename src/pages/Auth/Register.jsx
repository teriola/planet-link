import { Link } from "react-router-dom";
import Card from "../../components/ui/Card";
import { useForm } from "../../hooks/useForm";
import { register } from "../../services/authService";

export default function Register() {
  const { onChangeHandler, onSubmit, formData } = useForm({
    firstName: '',
    lastName: '',
    password: '',
    repeatPassword: '',
    email: '',
  }, async (formData) => {
    const user = await register(formData);
    console.log(user);
  });

  return (
    <div className="h-screen flex items-center mx-4">
      <div className="max-w-md mx-auto grow -mt-24">
        <Card>
          <h1 className="text-3xl font-bold text-gray-400 text-center">Register</h1>
          <form className="flex flex-col mt-10 mx-12 gap-4" onSubmit={onSubmit}>
            <div className="flex gap-2">
              <input
                className="border rounded-lg px-3 py-1 w-1/2 border-gray-300 dark:text-blacktext"
                name="firstName"
                type="text"
                placeholder="First name"
                value={formData.firstName}
                onChange={onChangeHandler}
              />
              <input
                className="border rounded-lg px-3 py-1 w-1/2 border-gray-300 dark:text-blacktext"
                name="lastName"
                type="text"
                placeholder="Last name"
                value={formData.lastName}
                onChange={onChangeHandler}
              />
            </div>
            <input
              className="border rounded-lg px-3 py-1 border-gray-300 dark:text-blacktext"
              name="email"
              type="text"
              placeholder="Email"
              value={formData.email}
              onChange={onChangeHandler}
            />
            <input
              className="border rounded-lg px-3 py-1 border-gray-300 dark:text-blacktext"
              name="password"
              type="password"
              placeholder="Password"
              value={formData.password}
              onChange={onChangeHandler}
            />
            <input
              className="border rounded-lg px-3 py-1 border-gray-300 dark:text-blacktext"
              name="repeatPassword"
              type="password"
              placeholder="Repeat password"
              value={formData.repeatPassword}
              onChange={onChangeHandler}
            />
            <input
              className="bg-blue text-white px-6 py-1 rounded-md my-4 cursor-pointer"
              type="submit"
              value="Register"
            />
          </form>
          <div className="flex justify-center">
            <span className="text-sm text-bold">Already have an account? <Link to="/login" className="text-blue border-blue border-b-2 rounded overflow-hidden">Login here!</Link></span>
          </div>
        </Card>
      </div>
    </div>
  );
};
