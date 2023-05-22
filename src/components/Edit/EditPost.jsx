import { useForm } from "react-hook-form";
import { useHomeContext } from "../../contexts/HomeContext";
import { usePostsContext } from "../../contexts/PostsContext";
import Card from "../ui/Card";

export default function EditPost({ onCloseEdit, onEditSubmitHandler }) {
    const { selectedPost } = useHomeContext();
    const {
        register,
        handleSubmit,
        setError,
        formState: { errors },
    } = useForm({
        defaultValues: {
            text: selectedPost.text,
            picture: selectedPost.picture,
        },
    });

    const onSubmit = async (data) => {
        try {
            onEditSubmitHandler(data);
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
        <div className="w-1/2">
            <Card>
                <div className="flex justify-center relative">
                    <h2 className="text-xl font-bold mb-2">Edit Profile</h2>
                    <svg onClick={() => onCloseEdit(false)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 absolute right-0 cursor-pointer"> <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /> </svg>
                </div>

                <form className="flex relative flex-col mt-10 mx-12 gap-5" onSubmit={handleSubmit(onSubmit)}>
                    {/* Post text and validation */}
                    {errors.text?.type === 'required' && <span className="text-sm absolute -top-6 left-0 md:left-2 text-red-500">Text is required</span>}
                    {errors.text?.type === 'maxLength' && <span className="text-sm absolute -top-6 left-0 md:left-2 text-red-500">Max length is 300</span>}
                    <label className="block" htmlFor="text"></label>
                    {/* value={postData.text}
                        onChange={onChangeHandler} */}
                    <textarea
                        className="grow p-3 h-14 dark:bg-blackbg"
                        id="text"
                        name="text"
                        type="text"
                        placeholder="What's on your mind?"
                        {...register('text', { required: true, maxLength: 300 })}
                        aria-invalid={errors.text ? 'true' : 'false'}
                    />

                    {/* Picture and validation */}
                    {errors.picture?.type === 'required' && <span className="text-sm absolute -top-6 left-32 md:left-44 text-red-500">Picture is required</span>}
                    <label className='block' htmlFor="picture">Picture: </label>
                    <input
                        className="border rounded-lg px-3 py-1 w-1/2 border-gray-300 dark:text-blacktext"
                        id="picture"
                        name="picture"
                        type="url"
                        {...register('picture', { required: true })}
                        aria-invalid={errors.picture ? 'true' : 'false'}
                    />
                    <span className="text-sm absolute top-48 left-2 text-red-500">{errors.server && errors.server.message}</span>
                    <input
                        className="bg-blue text-white px-6 py-1 rounded-md my-4 cursor-pointer"
                        type="submit"
                        value="Edit"
                    />
                </form>
            </Card>
        </div>
    );
};
