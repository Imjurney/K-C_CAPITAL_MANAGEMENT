import { TUseForm } from '@formspree/react';
import { useEffect, useRef, useState } from 'react';
import EamilInputStyle from '@/components/EmailInput/EmailInput.module.css';
type TodoPreview = Pick<TUseForm[0], 'errors'>;
export function EmailInput() {
  const test = useRef<HTMLInputElement>(null);
  const test2 = useRef<HTMLInputElement>(null);
  const [email, setEmail] = useState({
    id: '',
    mail: '',
  });

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  useEffect(() => {}, [email]);

  return (
    <>
      <div className={EamilInputStyle.wrapper}>
        <label className={EamilInputStyle.outline_vertical} htmlFor="email">
          Email
        </label>
        <div>
          <input
            className="text-xs indent-3 w-[8rem] h-[2.0625rem]"
            onChange={(e) => {
              const { value } = e.target;
              setEmail({
                ...email,
                ['id']: value,
              });
            }}
            ref={test}
            required
            placeholder="Your Email address"
            type="text"
          />
          <span className="text-base text-kc-contact_gray">&nbsp;@&nbsp;</span>
          <input
            className="text-xs indent-2 w-[8rem] h-[2.0625rem]"
            onChange={(e) => {
              const { value } = e.target;

              setEmail({
                ...email,
                ['mail']: value,
              });
            }}
            ref={test2}
            required
            placeholder="google.com"
            type="text"
          />
        </div>
        <input
          type="hidden"
          value={email.id + '@' + email.mail}
          name={'email'}
        />
      </div>
    </>
  );
}
