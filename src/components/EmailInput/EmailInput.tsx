import EamilInputStyle from '@/components/EmailInput/EmailInput.module.css';
import clsx from 'clsx';
import { InputHTMLAttributes, PropsWithChildren } from 'react';
import {
  UseFormRegister,
  FieldValues,
  Path,
  RegisterOptions,
  useController,
  useFormContext,
} from 'react-hook-form';

interface EmailInputProps<FormType extends object>
  extends InputHTMLAttributes<HTMLInputElement> {
  name: Path<FormType>;
  rules?: RegisterOptions<FormType>;
  className?: string;
}
export function EmailInput<FormType extends object>({
  className,
  name,
  rules,
  ...rest
}: PropsWithChildren<EmailInputProps<FormType>>) {
  const { control } = useFormContext<FormType>();
  const { field } = useController({
    name,
    control,
    rules,
  });
  return (
    <>
      <div className={clsx(className, EamilInputStyle.wrapper)} tabIndex={0}>
        <label className={EamilInputStyle.outline_vertical} htmlFor="email">
          Email
        </label>
        <div className={EamilInputStyle.mail_wrapper}>
          <input
            type="emaii"
            className={EamilInputStyle.input}
            required
            placeholder="kccompany01 @ google.com"
            name={field.name}
            onChange={field.onChange}
            onBlur={field.onBlur}
            value={field.value}
            ref={field.ref}
            {...rest}
          />
        </div>
      </div>
    </>
  );
}
