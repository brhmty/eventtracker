import React, { useEffect } from "react";
import Link from "next/link";
import ArrowRight from "../icons/ArrowRight";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/store/store";
import { comment } from "../../utils/data/text";
import { setBtnCommentLabel } from "@/store/slices/eventSlice";

function Button(props: {
  itemId?: string;
  buttonType?: string;
  onClick?: () => void;
}) {
  const { itemId, buttonType, onClick } = props;
  const dispatch = useDispatch();
  const { showComments, btnCommentLabel } = useSelector(
    (state: RootState) => state.events
  );

  useEffect(() => {
    const btnCommentLabel = showComments
      ? comment.hideComment
      : comment.showComment;
    dispatch(setBtnCommentLabel(btnCommentLabel));
  }, [dispatch, showComments]);

  if (buttonType === "dropdown-filter") {
    return (
      <div className="flex justify-center space-x-2">
        <button
          type="submit"
          data-te-ripple-init
          data-te-ripple-color="light"
          className="md:w-max w-fit rounded md:px-2 sm:px-3 px-2 md:py-2 sm:py-1.5 py-1 text-xs font-medium uppercase leading-normal flex bg-btnClr dark:bg-btnClrDark text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] whitespace-nowrap"
        >
          <span className="lg:text-xs md:text-sm sm:text-xs text-[7px] self-center">
            Find Events
          </span>
          <span className="md:ml-2 ml-1">
            <ArrowRight />
          </span>
        </button>
      </div>
    );
  } else if (buttonType === "newsletter-registration") {
    return (
      <div className="flex justify-center space-x-2">
        <button
          type="submit"
          data-te-ripple-init
          data-te-ripple-color="light"
          className="md:w-max w-fit rounded-r md:px-2 sm:px-3 px-2 md:py-2 sm:py-1.5 py-1 text-xs font-medium uppercase leading-normal flex bg-btnClr dark:bg-btnClrDark text-white transition duration-150 ease-in-out hover:bg-primary-600 focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] whitespace-nowrap"
        >
          <span className="lg:text-xs md:text-sm sm:text-xs text-[7px] self-center">
            Register
          </span>
        </button>
      </div>
    );
  } else if (buttonType === "show-hide-comment-form") {
    return (
      <div className="flex justify-center space-x-2">
        <button
          data-te-ripple-init
          data-te-ripple-color="light"
          className="md:w-max w-fit rounded md:px-2 sm:px-3 px-2 md:py-2 sm:py-1.5 py-1 text-center font-medium uppercase leading-normal flex bg-btnClr dark:bg-btnClrDark text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 whitespace-nowrap"
          onClick={onClick}
        >
          <span className="2xl:w-60 xl:w-36 md:w-32 w-24 2xl:text-xl xl:text-sm lg:text-xs md:text-sm sm:text-xs text-[7px] self-center">
            {btnCommentLabel}
          </span>
        </button>
      </div>
    );
  } else if (buttonType === "submit-comment-form") {
    return (
      <div className="flex justify-center space-x-2">
        <button
          type="submit"
          data-te-ripple-init
          data-te-ripple-color="light"
          className="md:w-max w-fit rounded md:px-2 sm:px-3 px-2 md:py-2 sm:py-1.5 py-1 text-center font-medium uppercase leading-normal flex bg-btnClr dark:bg-primaryClrDark text-white transition duration-150 ease-in-out dark:hover:bg-btnClr whitespace-nowrap"
        >
          <span className="2xl:w-60 xl:w-36 md:w-32 w-24 2xl:text-xl xl:text-sm lg:text-xs md:text-sm sm:text-xs text-[7px] self-center">
            Save Comment
          </span>
        </button>
      </div>
    );
  } else if (buttonType === "filtered-result-title") {
    return (
      <div>
        <Link
          data-te-ripple-init
          data-te-ripple-color="light"
          href={`/events`}
          className="md:w-max w-fit rounded md:px-2 sm:px-3 px-2 md:py-2 sm:py-1.5 py-1 text-xs font-medium uppercase leading-normal flex bg-btnClr dark:bg-btnClrDark text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] whitespace-nowrap"
        >
          <span className="lg:text-xs md:text-sm sm:text-xs text-[7px] self-center">
            Show All Events
          </span>
        </Link>
      </div>
    );
  } else if (buttonType === "event-item") {
    return (
      <div className="flex justify-center space-x-2">
        <Link
          data-te-ripple-init
          data-te-ripple-color="light"
          href={`/events/${itemId}`}
          className="md:w-max w-fit rounded lg:px-2 sm:px-6 px-2 lg:py-2 sm:py-2.5 py-1 text-xs font-medium uppercase leading-normal flex bg-btnClr dark:bg-btnClrDark text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] whitespace-nowrap"
        >
          <span className="lg:text-xs md:text-lg sm:text-base text-[7px] self-center">
            Explore Event
          </span>
          <span className="md:ml-2 ml-1">
            <ArrowRight />
          </span>
        </Link>
      </div>
    );
  } else {
    return <button></button>;
  }
}

export default Button;
