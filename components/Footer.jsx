import Link from "next/link";
import { MdOutlinePhoneCallback } from "react-icons/md";
import { IoPaperPlaneOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";

const Footer = ({ bottomFooter }) => {
  return (
    <>
      {!bottomFooter ? (
        <footer className="footer">
          <div className="footer--row">
            <div className="footer--col footer--contact">
              <img className="footer--logo" src="/imgs/logo.png" alt="لوگوی وبسایت" />
              <p className="footer--description">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان
                گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که است.
              </p>
              <ul className="footer--contact--paths">
                <li>
                  <MdOutlinePhoneCallback className="footer--icon" />
                  <span>12345678 024+</span>
                </li>
                <li>
                  <IoPaperPlaneOutline className="footer--icon" />
                  <span>خیابان صفا، پارک علم و فناوری زنجان</span>
                </li>
                <li>
                  <MdOutlineEmail className="footer--icon" />
                  <span>weraya@gmail.com</span>
                </li>
              </ul>
            </div>
            <div className="footer--col footer--categories">
              <h3 className="footer--title">دسته بندی</h3>
              <ul className="footer--categories--list">
                <li>
                  <Link href="#">طراحی</Link>
                </li>
                <li>
                  <Link href="#">همکاری</Link>
                </li>
                <li>
                  <Link href="#">علم</Link>
                </li>
                <li>
                  <Link href="#">تکنولوژی</Link>
                </li>
                <li>
                  <Link href="#">شرکت</Link>
                </li>
              </ul>
            </div>
            <div className="footer--col footer--news">
              <h3 className="footer--title">اخبار اخیر</h3>
              <ul className="footer--news--list">
                <li className="footer--news--list--item">
                  <img className="footer--news--img" src="/imgs/sport-100x100.jpg" alt="عکس" />
                  <div className="footer--news--context">
                    <Link href="#">
                      <h4 className="footer--news--title">جدید ترین پست های گالری</h4>
                    </Link>
                    <span className="footer--news--subject">رایا</span>
                    <span className="footer--news--date">1402 / 8 / 12</span>
                  </div>
                </li>
                <li className="footer--news--list--item">
                  <img className="footer--news--img" src="/imgs/baker-100x100.jpg" alt="عکس" />
                  <div className="footer--news--context">
                    <Link href="#">
                      <h4 className="footer--news--title">جدید ترین پست های گالری</h4>
                    </Link>

                    <span className="footer--news--subject">رایا</span>
                    <span className="footer--news--date">1402 / 8 / 12</span>
                  </div>
                </li>
                <li className="footer--news--list--item">
                  <img className="footer--news--img" src="/imgs/bread-100x100.jpg" alt="عکس" />
                  <div className="footer--news--context">
                    <Link href="#">
                      <h4 className="footer--news--title">جدید ترین پست های گالری</h4>
                    </Link>
                    <span className="footer--news--subject">رایا</span>
                    <span className="footer--news--date">1402 / 8 / 12</span>
                  </div>
                </li>
              </ul>
            </div>
            <div className="footer--col footer--portofolio">
              <h3 className="footer--title">نمونه کارها</h3>
              <div className="footer--portofolio--imgs">
                <Link href="#">
                  <span>
                    <img
                      src="/imgs/man-01.jpg"
                      alt="نمونه کار-1"
                      className="footer--portofolio--img--1"
                    />
                  </span>
                </Link>
                <Link href="#">
                  <span>
                    <img
                      src="/imgs/woman-01.jpg"
                      alt="نمونه کار-2"
                      className="footer--portofolio--img--2"
                    />
                  </span>
                </Link>
                <Link href="#">
                  <span>
                    <img
                      src="/imgs/man-02.jpg"
                      alt="نمونه کار-3"
                      className="footer--portofolio--img--3"
                    />
                  </span>
                </Link>
                <Link href="#">
                  <span>
                    <img
                      src="/imgs/woman-02.jpg"
                      alt="نمونه کار-4"
                      className="footer--portofolio--img--4"
                    />
                  </span>
                </Link>
                <Link href="#">
                  <span>
                    <img
                      src="/imgs/man-03.jpg"
                      alt="نمونه کار-5"
                      className="footer--portofolio--img--5"
                    />
                  </span>
                </Link>
                <Link href="#">
                  <span>
                    <img
                      src="/imgs/woman-03.jpg"
                      alt="نمونه کار-6"
                      className="footer--portofolio--img--6"
                    />
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </footer>
      ) : (
        <footer className="bottom--footer">
          &copy; تمامی حقوق مادی و معنوی این سایت متعلق به شرکت رایا می‌باشد.
        </footer>
      )}
    </>
  );
};

export default Footer;
