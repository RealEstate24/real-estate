import { FormHTMLAttributes, ReactNode } from "react";

import { FormProvider, UseFormReturn } from "react-hook-form";

import { ControlledInput } from "./input";

interface FormProps extends FormHTMLAttributes<HTMLFormElement> {
  children: ReactNode;
  methods: UseFormReturn<any>;
  onSubmit: VoidFunction;
}

const Form = (props: FormProps) => {
  // **Props
  const { methods, children, className, onSubmit } = props;

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={onSubmit}
        className={className ? `${className} form` : "form"}
      >
        {children}
      </form>
    </FormProvider>
  );
};

Form.Input = ControlledInput;

export { Form };
