import React, { useRef } from "react";
import Button from "../ui/Button";

function DropdownFilter(props: {
  setSlugPath: (year: string, month: string) => void;
}) {
  const refYear = useRef<HTMLSelectElement>(null);
  const refMonth = useRef<HTMLSelectElement>(null);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (refYear.current && refMonth.current) {
      const month = refMonth.current.value;
      const year = refYear.current.value;

      props.setSlugPath(year, month);
    }
  };

  return (
    <form
      className="2xl:w-1/2 w-2/3 lg:h-14 md:h-40 sm:h-32 h-24 mx-auto my-4 rounded-lg flex lg:flex-row flex-col justify-evenly items-center bg-white"
      onSubmit={handleSubmit}
    >
      <div className="flex items-center">
        <div className="w-12 mr-4">
          <label htmlFor="year-select">Year</label>
        </div>
        <select
          id="year-select"
          className="lg:w-40 md:w-32 w-28 lg:h-8 md:h-10 sm:h-8 h-6 border-solid border-2 border-secondaryClrDark"
          ref={refYear}
        >
          <option>2022</option>
          <option>2023</option>
        </select>
      </div>
      <div className="lg:ml-4 flex items-center">
        <div className="w-12 mr-4">
          <label htmlFor="month-select">Month</label>
        </div>
        <select
          id="month-select"
          className="lg:w-40 md:w-32 w-28 lg:h-8 md:h-10 sm:h-8 h-6 border-solid border-2 border-secondaryClrDark"
          ref={refMonth}
        >
          <option value="1">January</option>
          <option value="2">February</option>
          <option value="3">March</option>
          <option value="4">April</option>
          <option value="5">May</option>
          <option value="6">June</option>
          <option value="7">July</option>
          <option value="8">August</option>
          <option value="9">September</option>
          <option value="10">October</option>
          <option value="11">November</option>
          <option value="12">December</option>
        </select>
      </div>
      <Button buttonType="dropdown-filter" />
    </form>
  );
}

export default DropdownFilter;
