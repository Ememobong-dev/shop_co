
interface ButtonProps {
  text: string;
  variant: "filled" | "bordered";
}

export const Button = ({ text, variant }: ButtonProps) => {
  return (
    <button className={` ${variant === "filled" ? "text-white bg-black" : "bg-transparent border border-black/10 text-black"} py-2 px-8 rounded-full`}>
      {text}
    </button>
  );
};
