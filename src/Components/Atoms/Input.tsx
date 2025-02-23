const Input = ({
  className = "",
  ...props
}: React.InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <input
      className={`rounded-[8px] py-2 px-4 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-950 ${className}`}
      {...props}
    ></input>
  );
};

export default Input;
