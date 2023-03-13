import TextInputStyle from '@/components/TextInput/TextInput.module.css';
import clsx from 'clsx';

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
        name={labelName.toLowerCase()}
        id="firstName"
      />
      {/* <EmailInput />
        <ValidationError field="email" prefix="Email" errors={state.errors} /> */}
    </div>
  );
}
