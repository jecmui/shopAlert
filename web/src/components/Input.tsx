export default function Input({
  type = "text",
  placeholder,
  value,
  onChange,
  maxlength,
  minlength,
  required,
  alt,
  name,
  pattern,
}: {
  type?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  maxlength?: number;
  minlength?: number;
  required?: boolean;
  alt?: string;
  name?: string;
  pattern?: string;
}) {
  return (
    <div style={{ marginBottom: "1rem" }}>
      {name && (
        <label htmlFor={name} style={{ fontWeight: "bold", display: "block" }}>
          {name.charAt(0).toUpperCase() + name.slice(1)}
          {required && <span style={{ color: "red" }}>*</span>}
        </label>
      )}

      {/* Input element with styles */}
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        maxLength={maxlength}
        minLength={minlength}
        required={required}
        alt={alt}
        name={name}
        pattern={pattern}
        style={{
          width: "100%",
          padding: "8px",
          marginTop: "4px",
          border: "1px solid #ccc",
          borderRadius: "4px",
          fontSize: "16px",
          outline: "none",
          backgroundColor: "#fafafa",
        }}
      />
    </div>
  );
}
