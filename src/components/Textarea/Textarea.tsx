import TextareaStyle from '@/components/Textarea/Textarea.module.css';
import { PropsWithChildren, TextareaHTMLAttributes } from 'react';

import {
  UseFormRegister,
  FieldValues,
  RegisterOptions,
  Path,
  useFormContext,
  useController,
} from 'react-hook-form';

interface TextareatProps<FormType extends object>
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  name: Path<FormType>;
  rules?: RegisterOptions<FormType>;
}
export function Textarea<FormType extends object>({
  name,
  rules,
  ...rest
}: PropsWithChildren<TextareatProps<FormType>>) {
  const { control } = useFormContext<FormType>();
  const { field } = useController({
    name,
    control,
    rules,
  });
  return (
    <div className={TextareaStyle.names_wrapper}>
      <label className={TextareaStyle.label} htmlFor="message">
        Message
      </label>
      <textarea
        className={TextareaStyle.textarea}
        id="message"
        name={field.name}
        onChange={field.onChange}
        onBlur={field.onBlur}
        value={field.value}
        ref={field.ref}
        cols={10}
        rows={1}
        placeholder="put your extra message"
        {...rest}
      ></textarea>
    </div>
  );
}
