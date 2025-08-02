// based on FormInput from https://github.com/AlexBuly/project-cv-application

import React from 'react';
import '../styles/FormInput.css'

interface FormInputProps {
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string; 
}

const FormInput: React.FC<FormInputProps> = ({ name, value, onChange, placeholder }) => {
  return (
    <input
      type="text"
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
};

export default FormInput;