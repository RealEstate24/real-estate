/* eslint-disable @next/next/no-img-element */
import { FC, InputHTMLAttributes } from "react";

import { Controller, useFormContext } from "react-hook-form";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: boolean;
}

export interface ControlledInputProps extends InputProps {
  name: string;
}

export const Input: FC<InputProps> = (props) => {
  // **Props
  const { label, type = "text", disabled = false, error, ...rest } = props;

  const getClasses = () => {
    let className = "form-input";

    if (error) {
      className += " error";
    }

    if (disabled) {
      className = "form-input disabled";
    }

    return className;
  };

  return (
    <div className={getClasses()}>
      <label className="form-input__wrapper">
        {label && <span>{label}</span>}
        <input type={type} disabled={disabled} {...rest} />
      </label>
    </div>
  );
};

export const ControlledInput: FC<ControlledInputProps> = (props) => {
  // **Props
  const { name, ...rest } = props;

  // **Form
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <Input
          value={field.value || ""}
          onChange={field.onChange}
          error={!!error}
          {...rest}
        />
      )}
    />
  );
};
