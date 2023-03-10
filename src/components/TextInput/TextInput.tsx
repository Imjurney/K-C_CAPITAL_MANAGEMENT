import { useForm, ValidationError } from '@formspree/react';
import { ReactNode, useEffect, useRef } from 'react';
import { Success } from '@/components/Success/Success';
import TextInputStyle from '@/components/TextInput/TextInput.module.css';
import { Button } from '../Button/Button';
import clsx from 'clsx';
interface FormProvierProps {
  uuid?: string;
  children: ReactNode;
}
function FormProvier({ ...props }: FormProvierProps) {
  const { children } = props;
  props.uuid = 'xzbqvpab';
  const formRef = useRef<HTMLFormElement>(null);
  const [state, handleSubmit, field] = useForm('contactForm');
  if (state.succeeded) {
    return <Success />;
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit}>
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
  return (
    <FormProvier>
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
      </div>

      <textarea
        className="resize-none"
        name="memo"
        id="momo"
        cols={10}
        rows={1}
      >
        df
      </textarea>
      <button type="submit">dfd</button>
    </FormProvier>
  );
}

// export {};
