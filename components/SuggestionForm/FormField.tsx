import React from 'react'
import {FaLink, FaShop} from 'react-icons/fa6'
import {MdOutlineDescription} from 'react-icons/md'

interface FormFieldProps {
  label: string
  name: string
  type?: string
  placeholder: string
  register: any
  errors: any
}

const FormField: React.FC<FormFieldProps> = ({
  label,
  name,
  type = 'text',
  placeholder,
  register,
  errors,
}) => {
  return (
    <div className="pb-4">
      <label htmlFor={name}>
        <span className="inline-flex gap-1 items-center">
          {name === 'retailer' && <FaShop />}
          {name === 'description' && <MdOutlineDescription />}
          {name === 'url' && <FaLink />}
          {label}
        </span>
      </label>
      {type === 'textarea' ? (
        <textarea
          {...register}
          className={`w-full resize-none bg-gray-100 text-black p-2 rounded-lg focus:outline-none focus:shadow-outline border border-solid ${
            errors[name] ? 'border-red-600' : ''
          }`}
          placeholder={placeholder}
          name={name}
          id={name}
        />
      ) : (
        <input
          {...register}
          type={type}
          className={`w-full bg-gray-100 text-black p-2 rounded-lg focus:outline-none focus:shadow-outline border border-solid ${
            errors[name] ? 'border-red-600' : ''
          }`}
          placeholder={placeholder}
          name={name}
          id={name}
        />
      )}
      {errors[name] && <p className="text-red-600 text-sm">Please enter a {name}</p>}
    </div>
  )
}

export default FormField
