import React from "react";
import { UseFormRegister, FieldError } from "react-hook-form";

interface InputFieldProps {
  label: string;
  type: "text" | "email" | "password" | "select" | "textarea"; // Tambahkan 'textarea' ke tipe
  placeholder?: string; // Placeholder hanya untuk input teks
  register: UseFormRegister<any>; // Ganti `any` dengan tipe data sesuai kebutuhan
  name: string;
  error?: FieldError; // Menerima error dari react-hook-form
  options?: { value: string; label: string }[]; // Opsi untuk dropdown
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  type,
  placeholder,
  register,
  name,
  error,
  options, // Opsi dropdown
}) => {
  return (
    <div>
      <label htmlFor={name} className="block text-[18px] font-bold text-secondary">
        {label}:
      </label>
      {type === "select" ? (
        <select
          {...register(name)}
          id={name}
          className="block w-full p-4 mt-1 text-lg font-semibold border-2 text-success shadow-sm rounded-xl border-secondary focus:ring focus:ring-primary focus:border-primary"
        >
          <option value="" disabled className="bg-primary text-white border-4 border-secondary">
            {placeholder || "Pilih..."}
          </option>
          {options?.map((option) => (
            <option key={option.value} value={option.value} className="border-4 border-secondary">
              {option.label}
            </option>
          ))}
        </select>
      ) : type === "textarea" ? ( // Tambahkan kondisi untuk textarea
        <textarea
          {...register(name)}
          id={name}
          className="block w-full p-4 mt-1 text-lg font-semibold placeholder-opacity-50 border-2 shadow-sm rounded-xl border-secondary focus:ring focus:ring-primary focus:border-primary placeholder-secondary"
          placeholder={placeholder}
        />
      ) : (
        <input
          {...register(name)} 
          type={type}
          id={name}
          className="block w-full p-4 mt-1 text-lg font-semibold placeholder-opacity-50 border-2 shadow-sm rounded-xl border-secondary focus:ring focus:ring-primary focus:border-primary placeholder-secondary"
          placeholder={placeholder}
        />
      )}
      {/* Display error message if exists */}
      {error && (
        <span className="text-red-500 text-md font-semibold">
          {error.message}
        </span>
      )}
    </div>
  );
};

export default InputField;