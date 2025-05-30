
interface ButtonProps {
  text: string;
  fullWidth?: boolean;
  variant: "filled" | "bordered";
  onClick?: () => void;
  size?: "sm" | "md"
}

export const Button = ({ text, variant, fullWidth, onClick, size="sm" }: ButtonProps) => {
  return (
    <button onClick={onClick} className={` ${size === "sm" ? "py-2 " : "py-4"} font-satoshi-reg cursor-pointer ${fullWidth ? "w-full": ""} ${variant === "filled" ? "text-white bg-black" : "bg-transparent border border-black/10 text-black"}  px-8 rounded-full`}>
      {text}
    </button>
  );
};
