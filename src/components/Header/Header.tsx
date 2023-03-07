import LogoImage from '@/assets/Logo.svg';
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';
import {
  RxCross2 as Xbutton,
  RxHamburgerMenu as BurgerMenu,
} from 'react-icons/rx';
import HeaderStyle from '@/components/Header/Header.module.css';
import { gsap } from 'gsap';

interface test {
  children?: ReactNode;
  toggle?: boolean;
  setToggle?: () => void;
}

const defaultState = {
  toggle: true,
};
const ToggleContext = createContext<test>(defaultState);

function ToggleProvider({ children }: test) {
  const [toggle, setToggle] = useState(defaultState.toggle);
  return (
    <ToggleContext.Provider
      value={{
        toggle,
        setToggle: () => {
          setToggle((toggle: boolean) => !toggle);
        },
      }}
    >
      {children}
    </ToggleContext.Provider>
  );
}

const useSelector = () => {
  return useContext(ToggleContext);
};

function Logo() {
  return (
    <button>
      <img src={LogoImage} width={160} alt="홈으로 가기" />
    </button>
  );
}

interface NavigationProps {
  children: ReactNode;
}
function Navigation({ ...props }: NavigationProps) {
  return <nav>{props.children}</nav>;
}

function NavigationItem() {
  const ref = useRef<HTMLUListElement>(null);
  const { toggle } = useSelector();
  useEffect(() => {
    gsap.from(ref.current, {
      opacity: 0,
      duration: 1,
    });
  });
  return (
    <Navigation>
      {!toggle && (
        <ul ref={ref} className={HeaderStyle.ul}>
          <li>HOME</li>
          <li>ABOUT US</li>
          <li>INVESTMENTS</li>
          <li>TESTIMONIALS</li>
          <li>OTHER SERVICES</li>
          <li>CONTACT</li>
        </ul>
      )}
    </Navigation>
  );
}

function HamburgerButton() {
  const { toggle, setToggle } = useSelector();
  return (
    <button
      onClick={setToggle}
      aria-label="navigation_button"
      className="text-white flex items-center"
    >
      {toggle ? (
        <BurgerMenu size={18} strokeWidth={0.5} />
      ) : (
        <Xbutton size={20} />
      )}
    </button>
  );
}
interface HeaderProps {
  description?: string;
}
export function Header({ description = '홈' }: HeaderProps) {
  return (
    <ToggleProvider>
      <header className="w-full">
        <h1 className="sr-only">{description}페이지 입니다</h1>
        <div className="bg-black py-4 px-5 flex justify-between items-center">
          <Logo />
          <HamburgerButton />
        </div>
        <NavigationItem />
      </header>
    </ToggleProvider>
  );
}
