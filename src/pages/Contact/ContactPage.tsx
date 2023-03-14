import { Button } from '@/components/Button/Button';
import { EmailInput } from '@/components/EmailInput/EmailInput';
import { Textarea } from '@/components/Textarea/Textarea';
import { TextInput } from '@/components/TextInput/TextInput';
import { TUseForm, useForm, ValidationError } from '@formspree/react';
import clsx from 'clsx';
import { ReactNode, useRef } from 'react';
import contact from '@/pages/Contact/ContactPage.module.css';
import { Header } from '@/components/Header/Header';
import { Footer } from '@/components/Footer/Footer';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import { TitleContent } from '@/components/TitleContent/TitleContent';
import { ContactLayout } from '@/components/Layout/ContactLayout';
import { ContactBox } from '@/components/Contactbox/ContactBox';
interface FormProvierProps {
  children?: ReactNode;
  onSubmit: TUseForm[1];
}

function FormProvier({ ...props }: FormProvierProps) {
  const { children } = props;
  const formRef = useRef<HTMLFormElement>(null);

  return (
    <form
      className={clsx('shadow-article_shadow', contact.form)}
      ref={formRef}
      onSubmit={props.onSubmit}
    >
      {children}
    </form>
  );
}

function ContactForm() {
  const [state, handleSubmit] = useForm('contactForm');
  console.log(state.errors);
  // if (state.succeeded) {
  //   return <Success />;
  // }
  return (
    <FormProvier onSubmit={handleSubmit}>
      <fieldset className={contact.fieldset}>
        <legend className={contact.legend}>Send a Massage</legend>
        <div className="flex mobile:gap-4 laptop:gap-8 desktop:gap-8">
          <TextInput
            labelName={'First Name'}
            placeholder={'your first name'}
            direction={'vertical'}
            type={'text'}
          />
          <TextInput
            labelName={'Last Name'}
            placeholder={'your last name'}
            direction={'vertical'}
            type={'text'}
          />
        </div>
        <EmailInput />
        <div className="self-start ml-6 -mt-4 text-sm inline-block text-red-500">
          <ValidationError field="email" prefix="Email" errors={state.errors} />
        </div>
        <TextInput
          labelName={'Phone'}
          placeholder={'Your Phone Number'}
          direction={'horizon'}
          type={'tel'}
        />
        <Textarea />
        <Button type={'submit'} layOutDesign={'Form'}>
          Submit
        </Button>
      </fieldset>
    </FormProvier>
  );
}

function Contact() {
  return <ContactForm />;
}

export default function ContactPage() {
  return (
    <>
      <Header />
      <div className="mb-6 pt-14">
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
