import { useCallback, useEffect, useState } from 'react';
import { IconContext } from 'react-icons';
import {
  MdOutlinePhoneInTalk as Tel,
  MdOutlineApartment as Address,
  MdOutlinePrint as Fax,
} from 'react-icons/md';
import { debounce } from 'lodash';
import { useRecoilValue } from 'recoil';
import { addressAtom } from '@/atom/address';
import { useQuery } from '@tanstack/react-query';

const element = {
  Tel: <Tel />,
  Address: <Address />,
  Fax: <Fax />,
};

interface props {
  icon?: {
    type: 'Tel' | 'Address' | 'Fax';
    element: JSX.Element;
  };
}

export function ContactBox({
  icon = {
    type: 'Address',
    element: element.Address,
  },
}: props) {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
  });
  const addressData = useRecoilValue(addressAtom);
  const { data } = useQuery(['Adress'], () => addressData, {
    refetchOnWindowFocus: false,
    cacheTime: 100000,
    staleTime: 10000,
  });
  console.log(data);

  // eslint-disable-next-line react-hooks/exhaustive-deps
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
    <address>
      {
        <ul>
          {data?.map((item, idex) => {
            return (
              <li key={idex}>
                <IconContext.Provider
                  value={{
                    attr: icon?.element,
                    size: Number(windowSize.width) >= 1024 ? 20 : 16,
                  }}
                >
                  {icon?.element}
                </IconContext.Provider>
                <span> {item.subject}</span>
                <span className={item.className}>{item.contents}</span>
              </li>
            );
          })}

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
