import { forwardRef, SelectHTMLAttributes } from "react";
import { UseFormRegisterReturn } from "react-hook-form";
import cn from "classnames";

type SelectOption = {
  value: string;
  label: string;
};

type SelectProps = {
  label: string;
  error?: string;
  options: SelectOption[];
} & UseFormRegisterReturn &
  SelectHTMLAttributes<HTMLSelectElement>;

const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ id, label, options, error, ...rest }, ref) => {
    return (
      <div className="relative flex flex-col gap-1.5 gap-y-1.5">
        <label
          htmlFor={id}
          className={cn("text-sm font-medium text-gray-600", {
            "text-red-500": error,
          })}
        >
          {label}
        </label>
        <div className="relative ">
          <select
            ref={ref}
            className={cn(
              "w-full rounded-lg border text-gray-600 border-gray-500 px-3 py-2 ",
              {
                "border-red-500": error,
              }
            )}
            defaultValue={""}
            {...rest}
          >
            <option value={""} hidden disabled>
              Select your option
            </option>

            {options.map(({ value, label }) => (
              <option key={value} value={value}>
                {label}
              </option>
            ))}
          </select>
        </div>

        <p className="absolute right-0 top-full text-sm text-red-500">
          {error}
        </p>
      </div>
    );
  }
);

Select.displayName = "Select";

export default Select;
