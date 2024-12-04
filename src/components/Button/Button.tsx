import cn from "classnames";
import { type PropsWithChildren } from "react";

type ButtonProps = {
  handleClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  withBorders?: boolean;
  className?: string;
  type?: "primary" | "reject";
};

const Button = ({
  children,
  handleClick,
  type = "primary",
}: PropsWithChildren<ButtonProps>) => {
  return (
    <button
      onClick={handleClick}
      className={cn(
        "text-center items-center gap-1 rounded-lg px-3.5 py-2.5 font-semibold duration-200 ease-linear ",
        {
          "bg-purple-700 hover:bg-purple-600 text-white": type === "primary",
          "bg-red-700 hover:bg-red-600 text-white": type === "reject",
        }
      )}
    >
      {children}
    </button>
  );
};

export default Button;
