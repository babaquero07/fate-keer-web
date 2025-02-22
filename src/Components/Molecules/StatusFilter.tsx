interface StatusFilterProps {
  onChange: (value: string) => void;
  options: {
    value: string;
    label: string;
  }[];
  defaultValue?: string;
  className?: string;
}

const StatusFilter = ({
  onChange,
  options,
  defaultValue = "all",
  className = "",
}: StatusFilterProps) => {
  return (
    <select
      name="status"
      id="status"
      onChange={(e) => onChange(e.target.value)}
      defaultValue={defaultValue}
      className={`p-2 border-2 border-gray-300 rounded-md cursor-pointer ${className}`}
    >
      {options.map((option) => (
        <option key={option.value} value={option.value} className="text-black">
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default StatusFilter;
