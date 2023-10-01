import React from 'react';
import './style.css';
interface ITextInput {
  label: string;
  type?: React.HTMLInputTypeAttribute | undefined;
  placeholder?: string | undefined;
  onChange?: React.ChangeEventHandler<HTMLInputElement> | undefined;
}
const TextInput: React.FC<ITextInput> = ({ label, onChange, placeholder, type }) => {
  return (
    <div className="container">
      <label>{label}</label>
      <input
        required
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        style={{ padding: 10 }}
      />
    </div>
  );
};

export default TextInput;
