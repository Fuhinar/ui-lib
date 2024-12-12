import "./index.css";

function Input({
  className = "",
  type = "text",
  placeholder = "Enter any text",
  value,
  onChange,
  disabled = false,
  label = "Name",
  danger = false,
}) {
  return (
    <div className="input-container">
      {label && (
        <label className={`input-label ${danger ? "input-label--danger" : "input-label--safe"}`}>
          {label}
        </label>
      )}
      <input
        type={type}
        className={`input ${className} ${disabled ? "input--disabled" : "input--enabled"} ${danger ? "input--danger" : "input--safe"}`}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        disabled={disabled}
      />
    </div>
  );
}

export default Input;