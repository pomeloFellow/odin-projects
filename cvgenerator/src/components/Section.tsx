import React from 'react';
import { useState } from "react";
import FormInput from './FormInput';
import '../styles/Section.css'

interface SectionProps {
  sectionName: string;
  fields: {[field: string]: string};
}

const Section: React.FC<SectionProps> = ({sectionName, fields}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [info, setInfo] = useState(fields);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInfo({...info, [e.target.name]: e.target.value});
  }

  const handleSubmit = (e: FormEventHandler<HTMLFormElement>) => {
    e.preventDefault();
    setIsEditing(false);
  }

  const handleEdit = () => {
    setIsEditing(true);
  };

  return(
    <div className='SectionParentDiv'>
      <h2 className='SectionName'>{sectionName}</h2>
      {isEditing ? (
        <form className='InputForm' onSubmit = {handleSubmit}>
          {Object.entries(fields).map(([field, placeholder]) =>(
            <FormInput
              key={field}
              name={field}
              value={info[field]}
              onChange={handleChange}
              placeholder={placeholder}
            />
          ))}
          <button className='SubmitButton' type="submit">Submit</button>
        </form>
      ) : (
        <div className='StableInfo'>
          {Object.entries(fields).map(([field]) => (
            <p key={field}>
              <strong>{field}:</strong> {info[field]}
            </p>
          ))}
          <button className='EditButton' onClick={handleEdit}>Edit</button>
        </div>
      )}
    </div>
  );
};

export default Section;