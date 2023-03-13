import { TUseForm, useForm, ValidationError } from '@formspree/react';
import { createContext, ReactNode, useEffect, useRef, useState } from 'react';
import { Success } from '@/components/Success/Success';
import TextInputStyle from '@/components/TextInput/TextInput.module.css';
import clsx from 'clsx';
import { EmailInput } from '../EmailInput/EmailInput';
import { Button } from '../Button/Button';

interface FormProvierProps {
  children?: ReactNode;
  onSubmit: TUseForm[1];
}

function FormProvier({ ...props }: FormProvierProps) {
  const { children } = props;
  const formRef = useRef<HTMLFormElement>(null);

  return (
    <form ref={formRef} onSubmit={props.onSubmit}>
      {children}
    </form>
  );
}

interface TextInputProps {
  labelName: string;
  placeholder: string;
  direction: 'horizon' | 'vertical';
  type: string;
}
const directions = {
  horizon: TextInputStyle.outline_horizon,
  vertical: TextInputStyle.outline_vertical,
};

export function TextInput({
  direction = 'vertical',
  placeholder,
  labelName,
  type = 'text',
}: TextInputProps) {
  const [state, handleSubmit] = useForm('contactForm');
  if (state.succeeded) {
    return <Success />;
  }
  return (
    <FormProvier onSubmit={handleSubmit}>
      <div
        aria-label="form"
        className={clsx(
          TextInputStyle.names_wrapper,
          direction === 'vertical'
            ? TextInputStyle.names_wrapper_vertical
            : TextInputStyle.names_wrapper_horizon
        )}
        tabIndex={0}
      >
        <label className={directions[direction]} htmlFor="firstName">
          {labelName}
        </label>
        <input
          required
          placeholder={placeholder}
          className={
            direction === 'vertical'
              ? TextInputStyle.input_vertical
              : TextInputStyle.input_horizon
          }
          type={type}
          name="firstName"
          id="firstName"
        />
        {/* <EmailInput />
        <ValidationError field="email" prefix="Email" errors={state.errors} /> */}
      </div>
    </FormProvier>
  );
}
