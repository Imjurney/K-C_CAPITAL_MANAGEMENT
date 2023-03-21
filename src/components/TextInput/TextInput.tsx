import TextInputStyle from '@/components/TextInput/TextInput.module.css';
import {
  FieldErrors,
  FieldValues,
  RegisterOptions,
  UseFormRegister,
} from 'react-hook-form';
import clsx from 'clsx';

interface TextInputProps {
  labelName: string;
  placeholder: string;
  direction: 'horizon' | 'vertical';
  type: string;
  register: UseFormRegister<FieldValues>;
  errors?: FieldErrors;
  validationSchema?: RegisterOptions;
  name: string;
}
const directions = {
  horizon: TextInputStyle.outline_horizon,
  vertical: TextInputStyle.outline_vertical,
};

export function TextInput({
  direction = 'vertical',
  placeholder,
  labelName,
  register,
  name,
  type = 'text',
}: TextInputProps) {
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
        {...(register && register(name))}
        className={
          direction === 'vertical'
            ? TextInputStyle.input_vertical
            : TextInputStyle.input_horizon
        }
        type={type}
        name={name}
        id={name}
      />
    </div>
  );
}
