import React from "react";

function CommentList(props: { name: string; comment: string }) {
  const { name, comment } = props;

  return (
    <div className="2xl:w-1/2 lg:w-1/3 w-2/3 mx-auto mt-4">
      <h3 className="2xl:text-2xl xl:text-xl lg:text-lg md:text-md sm:text-sm text-xs text-start text-black dark:text-white">
        {comment}
      </h3>
      <h3 className="2xl:text-2xl xl:text-xl lg:text-lg md:text-md sm:text-sm text-xs text-end text-black dark:text-white">
        {name}
      </h3>
      <div className="border border-solid border-b-1 border-black dark:border-white"></div>
    </div>
  );
}

export default CommentList;
