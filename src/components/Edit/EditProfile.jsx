import Card from "../ui/Card";
import { useProfileContext } from "../../contexts/ProfileContext";
import { useForm } from "react-hook-form";
import { patchUser } from "../../services/userService";

export default function EditProfile({ onCloseEdit, onEditHandler }) {
  const { user } = useProfileContext();
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: user.name,
      surname: user.surname,
      profilePicture: user.profilePicture,
      coverPicture: user.coverPicture,
    }
  });

  const onSubmit = async (data) => {
    try {
      onEditHandler(data);
      const newData = await patchUser(user._id, data);
    } catch (err) {
      if (err.message) {
        setError('server', {
          type: 'server',
          message: err.message,
        });
      }
    }
  };

  return (
    <Card small={true}>
      <div className="flex justify-center relative">
        <h2 className="text-xl font-bold mb-2">Edit Profile</h2>
        <svg onClick={() => onCloseEdit(false)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 absolute right-0 cursor-pointer"> <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /> </svg>
      </div>

      <form className="flex relative flex-col mt-10 mx-12 gap-5" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex gap-2">
          {/* First name input and validation */}
          {errors.name?.type === 'required' && <span className="text-sm absolute -top-6 left-0 md:left-2 text-red-500">Name is required</span>}
          {errors.name?.type === 'minLength' && <span className="text-sm absolute -top-6 left-0 md:left-2 text-red-500">Name is too short</span>}
          <label className="block" htmlFor="name">Name: </label>
          <input
            className="border rounded-lg px-3 py-1 w-1/2 border-gray-300 dark:text-blacktext"
            id="name"
            name="name"
            type="text"
            placeholder="First name"
            {...register('name', { required: true, minLength: 2 })}
            aria-invalid={errors.name ? 'true' : 'false'}
          />
          {/* Last name input and validation */}
          {errors.surname?.type === 'required' && <span className="text-sm absolute -top-6 left-32 md:left-44 text-red-500">Name is required</span>}
          {errors.surname?.type === 'minLength' && <span className="text-sm absolute -top-6 left-32 md:left-44 text-red-500">Name is too short</span>}
          <label className='block' htmlFor="surname">Surname: </label>
          <input
            className="border rounded-lg px-3 py-1 w-1/2 border-gray-300 dark:text-blacktext"
            id="surname"
            name="surname"
            type="text"
            placeholder="Last name"
            {...register('surname', { required: true, minLength: 2 })}
            aria-invalid={errors.surname ? 'true' : 'false'}
          />
        </div>
        {/* Profile picture and validation */}
        {errors.profilePicture?.type === 'required' && <span className="text-sm absolute top-8 left-2 text-red-500">Profile picture is required</span>}
        <input
          className="border rounded-lg px-3 py-1 border-gray-300 dark:text-blacktext"
          name="profilePicture"
          type="url"
          placeholder="https://"
          {...register('profilePicture', { required: true })}
          aria-invalid={errors.profilePicture ? 'true' : 'false'}
        />
        {/* Cover picture and validation */}
        {errors.coverPicture?.type === 'required' && <span className="text-sm absolute bottom-44 left-2 text-red-500">Password is required</span>}
        <input
          className="border rounded-lg px-3 py-1 border-gray-300 dark:text-blacktext"
          name="coverPicture"
          type="url"
          placeholder="https://"
          {...register('coverPicture', { required: true })}
          aria-invalid={errors.coverPicture ? 'true' : 'false'}
        />
        <span className="text-sm absolute top-48 left-2 text-red-500">{errors.server && errors.server.message}</span>
        <input
          className="bg-blue text-white px-6 py-1 rounded-md my-4 cursor-pointer"
          type="submit"
          value="Edit"
        />
      </form>

    </Card>
  );
};
