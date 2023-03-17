import LogoImage from '@/assets/Logo.svg';
import {
  createContext,
  ReactNode,
  RefObject,
  useCallback,
  useContext,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from 'react';
import { debounce, flatMap, toPairs } from 'lodash';
import {
  RxCross2 as Xbutton,
  RxHamburgerMenu as BurgerMenu,
} from 'react-icons/rx';
import HeaderStyle from '@/components/Header/Header.module.css';
import navdata from '@/data/nav.json';
import { Link, NavLink } from 'react-router-dom';
import { navigation_animation } from '@/utils/navigation_animation';
import { useQuery } from '@tanstack/react-query';

/* -------------------------------------------------------------------------- */

interface ToggleProps {
  children?: ReactNode;
  toggle?: boolean;
  setToggle?: () => void;
  ref?: RefObject<HTMLUListElement>;
  data?: {
    navitem: string;
    route: string;
  }[];
}

interface NavigationProps {
  children: ReactNode;
}

interface HeaderProps {
  description?: string;
}

/* ---------------------------- contextAPI ---------------------------------------------- */
const defaultState = {
  toggle: false,
};

const ToggleContext = createContext<ToggleProps>(defaultState);

function ToggleProvider({ children }: ToggleProps) {
  const [toggle, setToggle] = useState(false);
  const ref = useRef<HTMLUListElement>(null);
  const { data } = useQuery(
    ['NavigationItem'],
    () => Promise.resolve(navdata),
    {
      staleTime: 10000,
      refetchOnWindowFocus: false,
    }
  );
  return (
    <ToggleContext.Provider
      value={{
        toggle,
        setToggle: () => {
          setToggle((toggle: boolean) => !toggle);
        },
        ref,
        data: data,
      }}
    >
      {children}
    </ToggleContext.Provider>
  );
}

const useSelector = () => {
  return useContext(ToggleContext);
};

/* --------------------------------- 컴포넌트 -------------------------------- */
function Logo() {
  return (
    <Link to={'/'}>
      <img src={LogoImage} width={160} alt="go to the HomePage" />
    </Link>
  );
}

function NavigationWrapper({ ...props }: NavigationProps) {
  return <nav>{props.children}</nav>;
}

function NavigationItem() {
  const { data } = useSelector();

  return (
    <ul className={HeaderStyle.navItem}>
      {data?.map((item, index) => {
        return (
          <li className="inline" key={`${item.navitem}_${index}`}>
            <NavLink
              to={item.route}
              className={({ isActive }) =>
                isActive ? HeaderStyle.link__active : ''
              }
            >
              {item.navitem}
            </NavLink>
          </li>
        );
      })}
    </ul>
  );
}

function BurgerNavigationItem() {
  const { ref, data } = useSelector();

  return (
    <NavigationWrapper>
      <ul ref={ref} className={HeaderStyle.ul} id="burger_list">
        {data?.map((item, index) => {
          return (
            <Link key={index} className={HeaderStyle.link} to={item.route}>
              <li>{item.navitem}</li>
            </Link>
          );
        })}
      </ul>
    </NavigationWrapper>
  );
}

function HamburgerButton() {
  const { toggle, setToggle } = useSelector();
  const buttonRef = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    if (toggle) {
      document.body.style.cssText = `
        position: fixed;
        top: -${window.scrollY}px;
        width: 100%; 
      `;
    }

    return () => {
      document.body.style.cssText = '';
    };
  });
  useLayoutEffect(() => {
    navigation_animation('#burger_list', toggle);
  });

  return (
    <>
      <button
        ref={buttonRef}
        onClick={setToggle}
        aria-label="navigation_button"
        className={HeaderStyle.button}
      >
        {toggle ? (
          <Xbutton id="Xbutton" className="Xbutton" size={'20'} />
        ) : (
          <BurgerMenu
            id="burgerButton"
            className="burgerButton"
            size={'18'}
            strokeWidth={0.5}
          />
        )}
      </button>
    </>
  );
}

export function Header({ description = 'This is HomePage' }: HeaderProps) {
  const { toggle } = useSelector();
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
  });

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
    if (windowSize.width >= 1024) toggle === true;

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <ToggleProvider>
      <header className={HeaderStyle.header} title="K&C Management Navigation">
        <h1 className="sr-only">{description}</h1>
        <div className={HeaderStyle.wrapper}>
          <Logo />
          <NavigationItem />
          <HamburgerButton />
        </div>
        {windowSize.width < 1024 && <BurgerNavigationItem />}
      </header>
    </ToggleProvider>
  );
}
