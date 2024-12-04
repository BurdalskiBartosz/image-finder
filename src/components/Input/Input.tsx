import cn from "classnames";
import { forwardRef } from "react";
import { UseFormRegisterReturn } from "react-hook-form";

type InputProps = {
  id: string;
  label: string;
  placeholder: string;
  error?: string;
} & UseFormRegisterReturn;

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ id, label, placeholder, error, ...rest }, ref) => {
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
        <div className="relative text-gray-600">
          <input
            ref={ref}
            id={id}
            type="text"
            className={cn(
              "w-full rounded-lg border border-gray-500 px-3 py-2 ",
              {
                "border-red-500": error,
              }
            )}
            placeholder={placeholder}
            {...rest}
          />
        </div>

        <p className="absolute right-0 top-full text-sm text-red-500">
          {error}
        </p>
      </div>
    );
  }
);

Input.displayName = "Input";

export default Input;
