import Link from "next/link";
import { useRouter } from "next/router";
import { navLinks } from "../UI-data/UI-data";

const Navbar = () => {
  const router = useRouter();

  return (
    <nav className="navbar">
      <img className="navbar--logo" src="/imgs/logo.png" alt="لوگوی وبسایت" />
      <ul className="navbar--links">
        {navLinks.map(({ name, path }) => (
          <li key={name}>
            <Link href={path} className={`navbar--link ${router.pathname === path && "navbar--link--active"}`}>
              {name}
            </Link>
          </li>
        ))}
      </ul>
      <svg
        className="navbar--search--icon"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
      >
        <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
      </svg>
    </nav>
  );
};

export default Navbar;