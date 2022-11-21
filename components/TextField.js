import React from 'react';
import { ErrorMessage, useField } from 'formik';

export const TextField = ({ label, ...props }) => {
  const [field] = useField(props);
  return (
    <div className="mb-4">
      <label className='text-sm font-montserrat text-theme-pale-gray-on-dark font-semibold' htmlFor={field.name}>{label}</label>
      <ErrorMessage component="span" name={field.name} className="text-red-500 font-bold ml-2" />
      <input
        className='w-full mt-1 px-4 py-2 border-2 text-sm border-theme-extra-pale-gray-on-dark/40 rounded-md sans bg-theme-dark focus:outline-gray-400'
        {...field} {...props}
        autoComplete="true"
      />
    </div>
  )
}

export const MessageField = ({ label, ...props }) => {
  const [field] = useField(props);
  return (
    <div >
      <label className='text-sm font-montserrat text-theme-pale-gray-on-dark font-semibold' htmlFor={field.name}>{label}</label>
      <ErrorMessage component="span" name={field.name} className="text-red-500 font-bold" />

      <textarea
        className='w-full mt-1 px-4 py-2 border-2 text-sm border-theme-extra-pale-gray-on-dark/40 rounded-md sans bg-theme-dark focus:outline-gray-400'
        rows="4" {...field} {...props} placeholder='Write your message here...' />
    </div>
  )
}