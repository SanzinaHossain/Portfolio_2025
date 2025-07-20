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
    alert("Request accepted successfully !!!")
    reset();
  };

  return { register, handleSubmit, reset, handleAddContact, errors };
}
