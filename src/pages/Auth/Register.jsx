import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import Card from "../../components/ui/Card";
import { register as registerUser } from "../../services/authService";

export default function Register() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const onSubmit = async (data) => {
    const { email, password, repeatPassword, firstName, lastName } = data;
    try {
      if (password !== repeatPassword) {

      }
      const user = await registerUser(email, password, firstName, lastName);
      // TODO: Set user to localstorage
      console.log(user);
      navigate('/profile/posts');
    } catch (err) {
      console.log(err);
    }
  }


  return (
    <div className="h-screen flex items-center mx-4">
      <div className="max-w-md mx-auto grow -mt-24">
        <Card>
          <h1 className="text-3xl font-bold text-gray-400 text-center">Register</h1>
          <form className="flex relative flex-col mt-10 mx-12 gap-5" onSubmit={handleSubmit(onSubmit)}>
            <div className="flex gap-2">
              {/* First name input and validation */}
              {errors.firstName?.type === 'required' && <span className="text-sm absolute -top-6 left-0 md:left-2 text-red-500">Name is required</span>}
              {errors.firstName?.type === 'minLength' && <span className="text-sm absolute -top-6 left-0 md:left-2 text-red-500">Name is too short</span>}
              <input
                className="border rounded-lg px-3 py-1 w-1/2 border-gray-300 dark:text-blacktext"
                name="firstName"
                type="text"
                placeholder="First name"
                {...register('firstName', { required: true, minLength: 2 })}
                aria-invalid={errors.firstName ? 'true' : 'false'}
              />
              {/* Last name input and validation */}
              {errors.lastName?.type === 'required' && <span className="text-sm absolute -top-6 left-32 md:left-44 text-red-500">Name is required</span>}
              {errors.lastName?.type === 'minLength' && <span className="text-sm absolute -top-6 left-32 md:left-44 text-red-500">Name is too short</span>}
              <input
                className="border rounded-lg px-3 py-1 w-1/2 border-gray-300 dark:text-blacktext"
                name="lastName"
                type="text"
                placeholder="Last name"
                {...register('lastName', { required: true, minLength: 2 })}
                aria-invalid={errors.lastName ? 'true' : 'false'}
              />
            </div>
            {/* Email input and validation */}
            {errors.email?.type === 'required' && <span className="text-sm absolute top-8 left-2 text-red-500">Email is required</span>}
            {errors.email?.type === 'pattern' && <span className="text-sm absolute top-8 left-2 text-red-500">Ivalid email</span>}
            <input
              className="border rounded-lg px-3 py-1 border-gray-300 dark:text-blacktext"
              name="email"
              type="text"
              placeholder="Email"
              {...register('email', { required: true, pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ })}
              aria-invalid={errors.email ? 'true' : 'false'}
            />
            {/* Password input and validation */}
            {errors.password?.type === 'required' && <span className="text-sm absolute bottom-44 left-2 text-red-500">Password is required</span>}
            {errors.password?.type === 'minLength' && <span className="text-sm absolute bottom-44 left-2 text-red-500">Password is too short</span>}
            <input
              className="border rounded-lg px-3 py-1 border-gray-300 dark:text-blacktext"
              name="password"
              type="password"
              placeholder="Password"
              {...register('password', { required: true, minLength: 6 })}
              aria-invalid={errors.password ? 'true' : 'false'}
            />
            {/* Confirm password validation */}
            {errors.repeatPassword?.type === 'required' && <span className="text-sm absolute top-36 left-2 text-red-500">Password is required</span>}
            {/* {errors.repeatPassword?.type === 'minLength' && <span className="text-sm absolute bottom-44 left-2 text-red-500">Password is too short</span>} */}
            <input
              className="border rounded-lg px-3 py-1 border-gray-300 dark:text-blacktext"
              name="repeatPassword"
              type="password"
              placeholder="Repeat password"
              {...register('repeatPassword', { required: true })}
              aria-invalid={errors.repeatPassword ? 'true' : 'false'}
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
