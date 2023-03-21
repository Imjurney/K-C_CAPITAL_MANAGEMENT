import { Button } from '@/components/Button/Button';
import { EmailInput } from '@/components/EmailInput/EmailInput';
import { Textarea } from '@/components/Textarea/Textarea';
import { TextInput } from '@/components/TextInput/TextInput';
import clsx from 'clsx';
import { ReactNode, useCallback, useState } from 'react';
import contact from '@/pages/Contact/ContactPage.module.css';
import { Header } from '@/components/Header/Header';
import { Footer } from '@/components/Footer/Footer';

import { TitleContent } from '@/components/TitleContent/TitleContent';
import { ContactLayout } from '@/components/Layout/ContactLayout';
import { ContactBox } from '@/components/Contactbox/ContactBox';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import axios from 'axios';

interface RHFormProps {
  children?: ReactNode;
  onSubmit: React.FormEventHandler<HTMLFormElement>;
}
function RHForm({ children, onSubmit }: RHFormProps) {
  const [RHFDevTool, setRHFDevTool] = useState(<></>);

  return (
    <form
      onSubmit={onSubmit}
      className={clsx('shadow-article_shadow', contact.form)}
    >
      {children}
      {RHFDevTool}
    </form>
  );
}

function ContactForm() {
  const { register, handleSubmit, getValues } = useForm<FieldValues>();

  // { test: "test-input", test1: "test1-input" }
  const onSubmitHandler: SubmitHandler<FieldValues> = useCallback((data) => {
    axios
      .post(
        'https://asia-northeast3-send-email-134f4.cloudfunctions.net/back',
        data
      )
      .then((res) => console.log(res))
      .catch((err) => console.error(err));
  }, []);

  return (
    <RHForm onSubmit={handleSubmit(onSubmitHandler)}>
      <fieldset className={contact.fieldset}>
        <legend className={contact.legend}>Send a Massage</legend>
        <div className="flex mobile:gap-x-4 mobile:px-5 laptop:gap-8 desktop:gap-8">
          <TextInput
            register={register}
            labelName={'First Name'}
            placeholder={'your first name'}
            direction={'vertical'}
            type={'text'}
            name={'firstName'}
          />
          <TextInput
            register={register}
            labelName={'Last Name'}
            placeholder={'your last name'}
            direction={'vertical'}
            type={'text'}
            name={'lastName'}
          />
        </div>
        <EmailInput register={register} />

        <TextInput
          register={register}
          labelName={'Phone'}
          placeholder={'Your Phone Number'}
          direction={'horizon'}
          type={'tel'}
          name={'Phone'}
        />
        <Textarea register={register} />
        <Button type={'submit'} layOutDesign={'Form'}>
          Submit
        </Button>
      </fieldset>
    </RHForm>
  );
}

function Contact() {
  return <ContactForm />;
}

export default function ContactPage() {
  return (
    <>
      <Header description="this is Contact Page" />
      <div className="mobile:mb-6 mobile:pt-14 laptop:pt-28 desktop:pt-[7.5rem]">
        <TitleContent content="CONTACT US" />
      </div>
      <ContactLayout>
        <ContactBox />
        <Contact />
      </ContactLayout>
      <Footer />
    </>
  );
}
