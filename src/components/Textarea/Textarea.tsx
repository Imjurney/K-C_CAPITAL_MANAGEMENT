import TextareaStyle from '@/components/Textarea/Textarea.module.css';

export function Textarea() {
  return (
    <div className={TextareaStyle.names_wrapper}>
      <label className={TextareaStyle.label} htmlFor="message">
        Message
      </label>
      <textarea
        className={TextareaStyle.textarea}
        name="message"
        id="message"
        cols={10}
        rows={1}
        placeholder="put your extra message"
      ></textarea>
    </div>
  );
}
