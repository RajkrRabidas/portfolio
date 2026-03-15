function ContactField({
  id,
  label,
  name,
  value,
  onChange,
  type = "text",
  message,
}) {
  const filledClassName = value.trim() ? "contact-input filled" : "contact-input";

  return (
    <div className="input-container">
      <div className="control-group form-group">
        <div className="controls">
          <input
            id={id}
            className={filledClassName}
            type={type}
            required
            name={name}
            value={value}
            onChange={onChange}
            data-validation-required-message={message}
          />
          <label htmlFor={id}>{label}</label>
          <span className="focus-border"></span>
        </div>
      </div>
    </div>
  );
}

export default ContactField;
