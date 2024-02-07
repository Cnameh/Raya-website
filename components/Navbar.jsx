import Link from "next/link";
import { useRouter } from "next/router";
import { navLinks } from "../UI-data/UI-data";
import { useEffect, useRef } from "react";

const Navbar = () => {
  const router = useRouter();
  const nav = useRef();

  useEffect(() => {
    if (typeof window !== "undefined") {
      function handleScroll() {
        if (scrollY > 0) {
          nav.current.classList.add("navbar--stick");
        } else {
          nav.current.classList.remove("navbar--stick");
        }
      }

      window.addEventListener("scroll", handleScroll);

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);

  return (
    <nav className="navbar" id="nav" ref={nav}>
      <Link href="/">
        <img className="navbar--logo" src="/imgs/logo.png" alt="لوگوی وبسایت" />
      </Link>
      <ul className="navbar--links">
        {navLinks.map(({ name, path }) => (
          <li key={name}>
            <Link
              href={path}
              className={`navbar--link ${
                router.pathname === path && "navbar--link--active"
              }`}
            >
              {name}
            </Link>
          </li>
        ))}
      </ul>
      <div className="navbar--icons">
        <svg
          className="navbar--search--icon"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
        </svg>
        <svg
          className="navbar--bars--icon"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM64 256c0-17.7 14.3-32 32-32H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H96c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
        </svg>
      </div>
    </nav>
  );
};

export default Navbar;
