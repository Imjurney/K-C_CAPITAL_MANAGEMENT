/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback, useEffect, useState } from 'react';
import {
  MdOutlinePhoneInTalk as Tel,
  MdOutlineApartment as Address,
  // MdOutlinePrint as Fax,
} from 'react-icons/md';
import { debounce } from 'lodash';
import ContactPage from '@/pages/Contact/ContactPage.module.css';
import contactBox from '@/components/Contactbox/ContactBox.module.css';
import clsx from 'clsx';
import { IconContext } from 'react-icons';

export function ContactBox() {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
  });
  const handleResize = useCallback(
    debounce(() => {
      setWindowSize({
        width: window.innerWidth,
      });
    }, 100),
    []
  );
  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <address className={contactBox.address}>
      {
        <ul className={contactBox.ul}>
          <IconContext.Provider
            value={{
              className: 'fill-kc-red inline',
              size: windowSize.width >= 981 ? 26 : 20,
            }}
          >
            <li className={ContactPage.li}>
              <div className={ContactPage.div}>
                <Address />
                <span className="desktop:text-xl">ADDRESS</span>
              </div>
              <span
                className={clsx(ContactPage.span, ContactPage.address_span)}
              >
                17 HAWDON STREET, SYDENHAM CHRISTCHURCH
              </span>
            </li>

            <li className={clsx(ContactPage.li)}>
              <div className={clsx(ContactPage.div, 'mr-9')}>
                <span>
                  <Tel />
                </span>
                <span className="text-kc-red gap-4 desktop:text-xl">
                  TEL&nbsp;1
                </span>
              </div>
              <span className={ContactPage.span}>+64 27 2229980</span>
            </li>

            <li className={ContactPage.li}>
              <div className={clsx(ContactPage.div, 'mr-9')}>
                <span>
                  <Tel />
                </span>
                <span className="text-kc-red gap-4 desktop:text-xl">
                  TEL&nbsp;2
                </span>
              </div>
              <span className={ContactPage.span}>+64 27 3159618</span>
            </li>
          </IconContext.Provider>
        </ul>
      }
    </address>
  );
}
