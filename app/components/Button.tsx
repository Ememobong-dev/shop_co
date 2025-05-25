
interface ButtonProps {
  text: string;
  fullWidth?: boolean;
  variant: "filled" | "bordered";
  onClick?: () => void;
}

export const Button = ({ text, variant, fullWidth, onClick }: ButtonProps) => {
  return (
    <button onClick={onClick} className={` font-satoshi-reg cursor-pointer ${fullWidth ? "w-full": ""} ${variant === "filled" ? "text-white bg-black" : "bg-transparent border border-black/10 text-black"} py-2 px-8 rounded-full`}>
      {text}
    </button>
  );
};
