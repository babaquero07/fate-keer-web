import { STATUS_OPTIONS } from "../../utils/constants";

interface StatusSelectProps {
  value: string;
  onChange: (value: string) => void;
  className?: string;
}

const StatusSelect = ({
  value,
  onChange,
  className = "",
}: StatusSelectProps) => {
  return (
    <select
      name="status"
      id="status"
      className={`p-2 border-2 border-gray-300 rounded-md cursor-pointer ${className}`}
      onChange={(e) => onChange(e.target.value)}
      value={value}
    >
      {STATUS_OPTIONS.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default StatusSelect;
