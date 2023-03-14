import { useCallback, useEffect, useState } from 'react';
import { IconContext } from 'react-icons';
import {
  MdOutlinePhoneInTalk as Tel,
  MdOutlineApartment as Address,
  MdOutlinePrint as Fax,
} from 'react-icons/md';
import { debounce } from 'lodash';
import axios from 'axios';

interface ContactBox {
  icon?: {
    type: 'Tel' | 'Fax' | 'Address';
    element: JSX.Element;
  };
}
export function ContactBox() {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
  });
  const [datas, setData] = useState<any[]>();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleResize = useCallback(
    debounce(() => {
      console.log(window.innerWidth);
      setWindowSize({
        width: window.innerWidth,
      });
    }, 100),
    []
  );
  useEffect(() => {
    const getfooterInfromation = async () => {
      return await axios.get('src/data/footer.json').then((res) => {
        setData(res.data);
      });
    };
    getfooterInfromation();
    console.log(datas);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <address>
      {
        <ul>
          <li>
            <Address
              className="fill-kc-red"
              size={windowSize.width >= 1024 ? 20 : 16}
            />
          </li>
          <li>
            <Tel
              className="fill-kc-red"
              size={windowSize.width >= 1024 ? 20 : 16}
            />
          </li>
          <li>
            <Fax
              className="fill-kc-red"
              size={windowSize.width >= 1024 ? 20 : 16}
            />
          </li>
        </ul>
      }
    </address>
  );
}
