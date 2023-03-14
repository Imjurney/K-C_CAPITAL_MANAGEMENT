import LogoImage from '@/assets/Logo.svg';
import {
  createContext,
  ReactNode,
  RefObject,
  useContext,
  useLayoutEffect,
  useRef,
  useState,
} from 'react';
import {
  RxCross2 as Xbutton,
  RxHamburgerMenu as BurgerMenu,
} from 'react-icons/rx';
import HeaderStyle from '@/components/Header/Header.module.css';
import { gsap, Power4 } from 'gsap';
import clsx from 'clsx';
import { BrowserRouter, Route, Link } from 'react-router-dom';
/* -------------------------------------------------------------------------- */

interface ToggleProps {
  children?: ReactNode;
  toggle?: boolean;
  setToggle?: () => void;
  ref?: RefObject<HTMLUListElement>;
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
  const [toggle, setToggle] = useState(defaultState.toggle);
  const ref = useRef<HTMLUListElement>(null);

  return (
    <ToggleContext.Provider
      value={{
        toggle,
        setToggle: () => {
          setToggle((toggle: boolean) => !toggle);
        },
        ref,
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
    <button>
      <img src={LogoImage} width={160} alt="홈으로 가기" />
    </button>
  );
}

function NavigationWrapper({ ...props }: NavigationProps) {
  return <nav>{props.children}</nav>;
}

function NavigationItem() {
  return (
    <ul className={HeaderStyle.navItem}>
      <Link to={'/'}>
        <li>HOME</li>
      </Link>
      <Link to={'/about_us'}>
        <li>ABOUT US</li>
      </Link>
      <Link to={'/investments'}>
        <li>INVESTMENTS</li>
      </Link>
      <Link to={'/testimonials'}>
        <li>TESTIMONIALS</li>
      </Link>
      <Link to={'/other_services'}>
        <li>OTHER SERVICES</li>
      </Link>
      <Link to={'/contact'}>
        <li>CONTACT</li>
      </Link>
    </ul>
  );
}

function BurgerNavigationItem() {
  const { ref, toggle } = useSelector();

  return (
    <NavigationWrapper>
      <ul ref={ref} className={HeaderStyle.ul} id="burger_list">
        <Link className={HeaderStyle.link} to={'/'}>
          <li>HOME</li>
        </Link>
        <Link className={HeaderStyle.link} to={'/about_us'}>
          <li>ABOUT US</li>
        </Link>
        <Link className={HeaderStyle.link} to={'/investments'}>
          <li>INVESTMENTS</li>
        </Link>
        <Link className={HeaderStyle.link} to={'/testimonials'}>
          <li>TESTIMONIALS</li>
        </Link>
        <Link className={HeaderStyle.link} to={'/other_services'}>
          <li>OTHER SERVICES</li>
        </Link>
        <Link className={HeaderStyle.link} to={'/contact'}>
          <li>CONTACT</li>
        </Link>
      </ul>
    </NavigationWrapper>
  );
}

function HamburgerButton() {
  const { toggle, setToggle } = useSelector();
  const buttonRef = useRef<HTMLButtonElement>(null);
  const isMounted = useRef(false);
  useLayoutEffect(() => {
    const cxt = gsap.context(() => {
      buttonRef.current?.addEventListener('click', () => {
        if (!isMounted.current) {
          isMounted.current = true;
          gsap.from('#burger_list', {
            display: 'block',
            x: -100,
            opacity: 1,
            duration: 1,
            ease: Power4.easeOut,
          });
        }
        gsap.from('#burger_list', {
          display: 'block',
          xPercent: !toggle ? -120 : 0,
          opacity: 0.9,
          duration: 1.1,
          ease: Power4.easeOut,
        });
      });
    });

    return () => cxt.revert();
  });

  return (
    <>
      {!toggle ? (
        <button
          ref={buttonRef}
          onClick={setToggle}
          aria-label="navigation_button"
          className={clsx(
            toggle ? 'burgerButton' : 'Xbutton',
            HeaderStyle.button
          )}
        >
          <BurgerMenu
            id="burgerButton"
            className="burgerButton"
            size={18}
            strokeWidth={0.5}
          />
        </button>
      ) : (
        <button
          ref={buttonRef}
          onClick={setToggle}
          aria-label="navigation_button"
          className={clsx(
            toggle ? 'burgerButton' : 'Xbutton',
            HeaderStyle.button
          )}
        >
          <Xbutton id="Xbutton" className="Xbutton" size={20} />
        </button>
      )}
    </>
  );
}

export function Header({ description = '홈' }: HeaderProps) {
  return (
    <ToggleProvider>
      <header className={HeaderStyle.header}>
        <h1 className="sr-only">{description}페이지 입니다</h1>
        <div className={HeaderStyle.wrapper}>
          <Logo />
          <NavigationItem />
          <HamburgerButton />
        </div>
        <BurgerNavigationItem />
      </header>
    </ToggleProvider>
  );
}
