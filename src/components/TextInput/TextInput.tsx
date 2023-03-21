import TextInputStyle from '@/components/TextInput/TextInput.module.css';
import {
  FieldErrors,
  FieldValues,
  Path,
  RegisterOptions,
  useController,
  useFormContext,
  UseFormRegister,
} from 'react-hook-form';
import clsx from 'clsx';
import { InputHTMLAttributes, PropsWithChildren } from 'react';

interface IRHInput<FormType extends object>
  extends InputHTMLAttributes<HTMLInputElement> {
  name: Path<FormType>;
  rules?: RegisterOptions<FormType>;
  labelName: string;
  placeholder: string;
  direction: 'horizon' | 'vertical';
  type: string;
}

const directions = {
  horizon: TextInputStyle.outline_horizon,
  vertical: TextInputStyle.outline_vertical,
};

export function TextInput<FormType extends object>({
  direction = 'vertical',
  placeholder,
  labelName,
  name,
  type = 'text',
  ...rest
}: PropsWithChildren<IRHInput<FormType>>) {
  const { control } = useFormContext<FormType>();
  const { field } = useController({
    name,
    control,
  });
  return (
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
        name={field.name}
        id={field.name}
        ref={field.ref}
        onChange={field.onChange}
        value={field.value}
        {...rest}
      />
    </div>
  );
}
