import React from "react";
import {
  AiOutlinePlusCircle,
  AiOutlineMinusCircle,
  AiFillPlusCircle,
  AiFillMinusCircle,
} from "react-icons/ai";

interface InputProps {
  type: string;
  placeholder: string;
  value: number | string;
  onChange: (value: number) => void;
  disabled: boolean;
  sign: string;
  onSignChange: (newSign: string) => void;
}

const Input: React.FC<InputProps> = ({
  type,
  placeholder,
  value,
  onChange,
  disabled,
  sign,
  onSignChange,
}) => {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(Number(event.target.value));
  };

  return (
    <div className="">
      <div className="relative">
        <input
          className="shadow-sm rounded-3xl w-96 py-3 px-4 pr-16 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={handleInputChange}
          disabled={disabled}
        />
        <div className="absolute inset-y-0 right-0 flex items-center pr-2 gap-3">
          <button
            type="button"
            className="text-gray-600 hover:text-gray-800 cursor-pointer z-10"
            onClick={() => onSignChange("+")}
            disabled={disabled}
          >
            {sign === "+" ? (
              <AiFillPlusCircle size={20} className="text-blue-500" />
            ) : (
              <AiOutlinePlusCircle size={20} />
            )}
          </button>
          <button
            type="button"
            className="text-gray-600 hover:text-gray-800 cursor-pointer"
            onClick={() => onSignChange("-")}
            disabled={disabled}
          >
            {sign === "-" ? (
              <AiFillMinusCircle size={20} className="text-blue-500" />
            ) : (
              <AiOutlineMinusCircle size={20} />
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Input;
