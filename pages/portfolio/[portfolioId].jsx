import Head from "next/head";
import Link from "next/link";
import Layout from "../layout";

// components
import ItemNavigation from "../../components/UI/ItemNavigation";
import ShareSocialMedia from "../../components/UI/ShareSocialMedia";
import StickySocialMedia from "../../components/UI/StickySocialMedia";
import Input from "../../components/UI/Input";

// icons
import { FaQuoteRight } from "react-icons/fa";
import { MdFavoriteBorder } from "react-icons/md";

const SinglePortfolioPage = () => {
  return (
    <>
      <Head>
        <link rel="website icon" href="/imgs/logo-little.png" type="image/icon" />
      </Head>
      <Layout>
        <main className="singlePortfolio--main">
          <ItemNavigation />
          <div className="singlePortfolio--content">
            <div className="singlePortfolio--about">
              <div className="spacer-40"></div>
              <div className="singlePortfolio--item--context">
                <button className="singlePortfolio--item--name">تکنولوژی</button>
                <Link className="singlePortfolio--item--title" href="#">
                  گالری های زیبا
                </Link>
                <div className="singlePortfolio--item--info">
                  <span className="singlePortfolio--item--date">12 / 03 / 1402 توسط</span>
                  <Link href="#">شرکت رایا</Link>
                  <span>در</span>
                  <Link href="#">تکنولوژی</Link>
                </div>
              </div>
              <ul className="singlePortfolio--portofolios--panel">
                <li className="singlePortfolio--portofolios--panel--item">
                  <Link href="#" className="singlePortfolio--portofolios--panel--link">
                    <img
                      src="/imgs/woman-07.jpg"
                      alt=""
                      className="singlePortfolio--portofolios--panel--img"
                    />
                  </Link>
                </li>
                <li className="singlePortfolio--portofolios--panel--item">
                  <Link href="#" className="singlePortfolio--portofolios--panel--link">
                    <img
                      src="/imgs/man-06.jpg"
                      alt=""
                      className="singlePortfolio--portofolios--panel--img"
                    />
                  </Link>
                </li>
                <li className="singlePortfolio--portofolios--panel--item">
                  <Link href="#" className="singlePortfolio--portofolios--panel--link">
                    <img
                      src="/imgs/woman-04.jpg"
                      alt=""
                      className="singlePortfolio--portofolios--panel--img"
                    />
                  </Link>
                </li>
                <li className="singlePortfolio--portofolios--panel--item">
                  <Link href="#" className="singlePortfolio--portofolios--panel--link">
                    <img
                      src="/imgs/man-07.jpg"
                      alt=""
                      className="singlePortfolio--portofolios--panel--img"
                    />
                  </Link>
                </li>
                <li className="singlePortfolio--portofolios--panel--item">
                  <Link href="#" className="singlePortfolio--portofolios--panel--link">
                    <img
                      src="/imgs/woman-06.jpg"
                      alt=""
                      className="singlePortfolio--portofolios--panel--img"
                    />
                  </Link>
                </li>
                <li className="singlePortfolio--portofolios--panel--item">
                  <Link href="#" className="singlePortfolio--portofolios--panel--link">
                    <img
                      src="/imgs/man-02.jpg"
                      alt=""
                      className="singlePortfolio--portofolios--panel--img"
                    />
                  </Link>
                </li>
              </ul>
              <div className="spacer-40"></div>
              <div className="singlePortfolio--tasks">
                <p className="singlePortfolio--tasks--one">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان
                  گرافیک است.
                </p>
                <p className="singlePortfolio--tasks--two">
                  کارفرما:
                  <Link className="singlePortfolio--tasks--link" href="#">
                    سعید حاتمی
                  </Link>
                </p>
              </div>
              <section className="singlePortfolio--description--box">
                <h3 className="singlePortfolio--description--title">توضیحات</h3>
                <p className="singlePortfolio--description">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان
                  گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و
                  برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای
                  کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان
                  جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه
                  ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می
                  توان امید داشت که تمام است.
                </p>
              </section>
              <div className="spacer-40"></div>
              <section className="singlePortfolio--quote--box">
                <h3 className="singlePortfolio--quote--title">نقل قول</h3>
                <blockquote className="singlePortfolio--quote">
                  <FaQuoteRight className="singlePortfolio--quote--icon" />
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان
                  گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و
                  برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای
                  کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان
                  جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه
                  ای علی
                </blockquote>
              </section>
              <div className="spacer-40"></div>
              <div className="singlePortfolio--comments">
                <span className="singlePortfolio--comments--title" badge="0">
                  نظرات
                </span>
                <div className="singlePortfolio--comments--tags">
                  <Link className="singlePortfolio--comments--tag" href="#">
                    گالری
                  </Link>
                  <Link className="singlePortfolio--comments--tag" href="#">
                    پست
                  </Link>
                  <Link className="singlePortfolio--comments--tag" href="#">
                    نمونه
                  </Link>
                  <Link className="singlePortfolio--comments--tag" href="#">
                    طراحی
                  </Link>
                </div>
              </div>
              <div className="singlePortfolio--like--share">
                <button className="singlePortfolio--like--btn">
                  <MdFavoriteBorder />
                  <span className="singlePortfolio--like--count">14</span>
                </button>
                <ShareSocialMedia />
              </div>
              <div className="spacer-100"></div>
              <div className="singlePortfolio--respond">
                <h3 className="singlePortfolio--respond--title">
                  نظرتان را با ما به اشتراک بگذارید
                </h3>
                <form className="singlePortfolio--respond--form">
                  <div className="singlePortfolio--respond--inputs--container">
                    <Input
                      label="نام و نام خانوادگی"
                      type="text"
                      className="singlePortfolio--respond--name"
                    />
                    <Input label="ایمیل" type="text" className="singlePortfolio--respond--email" />
                    <Input
                      label="وبسایت"
                      type="text"
                      className="singlePortfolio--respond--website"
                    />
                    <Input
                      textarea
                      label="پیام"
                      type="text"
                      className="singlePortfolio--respond--comment"
                    />
                  </div>
                  <button className="singlePortfolio--respond--btn" type="button">
                    ارسال
                  </button>
                </form>
              </div>
            </div>
            <StickySocialMedia />
          </div>
          <div className="spacer-100"></div>
        </main>
      </Layout>
    </>
  );
};

export default SinglePortfolioPage;
