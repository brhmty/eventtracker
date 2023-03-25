import Button from "@/components/ui/Button";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { showHideComment } from "@/store/slices/eventSlice";
import { isNewComment, setComments } from "@/store/slices/eventSlice";
import { RootState } from "@/store/store";
import CommentList from "./CommentList";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

function CommentForm(props: { eventId: string }) {
  const { eventId } = props;
  const dispatch = useDispatch();
  const { showComments, comments, newComment } = useSelector(
    (state: RootState) => state.events
  );

  const schema = z.object({
    email: z.string().email(),
    name: z.string().min(3),
    comment: z.string().min(20),
  });

  type FormValues = {
    email: string;
    name: string;
    comment: string;
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: FormValues) => {
    fetch("/api/comments/" + eventId, {
      method: "POST",
      body: JSON.stringify({
        email: data.email,
        name: data.name,
        comment: data.comment,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    dispatch(isNewComment(!newComment));
    reset();
  };

  useEffect(() => {
    fetch("/api/comments/" + eventId)
      .then((response) => response.json())
      .then((data) => {
        dispatch(setComments([]));
        dispatch(setComments(data.comments));
      });
  }, [dispatch, eventId, newComment]);

  const handleClick = () => {
    dispatch(showHideComment(!showComments));
  };

  return (
    <div className="lg:absolute 2xl:top-[53rem] lg:top-[35rem] lg:left-[50%] lg:translate-x-[-50%]">
      <Button buttonType="show-hide-comment-form" onClick={handleClick} />
      <div className="w-screen">
        {!showComments || (
          <>
            <form
              className="2xl:w-1/2 lg:w-1/3 w-2/3 2xl:h-80 xl:h-[22rem] lg:h-[20rem] md:h-72 sm:h-60 h-64 mx-auto mt-7 grid grid-cols-2 grid-rows-4 gap-4 bg-btnClr dark:bg-btnClrDark"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className="m-3">
                <label
                  htmlFor="email"
                  className="2xl:text-2xl xl:text-xl lg:text-lg md:text-md sm:text-sm text-xs text-white"
                >
                  Your email
                </label>
                <input
                  id="email"
                  className="w-full lg:h-8 md:h-6 h-5 rounded"
                  {...register("email")}
                ></input>
                <h5 className="sm:text-xs text-[0.5rem] font-medium text-red-500">
                  {errors.email?.message}
                </h5>
              </div>
              <div className="m-3">
                <label
                  htmlFor="name"
                  className="2xl:text-2xl xl:text-xl lg:text-lg md:text-md sm:text-sm text-xs text-white"
                >
                  Your name
                </label>
                <input
                  id="name"
                  className="w-full lg:h-8 md:h-6 h-5 rounded"
                  {...register("name")}
                ></input>
                <h5 className="sm:text-xs text-[0.5rem] font-medium text-red-500">
                  {errors.name?.message}
                </h5>
              </div>
              <div className="flex flex-col mx-3 row-span-2 col-span-2">
                <label
                  htmlFor="comment"
                  className="2xl:text-2xl xl:text-xl lg:text-lg md:text-md sm:text-sm text-xs text-white"
                >
                  Your Comment
                </label>
                <textarea id="comment" rows={3} {...register("comment")} />
                <h5 className="sm:text-xs text-[0.5rem] font-medium text-red-500">
                  {errors.comment?.message}
                </h5>
              </div>
              <div className="col-span-2">
                <Button buttonType="submit-comment-form" />
              </div>
            </form>
            {comments.length > 0} ||
            {comments.map((comment) => {
              return (
                <CommentList
                  key={comment._id}
                  name={comment.comment.name}
                  comment={comment.comment.comment}
                />
              );
            })}
            <div className="h-4"></div>
          </>
        )}
      </div>
    </div>
  );
}

export default CommentForm;
