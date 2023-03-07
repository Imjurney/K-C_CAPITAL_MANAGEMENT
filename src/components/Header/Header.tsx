import Logo from '@/assets/Logo.svg';
export function Header() {
  return (
    <header className="bg-black">
      <button>
        <img src={Logo} width={160} alt="홈으로 가기" />
      </button>
      <Navigation />
    </header>
  );
}

function Navigation() {
  return (
    <nav>
      <button className="text-white">dg</button>
      <ul className="text-white">
        <li>HOME</li>
        <li>ABOUT US</li>
        <li>INVESTMENTS</li>
        <li>TESTIMONIALS</li>
        <li>OTHER SERVICES</li>
        <li>OTHER SERVICES</li>
        <li>CONTACT</li>
      </ul>
    </nav>
  );
}
