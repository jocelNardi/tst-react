import React from 'react';

interface ITextInput {
  label: string;
  type?: React.HTMLInputTypeAttribute | undefined;
  placeholder?: string | undefined;
  onChange?: React.ChangeEventHandler<HTMLInputElement> | undefined;
}
const TextInput: React.FC<ITextInput> = ({ label, onChange, placeholder, type }) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        margin: '5px 0',
      }}
    >
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
