import Link from "next/link";
import { useRouter } from "next/router";
import { navLinks } from "../UI-data/UI-data";
import { useEffect, useRef } from "react";

// icons
import { IoSearch } from "react-icons/io5";
import { FaBarsStaggered } from "react-icons/fa6";

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
    <div className="navbar" ref={nav}>
      <nav className="navbar--container">
        <Link href="/">
          <img className="navbar--logo" src="/imgs/logo.png" alt="لوگوی وبسایت" />
        </Link>
        <ul className="navbar--links">
          {navLinks.map(({ name, path }) => (
            <li key={name}>
              <Link
                href={path}
                className={`navbar--link ${router.pathname === path && "navbar--link--active"}`}
              >
                {name}
              </Link>
            </li>
          ))}
        </ul>
        <div className="navbar--icons">
          <IoSearch className="navbar--search--icon" />
          <FaBarsStaggered className="navbar--bars--icon" />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
