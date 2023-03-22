import React from "react";

function Select(props: {
  id: string;
  className: string;
  options: Array<{ value: string; label: string }>;
  onChange: (option: React.ChangeEvent<HTMLSelectElement>) => void;
}) {
  const { id, className, options, onChange } = props;

  return (
    <select id={id} className={className} onChange={onChange}>
      {options.map((option, i) => {
        return (
          <option key={i} value={option.value}>
            {option.label}
          </option>
        );
      })}
    </select>
  );
}

export default Select;
