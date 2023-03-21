import { Button } from '@/components/Button/Button';
import { EmailInput } from '@/components/EmailInput/EmailInput';
import { Textarea } from '@/components/Textarea/Textarea';
import { TextInput } from '@/components/TextInput/TextInput';
import { FormEventHandler, PropsWithChildren, useCallback } from 'react';
import contact from '@/pages/Contact/ContactPage.module.css';
import { Header } from '@/components/Header/Header';
import { Footer } from '@/components/Footer/Footer';
import { TitleContent } from '@/components/TitleContent/TitleContent';
import { ContactLayout } from '@/components/Layout/ContactLayout';
import { ContactBox } from '@/components/Contactbox/ContactBox';
import {
  FieldValues,
  FormProvider,
  SubmitErrorHandler,
  SubmitHandler,
  useForm,
} from 'react-hook-form';
import axios from 'axios';

interface IRHForm<FormType extends object> {
  onSubmit: SubmitHandler<FormType>;
  onInvalid?: SubmitErrorHandler<FormType>;
  onReset?: FormEventHandler<HTMLFormElement>;
}

export function RHForm<FormType extends object>({
  children,
  onSubmit,
  onReset,
}: PropsWithChildren<IRHForm<FormType>>) {
  const methods = useForm<FormType>();

  useCallback<FormEventHandler<HTMLFormElement>>(
    (e) => {
      methods.reset();
      if (onReset) {
        onReset(e);
      }
    },
    [methods, onReset]
  );

  return (
    <FormProvider {...methods}>
      <form onReset={onReset} onSubmit={methods.handleSubmit(onSubmit)}>
        {children}
      </form>
    </FormProvider>
  );
}
function ContactForm() {
  const onSubmitHandler: SubmitHandler<FieldValues> = useCallback((data) => {
    axios
      .post(
        'https://australia-southeast1-send-email-134f4.cloudfunctions.net/back/mail',
        data
      )
      .then((res) => {
        alert('thanks for your Submition');
        location.reload();
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <RHForm onSubmit={onSubmitHandler}>
      <fieldset className={contact.fieldset}>
        <legend className={contact.legend}>Send a Massage</legend>
        <div className="flex mobile:gap-x-4 mobile:px-5 laptop:gap-8 desktop:gap-8">
          <TextInput
            labelName={'First Name'}
            placeholder={'your first name'}
            direction={'vertical'}
            type={'text'}
            name={'firstName'}
          />
          <TextInput
            labelName={'Last Name'}
            placeholder={'your last name'}
            direction={'vertical'}
            type={'text'}
            name={'lastName'}
          />
        </div>
        <EmailInput name={'email'} />

        <TextInput
          labelName={'Phone'}
          placeholder={'Your Phone Number'}
          direction={'horizon'}
          type={'tel'}
          name={'Phone'}
        />
        <Textarea name={'message'} />
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
