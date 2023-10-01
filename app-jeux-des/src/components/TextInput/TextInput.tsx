import React from 'react';
import './style.css';
interface ITextInput {
  label: string;
  type?: React.HTMLInputTypeAttribute | undefined;
  placeholder?: string | undefined;
  value?: string | number | readonly string[] | undefined;
  onChange?: React.ChangeEventHandler<HTMLInputElement> | undefined;
  role?: React.AriaRole | undefined;
}
const TextInput: React.FC<ITextInput> = ({ role, value, label, onChange, placeholder, type }) => {
  return (
    <div className="container">
      <label>{label}</label>
      <input
        required
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        style={{ padding: 10 }}
        value={value}
        role={role}
      />
    </div>
  );
};

export default TextInput;
