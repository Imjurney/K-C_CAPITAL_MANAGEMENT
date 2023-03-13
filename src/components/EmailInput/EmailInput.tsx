import { TUseForm } from '@formspree/react';
import { ChangeEvent, useEffect, useRef, useState } from 'react';
import EamilInputStyle from '@/components/EmailInput/EmailInput.module.css';
type TodoPreview = Pick<TUseForm[0], 'errors'>;

export function EmailInput() {
  const test = useRef<HTMLInputElement>(null);
  const test2 = useRef<HTMLInputElement>(null);
  const [email, setEmail] = useState({
    id: '',
    mail: '',
  });

  const changeMailHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setEmail({
      ...email,
      ['mail']: value,
    });
  };

  const changeIdHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setEmail({
      ...email,
      ['id']: value,
    });
  };

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  useEffect(() => {}, [email]);

  return (
    <>
      <div className={EamilInputStyle.wrapper} tabIndex={0}>
        <label className={EamilInputStyle.outline_vertical} htmlFor="email">
          Email
        </label>
        <div className={EamilInputStyle.mail_wrapper}>
          <input
            className={EamilInputStyle.input}
            onChange={changeIdHandler}
            ref={test}
            required
            placeholder="Your Email address"
            type="text"
          />
          <span className={EamilInputStyle.at_sign}>&nbsp;@&nbsp;</span>
          <input
            className={EamilInputStyle.input}
            onChange={changeMailHandler}
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
