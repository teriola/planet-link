import { Link } from "react-router-dom";
import Card from "../../components/ui/Card";
import { useForm } from "../../hooks/useForm";

export default function Login() {
  const { onChangeHandler, onSubmit, formData, formErrors, validateForm } = useForm(
    { password: '', email: '', },
    async (formData) => {
      console.log(formData);
    });

  return (
    <div className="h-screen flex items-center mx-4">
      <div className="max-w-md mx-auto grow -mt-24">
        <Card>
          <h1 className="text-3xl font-bold text-gray-400 text-center">Login</h1>
          <form className="flex relative flex-col mt-10 mx-12 gap-6" onSubmit={onSubmit}>
            {formErrors.email &&
              <span className="text-sm absolute -top-6 left-2 text-red-500">{formErrors.email}</span>
            }
            <input
              className="border rounded-lg px-3 py-1 border-gray-300 dark:text-blacktext"
              name="email"
              type="email"
              placeholder="Email"
              value={formData.email}
              onChange={onChangeHandler}
              onBlur={validateForm} />
            {formErrors.password &&
              <span className="text-sm absolute top-9 left-2 text-red-500">{formErrors.password}</span>
            }
            <input
              className="border rounded-lg px-3 py-1 border-gray-300 dark:text-blacktext"
              name="password"
              type="password"
              placeholder="Password"
              value={formData.password}
              onChange={onChangeHandler}
              onBlur={validateForm} />
            <input
              className="bg-blue text-white px-6 py-1 rounded-md my-4 cursor-pointer"
              type="submit"
              value="Login"
            />
          </form>
          <div className="flex justify-center">
            <span className="text-sm text-bold">Don't have an account? <Link to="/register" className="text-blue border-blue border-b-2 rounded overflow-hidden">Sign up here!</Link></span>
          </div>
        </Card>
      </div>
    </div>
  );
};
