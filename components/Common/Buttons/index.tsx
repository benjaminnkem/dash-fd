import { ButtonHTMLAttributes, DetailedHTMLProps, FC } from "react";
import classNames from "classnames";
import { Loader } from "lucide-react";

type Props = {
  text: string;
  size?: "small" | "medium" | "large";
  variant?: "filled" | "outline" | "black";
  className?: string;
  rounded?: "full" | "sm" | "md" | "lg" | "xl" | "2xl";
  icon?: JSX.Element;
  iconPosition?: "right" | "left";
  disabled?: boolean;
  fullWidth?: boolean;
  isLoading?: boolean;
  onClick?: () => void;
} & DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

const Button: FC<Props> = (props) => {
  const {
    onClick,
    icon,
    className: extraClass = "",
    variant = "outline",
    text,
    size = "small",
    disabled = false,
    isLoading = false,
    iconPosition = "right",
    rounded = "lg",
    fullWidth = false,
  } = props;
  let mainClass = `rounded-${rounded} font-semibold duration-300 ${
    fullWidth ? "w-full flex items-center justify-center" : "w-auto"
  } disabled:opacity-40 `;

  switch (variant) {
    case "filled":
      mainClass += "bg-primary text-white hover:bg-primary/80 ";
      break;
    case "outline":
      mainClass += "bg-transparent border border-primary/50 hover:border-primary text-primary ";
      break;
    case "black":
      mainClass += "hover:bg-white/80 bg-white text-primary ";
      break;
    default:
      break;
  }

  switch (size) {
    case "small":
      mainClass += "px-6 py-[10px] text-sm ";
      break;
    case "medium":
      mainClass += "px-7 py-3 ";
      break;
    case "large":
      mainClass += "px-8 py-[14px] ";
      break;
    default:
      break;
  }

  return (
    <button
      onClick={onClick}
      className={`${classNames(mainClass, extraClass)} ${icon ? "flex items-center gap-1" : ""}`}
      disabled={disabled || isLoading}
    >
      {iconPosition === "left" && (
        <>
          {isLoading ? (
            <div className="">
              <Loader size={12} className="animate-spin" />
            </div>
          ) : (
            icon
          )}
        </>
      )}

      <span>{!isLoading ? text : "Loading..."}</span>

      {iconPosition === "right" && (
        <>
          {isLoading ? (
            <div className="">
              <Loader size={12} className="animate-spin" />
            </div>
          ) : (
            icon
          )}
        </>
      )}
    </button>
  );
};

export default Button;
