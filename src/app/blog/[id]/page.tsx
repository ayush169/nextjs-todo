"use client";

import BackButton from "@/components/BackButton";
import ButtonAction from "@/components/ButtonAction";

type Props = {};

const BlogDetailPage = (props: Props) => {
  return (
    <div>
      <BackButton />
      <div className="mb-8">
        <h2 className="text-2xl font-bold my-4">Post one</h2>
        <ButtonAction />
      </div>
      <p className="text-slate-700">Post one content</p>
    </div>
  );
};

export default BlogDetailPage;
