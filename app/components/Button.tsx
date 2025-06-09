interface ButtonProps {
  text: string;
  fullWidth?: boolean;
  variant: "filled" | "bordered";
  onClick?: () => void;
  size?: "sm" | "md";
  icon?: string;
}

export const Button = ({
  text,
  variant,
  fullWidth,
  onClick,
  size = "sm",
  icon
}: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={` ${
        size === "sm" ? "py-2 " : "py-4"
      } font-satoshi-reg cursor-pointer ${fullWidth ? "w-full" : ""} ${
        variant === "filled"
          ? "text-white bg-black"
          : "bg-transparent border border-black/10 text-black"
      }  px-8 flex gap-3 items-center justify-center rounded-full`}
    >
      {text}
      {icon && (
        <span>
          <img src={icon} alt="button_icon" />
        </span>
      )

      }
    </button>
  );
};
