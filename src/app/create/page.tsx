"use client";

import { SubmitHandler } from "react-hook-form";

import FormPost from "../../components/FormPost";
import { FormInputPost } from "@/types";
import BackButton from "@/components/BackButton";

type Props = {};

const CreatePage = (props: Props) => {
  const handleCreatePost: SubmitHandler<FormInputPost> = (data) => {
    console.log(data);
  };

  return (
    <div>
      <BackButton />
      <h2 className="text-2xl my-4 font-bold text-center">Add new post</h2>
      <FormPost submit={handleCreatePost} isEditing={false} />
    </div>
  );
};

export default CreatePage;
