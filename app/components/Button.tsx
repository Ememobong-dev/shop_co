
interface ButtonProps {
  text: string;
  fullWidth?: boolean;
  variant: "filled" | "bordered";
}

export const Button = ({ text, variant, fullWidth }: ButtonProps) => {
  return (
    <button className={` cursor-pointer ${fullWidth ? "w-full": ""} ${variant === "filled" ? "text-white bg-black" : "bg-transparent border border-black/10 text-black"} py-2 px-8 rounded-full`}>
      {text}
    </button>
  );
};
