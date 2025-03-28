import React from "react";
import "./InputField.css";

const InputField = ({
    id,
    label,
    value,
    onChange,
    error,
    errorMessage,
    type = "text",
}) => {
    return (
        <div className="form__group">
            <label htmlFor={id}>{label}</label>
            <input
                type={type}
                id={id}
                value={value}
                onChange={onChange}
                className={error ? "error" : ""}
            />
            {error && <span className="error-message">{errorMessage}</span>}
        </div>
    );
};

export default InputField;
