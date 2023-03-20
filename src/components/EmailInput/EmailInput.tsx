import EamilInputStyle from '@/components/EmailInput/EmailInput.module.css';
import clsx from 'clsx';
import { UseFormRegister, FieldValues } from 'react-hook-form';

interface EmailInputProps {
  className?: string;
  register: UseFormRegister<FieldValues>;
}
export function EmailInput({ className, register }: EmailInputProps) {
  return (
    <>
      <div className={clsx(className, EamilInputStyle.wrapper)} tabIndex={0}>
        <label className={EamilInputStyle.outline_vertical} htmlFor="email">
          Email
        </label>
        <div className={EamilInputStyle.mail_wrapper}>
          <input
            className={EamilInputStyle.input}
            required
            {...(register && register('email'))}
            placeholder="kccompany01 @ google.com"
            name="email"
            type="text"
          />
        </div>
      </div>
    </>
  );
}
