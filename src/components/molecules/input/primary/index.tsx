import { twMerge } from "tailwind-merge";

const InputPrimary = ({
  className,
  ...rest
}: React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>) => {
  return (
    <input
      className={twMerge(
        "w-[250px] border-t-2 outline-none border-x-2 px-2 rounded-lg  h-[30px] bg-white ",
        className
      )}
      {...rest}
    />
  );
};

export { InputPrimary };
