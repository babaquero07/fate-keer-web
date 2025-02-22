interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
  children?: React.ReactNode;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  isLoading?: boolean;
}

const Button = ({
  text,
  children,
  variant = "primary",
  size = "md",
  isLoading = false,
  className = "",
  disabled = false,
  ...props
}: ButtonProps) => {
  const baseStyles = "rounded-md font-medium transition-colors duration-200";

  const variants = {
    primary: "bg-white text-black hover:bg-gray-200",
    secondary: "bg-gray-200 text-black hover:bg-gray-300",
    outline:
      "bg-transparent border-2 border-white text-white hover:bg-white hover:text-black",
  };

  const sizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg",
  };

  return (
    <button
      className={`
        ${baseStyles}
        ${variants[variant]}
        ${sizes[size]}
        ${disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}
        ${isLoading ? "opacity-90 cursor-wait" : ""}
        ${className}
      `}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading ? (
        <span className="flex items-center justify-center gap-2">
          <span className="animate-spin">⏳</span>
          {children || text}
        </span>
      ) : (
        children || text
      )}
    </button>
  );
};

export default Button;
