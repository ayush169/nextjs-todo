"use client";

import { FormInputPost } from "@/types";
import FormPost from "@/components/FormPost";
import { SubmitHandler } from "react-hook-form";

type Props = {};

const EditPostPage = (props: Props) => {
  const handleEditPost: SubmitHandler<FormInputPost> = (data) => {
    console.log(data);
  };

  return (
    <div>
      <h2 className="text-2xl my-4 font-bold text-center">Edit post</h2>
      <FormPost submit={handleEditPost} isEditing />
    </div>
  );
};

export default EditPostPage;
