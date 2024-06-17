"use client";
import { FC } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

import { FormInputPost } from "@/types";

interface FormPostProps {
  submit: SubmitHandler<FormInputPost>;
  isEditing: boolean;
}

const FormPost: FC<FormPostProps> = ({ submit, isEditing }) => {
  const { register, handleSubmit } = useForm<FormInputPost>();

  return (
    <form
      onSubmit={handleSubmit(submit)}
      className="flex flex-col items-center justify-center gap-5 mt-10"
    >
      <input
        type="text"
        {...register("title", { required: true })}
        placeholder="Post title..."
        className="input input-bordered w-full max-w-lg"
      />
      <textarea
        {...register("content", { required: true })}
        className="textarea textarea-bordered w-full max-w-lg"
        placeholder="Post content..."
      ></textarea>

      <select
        {...register("tags", { required: true })}
        className="select select-bordered w-full max-w-lg"
        defaultValue={""}
      >
        <option disabled value="">
          select tags
        </option>
        <option>javascript</option>
        <option>rust</option>
        <option>java</option>
        <option>go</option>
      </select>

      <button type="submit" className="btn btn-primary w-full max-w-lg">
        {isEditing ? "Update post" : "Create post"}
      </button>
    </form>
  );
};

export default FormPost;
