import { useState } from "react";

export function useForm(initValues, onSubmitHandler) {
  const [formData, setFormData] = useState(initValues);

  const onChangeHandler = (e) => {
    setFormData(state => ({ ...state, [e.target.name]: e.target.value }));
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    if (onSubmitHandler) {
      onSubmitHandler(formData);
    }
  };

  return {
    onChangeHandler,
    onSubmit,
    formData,
  };
};
