import { useEffect, useState } from 'react';
import {
  MdOutlinePhoneInTalk as Tel,
  MdOutlineApartment as Adress,
  MdOutlinePrint as Fax,
} from 'react-icons/md';

export function ContactBox() {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
  });
  const handleResize = () => {
    console.log('ete');
    setWindowSize({
      width: window.innerWidth,
    });
  };
  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <address>
      <ul>
        <li>
          <Adress
            className="fill-kc-red"
            size={windowSize.width > 1024 ? 20 : 16}
          />
        </li>
        <li>
          <Tel className="fill-kc-red" />
        </li>
        <li>
          <Fax className="fill-kc-red" />
        </li>
      </ul>
    </address>
  );
}
