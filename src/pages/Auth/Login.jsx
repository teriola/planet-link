import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import Card from "../../components/ui/Card";
import { useAuthContext } from "../../contexts/AuthContext";
import { login } from "../../services/authService";

export default function Login() {
  const navigate = useNavigate();
  const { userLoginHandler } = useAuthContext();
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors }
  } = useForm();

  const onSubmit = async (data) => {
    const { email, password } = data;
    try {
      // Get user and save it in user state
      const user = await login(email, password);
      userLoginHandler(user);
      navigate(`/`);
    } catch (err) {
      if (err.server) {
        setError('server', {
          type: 'server',
          message: err.message,
        });
      }
    }
  }

  return (
    <div className="h-screen flex items-center mx-4">
      <div className="max-w-md mx-auto grow -mt-24">
        <Card>
          <h1 className="text-3xl font-bold text-gray-400 text-center">Login</h1>
          <form
            className="flex relative flex-col mt-10 mx-12 gap-6"
            onSubmit={handleSubmit(onSubmit)}
          >
            {errors.email?.type === 'required' && <span className="text-sm absolute -top-6 left-2 text-red-500">Email is required</span>}
            {errors.email?.type === 'pattern' && <span className="text-sm absolute -top-6 left-2 text-red-500">Ivalid email</span>}
            <input
              className="border rounded-lg px-3 py-1 border-gray-300 dark:text-blacktext"
              name="email"
              placeholder="Email"
              {...register('email', { required: true, pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ })}
              aria-invalid={errors.email ? 'true' : 'false'}
            />
            {errors.password?.type === 'required' && <span className="text-sm absolute top-9 left-2 text-red-500">Password is required</span>}
            {errors.password?.type === 'minLength' && <span className="text-sm absolute top-9 left-2 text-red-500">Password is too short</span>}
            <input
              className="border rounded-lg px-3 py-1 border-gray-300 dark:text-blacktext"
              name="password"
              type="password"
              placeholder="Password"
              {...register('password', { required: true, minLength: 6 })}
              aria-invalid={errors.password ? 'true' : 'false'}
            />
            <span className="text-sm absolute top-24 left-2 text-red-500">{errors.server && errors.server.message}</span>
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
