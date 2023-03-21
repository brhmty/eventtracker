import React from "react";
import Button from "../ui/Button";

function FilteredResultTitle(props: { year: number; month: number }) {
  const { year } = props;
  const { month } = props;

  const humanReadableDate = new Date(`${year}-${month}`).toLocaleDateString(
    "en-EN",
    {
      month: "long",
      year: "numeric",
    }
  );

  return (
    <div className="w-fit mx-auto flex flex-col items-center">
      <h1 className="my-4 2xl:text-4xl xl:text-xl lg:text-2xl md:text-4xl sm:text-3xl text-md text-black dark:text-white">{`Events in ${humanReadableDate}`}</h1>
      <Button buttonType="filtered-result-title" />
    </div>
  );
}

export default FilteredResultTitle;
