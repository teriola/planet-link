import { useNavigate } from "react-router";
import { useAuthContext } from "../../../contexts/AuthContext";
import { useForm } from "react-hook-form";
import { register as registerUser } from "../../../services/authService";
import { useState } from "react";

export default function RegisterForm() {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const { userRegisterHandler } = useAuthContext();
    const {
        register,
        handleSubmit,
        setError,
        getValues,
        formState: { errors, isSubmitting }
    } = useForm();

    const onSubmit = async (data) => {
        const { email, password, rePassword, name, surname } = data;
        setIsLoading(true);
        if (password !== rePassword) return;

        try {
            const user = await registerUser({ email, password, rePassword, name, surname });

            userRegisterHandler(user);
            setIsLoading(false);
            navigate(`/profile/${user._id}/posts`);
        } catch (err) {
          console.log(err);
            if (err.message) {
                setError('server', {
                    type: 'server',
                    message: err.message,
                });
            }
        }
    }

    return (
        <form className="flex relative flex-col mt-10 mx-12 gap-5" onSubmit={handleSubmit(onSubmit)}>
            <div className="flex gap-2">
                {/* First name input and validation */}
                {errors.name?.type === 'required' && <span className="text-sm absolute -top-6 left-0 md:left-2 text-red-500">Name is required</span>}
                {errors.name?.type === 'minLength' && <span className="text-sm absolute -top-6 left-0 md:left-2 text-red-500">Name is too short</span>}
                <input
                    className="border rounded-lg px-3 py-1 w-1/2 border-gray-300 dark:text-blacktext"
                    name="name"
                    type="text"
                    placeholder="First name"
                    {...register('name', { required: true, minLength: 2 })}
                    aria-invalid={errors.name ? 'true' : 'false'}
                />
                {/* Last name input and validation */}
                {errors.surname?.type === 'required' && <span className="text-sm absolute -top-6 left-32 md:left-44 text-red-500">Name is required</span>}
                {errors.surname?.type === 'minLength' && <span className="text-sm absolute -top-6 left-32 md:left-44 text-red-500">Name is too short</span>}
                <input
                    className="border rounded-lg px-3 py-1 w-1/2 border-gray-300 dark:text-blacktext"
                    name="surname"
                    type="text"
                    placeholder="Last name"
                    {...register('surname', { required: true, minLength: 2 })}
                    aria-invalid={errors.surname ? 'true' : 'false'}
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
            {errors.rePassword?.type === 'required' && <span className="text-sm absolute top-36 left-2 text-red-500">Password is required</span>}
            {errors.rePassword?.type === 'validate' && <span className="text-sm absolute bottom-44 left-2 text-red-500"></span>}
            <input
                className="border rounded-lg px-3 py-1 border-gray-300 dark:text-blacktext"
                name="rePassword"
                type="password"
                placeholder="Repeat password"
                {...register('rePassword', {
                    required: true, validate: (value) => {
                        const { password } = getValues();
                        return password === value || 'Passwords don\'t match';
                    }
                })}
                aria-invalid={errors.rePassword ? 'true' : 'false'}
            />
            <span className="text-sm absolute top-48 left-2 text-red-500">{errors.server && errors.server.message}</span>
            <input
                className="bg-blue text-white px-6 py-1 rounded-md my-4 cursor-pointer"
                type="submit"
                disabled={isSubmitting || isLoading}
                value={isLoading ? "Registering..." : "Register"} />
        </form>
    );
};
