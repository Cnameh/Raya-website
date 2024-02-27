import Head from "next/head";
import Link from "next/link";
import Layout from "../layout";

// icons for addresses
import { IoPaperPlaneOutline } from "react-icons/io5";
import { FiSmartphone } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";
import { TbWorld } from "react-icons/tb";

// icons for social media
import { IoLogoDribbble } from "react-icons/io5";
import { IoLogoInstagram } from "react-icons/io";
import { FaXTwitter } from "react-icons/fa6";
import { LiaTelegramPlane } from "react-icons/lia";
import Input from "../../components/UI/Input";

const ContactUsPage = () => {
  return (
    <>
      <Head>
        <title>تماس با ما</title>
        <meta name="description" content="به سایت رایا خوش اومدید!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Layout>
        <main>
          <section className="contactUs" style={{ backgroundImage: `url('/imgs/bg-vector.jpg')` }}>
            <div className="spacer-100"></div>
            <div className="contactUs--container">
              <div className="contactUs--address--wrapper">
                <h2 className="contactUs--title">ما را در اینجا پیدا کنید</h2>
                <div className="spacer-50"></div>
                <ul className="contactUs--list">
                  <li className="contactUs--list--item">
                    <div className="contactUs--list--icon">
                      <IoPaperPlaneOutline />
                    </div>
                    <div className="contactUs--list--item--context">
                      <h4 className="contactUs--list--item--title">آدرس</h4>
                      <p className="contactUs--list--item--detail">
                        خیابان صفا، پارک علم و فناوری زنجان
                      </p>
                    </div>
                  </li>
                  <li className="contactUs--list--item">
                    <div className="contactUs--list--icon">
                      <FiSmartphone />
                    </div>
                    <div className="contactUs--list--item--context">
                      <h4 className="contactUs--list--item--title">شماره تماس</h4>
                      <p className="contactUs--list--item--detail">+024 12345678</p>
                    </div>
                  </li>
                  <li className="contactUs--list--item">
                    <div className="contactUs--list--icon">
                      <MdOutlineEmail />
                    </div>
                    <div className="contactUs--list--item--context">
                      <h4 className="contactUs--list--item--title">ایمیل</h4>
                      <p className="contactUs--list--item--detail">weraya@gmail.com</p>
                    </div>
                  </li>
                  <li className="contactUs--list--item">
                    <div className="contactUs--list--icon">
                      <TbWorld />
                    </div>
                    <div className="contactUs--list--item--context">
                      <h4 className="contactUs--list--item--title">وب سایت</h4>
                      <p className="contactUs--list--item--detail">weraya.ir</p>
                    </div>
                  </li>
                </ul>
                <p className="contactUs--description">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان
                  گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و
                  برای شرایط فعلی تکنولوژی مورد نیاز است.
                </p>
              </div>
              <div className="contactUs--form--wrapper">
                <h2 className="contactUs--title">با ما در ارتباط باشید</h2>
                <form className="contactUs--form">
                  <div className="spacer-50"></div>
                  <div className="contactUs--form--inputs">
                    <Input
                      type="text"
                      badge="*"
                      label="نام و نام خانوادگی"
                      className="contactUs--form--input--group contactUs--form--input--name"
                    />
                    <Input
                      type="text"
                      badge="*"
                      label="ایمیل"
                      className="contactUs--form--input--group contactUs--form--input--email"
                    />
                    <Input
                      type="text"
                      badge="*"
                      label="موضوع"
                      className="contactUs--form--input--group contactUs--form--input--subject"
                    />
                    <Input
                      textarea
                      type="text"
                      badge="*"
                      label="پیام"
                      className="contactUs--form--input--group contactUs--form--input--message"
                    />
                  </div>
                  <div className="contactUs--form--btn--container">
                    <button type="button" className="contactUs--form--btn">
                      ارسال پیام
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div className="spacer-100"></div>
          </section>
          <section className="location">
            <div className="location--map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d199.99417054274429!2d48.48899597282356!3d36.67674355497792!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ff611f349498ec5%3A0x69e5c4cc09b339ff!2sThe%20central%20building%20of%20Zanjan%20Science%20and%20Technology%20Park%20(Ministry%20of%20Science%2C%20Research%20and%20Technology)!5e0!3m2!1sen!2s!4v1707290117312!5m2!1sen!2s"
                width="100%"
                height="100%"
                allowfullscreen="true"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className="location--context">
              <div className="spacer-120"></div>
              <h2 className="location--title">منتظر دیدارتون هستیم!</h2>
              <p className="location--description">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان
                گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و
                برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی
                می باشد.
              </p>
              <ul className="location--socialMedia">
                <li>
                  <Link
                    className="location--socialMedia--item location--socialMedia--item--1"
                    href="#"
                  >
                    <IoLogoDribbble />
                  </Link>
                </li>
                <li>
                  <Link
                    className="location--socialMedia--item location--socialMedia--item--2"
                    href="#"
                  >
                    <IoLogoInstagram />
                  </Link>
                </li>
                <li>
                  <Link
                    className="location--socialMedia--item location--socialMedia--item--3"
                    href="#"
                  >
                    <FaXTwitter />
                  </Link>
                </li>
                <li>
                  <Link
                    className="location--socialMedia--item location--socialMedia--item--4"
                    href="#"
                  >
                    <LiaTelegramPlane />
                  </Link>
                </li>
              </ul>
              <div className="spacer-120"></div>
            </div>
          </section>
        </main>
      </Layout>
    </>
  );
};

export default ContactUsPage;
