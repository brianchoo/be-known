import { forwardRef } from "react";

const FormInput = forwardRef(
  ({ type, id, isTextarea, label, ...props }, ref) => {
    const commonInputProps = {
      ref,
      id,
      ...props,
      className:
        "block w-full border-b pt-3 text-gray-900 focus:outline-none focus:border-b-2 focus:border-purple sm:text-md sm:leading-6",
    };

    const inputElement = isTextarea ? (
      <textarea {...commonInputProps} />
    ) : (
      <input {...commonInputProps} type={type} />
    );
    return (
      <div>
        {label && (
          <label className="block text-sm font-semibold leading-6 text-gray-900">
            {label}
          </label>
        )}
        {inputElement}
      </div>
    );
  }
);

export default FormInput;
