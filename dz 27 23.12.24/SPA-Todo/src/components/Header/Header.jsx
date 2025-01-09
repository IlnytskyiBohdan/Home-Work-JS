import Link from "../Link/Link";
import Button_day_night from "../Button_day_night/Button_day_night";

const Header = () => (
  <header className="header">
    <h1>Todo</h1>
    <ul className="header_pages">
      <li>
        <Link href="/">Home page</Link>
      </li>
      <li>
        <Link href="/Contact">Contact</Link>
      </li>
      <li>
        <Link href="/About-me">About me</Link>
      </li>
    </ul>
    <Button_day_night />
  </header>
);

export default Header;
