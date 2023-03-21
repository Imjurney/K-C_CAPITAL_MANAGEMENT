import { Button } from '@/components/Button/Button';
import { EmailInput } from '@/components/EmailInput/EmailInput';
import { Textarea } from '@/components/Textarea/Textarea';
import { TextInput } from '@/components/TextInput/TextInput';

import clsx from 'clsx';
import { ReactNode, useRef } from 'react';
import contact from '@/pages/Contact/ContactPage.module.css';
import { Header } from '@/components/Header/Header';
import { Footer } from '@/components/Footer/Footer';

import { TitleContent } from '@/components/TitleContent/TitleContent';
import { ContactLayout } from '@/components/Layout/ContactLayout';
import { ContactBox } from '@/components/Contactbox/ContactBox';

interface FormProvierProps {
  children?: ReactNode;
}

function FormProvier({ ...props }: FormProvierProps) {
  const { children } = props;
  const formRef = useRef<HTMLFormElement>(null);

  return (
    <form className={clsx('shadow-article_shadow', contact.form)} ref={formRef}>
      {children}
    </form>
  );
}

function ContactForm() {
  return (
    <FormProvier>
      <fieldset className={contact.fieldset}>
        <legend className={contact.legend}>Send a Massage</legend>
        <div className="flex mobile:gap-x-4 mobile:px-5 laptop:gap-8 desktop:gap-8">
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
        <div className={contact.error}></div>

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
