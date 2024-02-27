import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

// links for navbar
import { navLinks } from "../UI-data/UI-data";

const Banner = () => {
  const [bannerTitle, setBannerTitle] = useState("");

  const { pathname } = useRouter();

  useEffect(() => {
    const currentPage = navLinks.find((link) => link.path === pathname);

    currentPage ? setBannerTitle(currentPage.name) : setBannerTitle("نام صفحه");
  }, [pathname]);

  return (
    <section className="banner" style={{ backgroundImage: `url('/imgs/bg-suitman.jpg')` }}>
      <h1 className="banner--title">{bannerTitle}</h1>
      <div className="banner--user--location">
        <Link href="/" className="banner--user--location--link">
          خانه
        </Link>
        / {bannerTitle}
      </div>
    </section>
  );
};

export default Banner;
