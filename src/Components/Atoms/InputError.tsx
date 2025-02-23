interface InputErrorProps extends React.HTMLAttributes<HTMLSpanElement> {
  error: string;
}

const InputError = ({ error, className = "", ...props }: InputErrorProps) => {
  return (
    <span className={`text-red-400 ${className}`} {...props}>
      {error}
    </span>
  );
};

export default InputError;
