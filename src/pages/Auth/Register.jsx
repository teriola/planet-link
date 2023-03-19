import { Link } from "react-router-dom";
import Card from "../../components/ui/Card";
import { useForm } from "../../hooks/useForm";

export default function Register() {
  const { onChangeHandler, onSubmit, formData, formErrors, validateForm } = useForm({
    firstName: '',
    lastName: '',
    password: '',
    repeatPassword: '',
    email: '',
  }, async (formData) => {
    console.log(formData);
  });

  return (
    <div className="h-screen flex items-center mx-4">
      <div className="max-w-md mx-auto grow -mt-24">
        <Card>
          <h1 className="text-3xl font-bold text-gray-400 text-center">Register</h1>
          <form className="flex relative flex-col mt-10 mx-12 gap-5" onSubmit={onSubmit}>
            <div className="flex gap-2">
              <input
                className="border rounded-lg px-3 py-1 w-1/2 border-gray-300 dark:text-blacktext"
                name="firstName"
                type="text"
                placeholder="First name"
                value={formData.firstName}
                onChange={onChangeHandler}
                onBlur={validateForm}
              />
              {formErrors.firstName &&
                <span className="text-sm absolute -top-6 left-0 md:left-2 text-red-500">{formErrors.firstName}</span>
              }
              <input
                className="border rounded-lg px-3 py-1 w-1/2 border-gray-300 dark:text-blacktext"
                name="lastName"
                type="text"
                placeholder="Last name"
                value={formData.lastName}
                onChange={onChangeHandler}
                onBlur={validateForm}
              />
              {formErrors.lastName &&
                <span className="text-sm absolute -top-6 left-32 md:left-44 text-red-500">{formErrors.lastName}</span>
              }
            </div>
            <input
              className="border rounded-lg px-3 py-1 border-gray-300 dark:text-blacktext"
              name="email"
              type="text"
              placeholder="Email"
              value={formData.email}
              onChange={onChangeHandler}
              onBlur={validateForm}
            />
            {formErrors.email &&
              <span className="text-sm absolute top-8 left-2 text-red-500">{formErrors.email}</span>
            }
            <input
              className="border rounded-lg px-3 py-1 border-gray-300 dark:text-blacktext"
              name="password"
              type="password"
              placeholder="Password"
              value={formData.password}
              onChange={onChangeHandler}
              onBlur={validateForm}
            />
            {formErrors.password &&
              <span className="text-sm absolute bottom-44 left-2 text-red-500">{formErrors.password}</span>
            }
            <input
              className="border rounded-lg px-3 py-1 border-gray-300 dark:text-blacktext"
              name="repeatPassword"
              type="password"
              placeholder="Repeat password"
              value={formData.repeatPassword}
              onChange={onChangeHandler}
              onBlur={validateForm}
            />
            {formErrors.repeatPassword &&
              <span className="text-sm absolute top-36 left-2 text-red-500">{formErrors.repeatPassword}</span>
            }
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
