import Head from "next/head";
import Link from "next/link";
import Layout from "../layout";

// framer motion
import { motion } from "framer-motion";

// icons
import { TbFileSad } from "react-icons/tb";

const AboutUsPage = () => {
  return (
    <>
      <Head>
        <title>درباره ما</title>
        <meta name="description" content="به سایت رایا خوش اومدید!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="website icon" href="/imgs/logo-little.png" type="image/icon" />
      </Head>
      <Layout>
        <main>
          <div className="aboutUs">
            <ul className="aboutUs--ad--list">
              <li className="aboutUs--ad--list--item aboutUs--ad--list--item--1">
                <div className="spacer-150"></div>
                <h2 className="aboutUs--ad--list--item--title">به روزترین تکنولوژی‌ها</h2>
                <p className="aboutUs--ad--list--item--description">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان
                  گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و
                  برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای
                  کاربردی می باشد.
                </p>
                <button className="aboutUs--ad--list--item--btn">
                  بیشتر
                  <span></span>
                </button>
                <div className="spacer-150"></div>
              </li>
              <li className="aboutUs--ad--list--item aboutUs--ad--list--item--1">
                <div className="spacer-150"></div>
                <h2 className="aboutUs--ad--list--item--title">به روزترین تکنولوژی‌ها</h2>
                <p className="aboutUs--ad--list--item--description">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان
                  گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و
                  برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای
                  کاربردی می باشد.
                </p>
                <button className="aboutUs--ad--list--item--btn">بیشتر</button>
                <div className="spacer-150"></div>
              </li>
              <li className="aboutUs--ad--list--item aboutUs--ad--list--item--1">
                <div className="spacer-150"></div>
                <h2 className="aboutUs--ad--list--item--title">به روزترین تکنولوژی‌ها</h2>
                <p className="aboutUs--ad--list--item--description">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان
                  گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و
                  برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای
                  کاربردی می باشد.
                </p>
                <button className="aboutUs--ad--list--item--btn">
                  بیشتر
                  <span></span>
                </button>
                <div className="spacer-150"></div>
              </li>
            </ul>
            <div className="spacer-50"></div>
            <div className="aboutUs--company--info">
              <div className="aboutUs--company--context">
                <div className="spacer-100"></div>
                <h2 className="aboutUs--company--title">لورم ایپسوم متن ساختگی با تولید </h2>
                <div className="aboutUs--gray--bg">
                  <TbFileSad />
                </div>
                <p className="aboutUs--company--description">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان
                  گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و
                  برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای
                  کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان
                  جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه
                  ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می
                  توان امید داشت که تمام.
                </p>
                <ul className="aboutUs--manager--knowledge">
                  <li className="aboutUs--manager--knowledge--item">
                    <div className="aboutUs--manager--knowledge--topic">
                      <span>Java</span>
                      <span>86%</span>
                    </div>
                    <div className="aboutUs--manager--knowledge--progressbar">
                      <motion.span
                        initial={{ width: 0 }}
                        whileInView={{
                          width: "86%",
                        }}
                        transition={{ duration: 1.5 }}
                        viewport={{ once: true }}
                        className="aboutUs--manager--knowledge--progress"
                      ></motion.span>
                    </div>
                  </li>
                  <li className="aboutUs--manager--knowledge--item">
                    <div className="aboutUs--manager--knowledge--topic">
                      <span>++C</span>
                      <span>93%</span>
                    </div>
                    <div className="aboutUs--manager--knowledge--progressbar">
                      <motion.span
                        initial={{ width: 0 }}
                        whileInView={{
                          width: "93%",
                        }}
                        transition={{ duration: 1.5 }}
                        viewport={{ once: true }}
                        className="aboutUs--manager--knowledge--progress"
                      ></motion.span>
                    </div>
                  </li>
                  <div className="spacer-100"></div>
                </ul>
              </div>
              <div className="aboutUs--company--img--container">
                <img
                  src="/imgs/woman-with-blue-suit.jpg"
                  alt="عکس"
                  className="aboutUs--company--img"
                />
                <div className="spacer-50"></div>
              </div>
            </div>
            <div className="aboutUs--contact">
              <div className="aboutUs--contact--context">
                <div className="spacer-100"></div>
                <h2 className="aboutUs--contact--context--title">
                  لورم ایپسوم متن ساختگی با تولید
                </h2>
                <p className="aboutUs--contact--context--description">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان
                  گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و
                  برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای
                  کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده.
                </p>
                <p className="aboutUs--contact--context--postalAddress">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از
                </p>
                <p className="aboutUs--contact--context--address">
                  آدرس: یابان صفا، پارک علم و فناوری زنجان
                </p>
                <p className="aboutUs--contact--context--phoneNumber">شماره تماس: 12345678 024+</p>
                <div className="spacer-100"></div>
              </div>
              <div
                className="aboutUs--contact--form--container"
                style={{ backgroundImage: `url('/imgs/about-us-form-bg.jpg')` }}
              >
                <div className="spacer-100"></div>
                <h2 className="aboutUs--contact--form--title">لورم ایپسوم متن ساختگی با تولید</h2>
                <form className="aboutUs--contact--form">
                  <div className="aboutUs--contact--form--inputs">
                    <input
                      type="text"
                      placeholder="نام و نام خانوادگی"
                      className="aboutUs--form--input--name"
                    />
                    <input
                      type="text"
                      placeholder="ایمیل"
                      className="aboutUs--form--input--email"
                    />
                    <input
                      type="text"
                      placeholder="موضوع"
                      className="aboutUs--form--input--subject"
                    />
                    <input
                      type="text"
                      placeholder="پیام"
                      className="aboutUs--form--input--message"
                    />
                  </div>
                  <button type="button" className="aboutUs--contact--form--btn">
                    ارسال پیام
                  </button>
                </form>
              </div>
            </div>
            <div className="aboutUs--socialMedia--container">
              <div className="spacer-70"></div>
              <ul className="aboutUs--socialMedia--list">
                <li className="aboutUs--socialMedia--list--item aboutUs--pinterest">
                  <Link href="#">پینترست</Link>
                </li>
                <li className="aboutUs--socialMedia--list--item aboutUs--linkedin">
                  <Link href="#">لینکداین</Link>
                </li>
                <li className="aboutUs--socialMedia--list--item aboutUs--twitter">
                  <Link href="#">توییتر</Link>
                </li>
                <li className="aboutUs--socialMedia--list--item aboutUs--facebook">
                  <Link href="#">فیسبوک</Link>
                </li>
              </ul>
              <div className="spacer-70"></div>
            </div>
          </div>
        </main>
      </Layout>
    </>
  );
};

export default AboutUsPage;
