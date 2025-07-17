/*
Author: Sanzina Hossain
Organization: Sanzina's Team
All right reserved by @Sanzina
*/

import { useForm } from "react-hook-form";

export default function ContactHooks() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const handleAddContact = (data) => {
    console.log(data);
    reset();
  };

  return { register, handleSubmit, reset, handleAddContact, errors };
}
