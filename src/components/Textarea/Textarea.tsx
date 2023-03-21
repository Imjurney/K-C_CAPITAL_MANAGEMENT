import TextareaStyle from '@/components/Textarea/Textarea.module.css';

import { UseFormRegister, FieldValues } from 'react-hook-form';

interface TextareatProps {
  register: UseFormRegister<FieldValues>;
}
export function Textarea({ register }: TextareatProps) {
  return (
    <div className={TextareaStyle.names_wrapper}>
      <label className={TextareaStyle.label} htmlFor="message">
        Message
      </label>
      <textarea
        className={TextareaStyle.textarea}
        id="message"
        {...(register && register('message'))}
        cols={10}
        rows={1}
        placeholder="put your extra message"
      ></textarea>
    </div>
  );
}
