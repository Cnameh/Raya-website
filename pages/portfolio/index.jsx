import Head from "next/head";
import Link from "next/link";
import Layout from "../layout";
import { useEffect } from "react";
import { portfolioItemData } from "../../UI-data/UI-data";

// framer motion
import { stagger, useAnimate, useInView } from "framer-motion";

// components
import FilterBar from "../../components/UI/FilterBar";
import FavoriteItem from "../../components/UI/FavoriteItem";
import ShareSection from "../../components/UI/ShareSection";

// icons
import { HiOutlineArrowLongLeft } from "react-icons/hi2";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const PortfolioPage = () => {
  const [scope, animate] = useAnimate();
  const isInView = useInView(scope, { once: true });

  useEffect(() => {
    if (isInView) {
      animate(
        ".portfolio--list--item",
        { opacity: 1, y: 0 },
        { delay: stagger(0.2), duration: 0.5 }
      );
    }
  }, [isInView]);

  return (
    <>
      <Head>
        <title>نمونه کار</title>
        <meta name="description" content="به سایت رایا خوش اومدید!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="website icon" href="/imgs/logo-little.png" type="image/icon" />
      </Head>
      <Layout>
        <main className="portfolio--main">
          <FilterBar />
          <ul className="filterList">
            <li className="filterList--item">
              <button className="filterList--item--btn filterList--item--btn--active">همه</button>
            </li>
            <li className="filterList--item">
              <button className="filterList--item--btn">سه بعدی</button>
            </li>
            <li className="filterList--item">
              <button className="filterList--item--btn">عکاسی</button>
            </li>
            <li className="filterList--item">
              <button className="filterList--item--btn">طراحی وب</button>
            </li>
            <li className="filterList--item">
              <button className="filterList--item--btn">طراحی تبلیغات</button>
            </li>
            <li className="filterList--item">
              <button className="filterList--item--btn">ادیت</button>
            </li>
          </ul>
          <ul className="portfolio--list" ref={scope}>
            {portfolioItemData.map((portfolioItem) => (
              <li className="portfolio--list--item" key={portfolioItem.id}>
                <div className="portfolio--list--item--img--container">
                  <img
                    src={portfolioItem.image}
                    alt={portfolioItem.imageTitle}
                    className="portfolio--list--item--img"
                  />
                  <div className="portfolio--list--item--img--context--container">
                    <div className="portfolio--list--item--img--context">
                      <Link href="#" className="portfolio--list--item--img--context--title">
                        {portfolioItem.imageTitle}
                      </Link>
                      <h5 className="portfolio--list--item--img--context--subtitle">
                        {portfolioItem.imageSubtitle}
                      </h5>
                    </div>
                  </div>
                  <FavoriteItem />
                </div>

                <button className="portfolio--list--item--btn">{portfolioItem.btnContext}</button>
                <Link className="portfolio--list--item--title" href="#">
                  {portfolioItem.title}
                </Link>
                <h5 className="portfolio--list--item--subtitle">{portfolioItem.subtitle}</h5>
                <p className="portfolio--list--item--description">{portfolioItem.description}</p>
                <ShareSection />
              </li>
            ))}
          </ul>
          <ol className="portfolio--pagination">
            <li className="portfolio--pagination--item portfolio--pagination--number">
              <Link href="#">1</Link>
            </li>
            <li className="portfolio--pagination--item portfolio--pagination--number">
              <Link href="#">2</Link>
            </li>
            <li className="portfolio--pagination--item portfolio--pagination--text">
              <Link href="#">بعدی</Link>
              <HiOutlineArrowLongLeft />
            </li>
          </ol>
        </main>
      </Layout>
    </>
  );
};

export default PortfolioPage;
