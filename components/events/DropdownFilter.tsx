import React from "react";
import Button from "../ui/Button";
import Select from "../ui/Select";
import { useForm, useController } from "react-hook-form";

function DropdownFilter(props: {
  setSlugPath: (year: string, month: string) => void;
}) {
  const yearOptions = [
    { value: "2022", label: "2022" },
    { value: "2023", label: "2023" },
  ];

  const monthOptions = [
    { value: "1", label: "January" },
    { value: "2", label: "February" },
    { value: "3", label: "March" },
    { value: "4", label: "April" },
    { value: "5", label: "May" },
    { value: "6", label: "June" },
    { value: "7", label: "July" },
    { value: "8", label: "August" },
    { value: "9", label: "September" },
    { value: "10", label: "October" },
    { value: "11", label: "November" },
    { value: "12", label: "December" },
  ];

  type FormValues = {
    year: string;
    month: string;
  };

  const { register, handleSubmit, control } = useForm<FormValues>();
  const yearField = useController({
    name: "year",
    control,
    defaultValue: "2022",
  }).field;
  const monthField = useController({
    name: "month",
    control,
    defaultValue: "1",
  }).field;

  const onSubmit = (data: FormValues) => {
    props.setSlugPath(data.year, data.month);
  };

  const handleYearChange = (option: React.ChangeEvent<HTMLSelectElement>) => {
    yearField.onChange(option.target.value);
  };
  const handleMonthChange = (option: React.ChangeEvent<HTMLSelectElement>) => {
    monthField.onChange(option.target.value);
  };

  return (
    <form
      className="2xl:w-1/2 w-2/3 lg:h-14 md:h-40 sm:h-32 h-24 mx-auto mt-20 mb-4 rounded-lg flex lg:flex-row flex-col justify-evenly items-center bg-white"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="flex items-center">
        <div className="w-12 mr-4">
          <label htmlFor="year-select">Year</label>
        </div>
        <Select
          id="year-select"
          className="lg:w-40 md:w-32 w-28 lg:h-8 md:h-10 sm:h-8 h-6 border-solid border-2 border-secondaryClrDark"
          options={yearOptions}
          onChange={handleYearChange}
        />
      </div>
      <div className="lg:ml-4 flex items-center">
        <div className="w-12 mr-4">
          <label htmlFor="month-select">Month</label>
        </div>
        <Select
          id="month-select"
          className="lg:w-40 md:w-32 w-28 lg:h-8 md:h-10 sm:h-8 h-6 border-solid border-2 border-secondaryClrDark"
          options={monthOptions}
          onChange={handleMonthChange}
        />
      </div>
      <Button buttonType="dropdown-filter" />
    </form>
  );
}

export default DropdownFilter;
