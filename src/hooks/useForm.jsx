import { useState } from "react";
import { validator } from "../utils/validator";

export function useForm(initValues, onSubmitHandler) {
  const [formData, setFormData] = useState(initValues);
  const [formErrors, setFormErrors] = useState(initValues);

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setFormData(state => ({ ...state, [name]: value }));
  };

  const validateForm = () => {
    setFormErrors(validator(formData));
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
    formErrors,
    validateForm
  };
};
