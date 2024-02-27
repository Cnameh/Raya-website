// components
import Input from "./UI/Input";

// icons
import { RiCamera2Line } from "react-icons/ri";
import { TbCompass } from "react-icons/tb";
import { AiOutlineTablet } from "react-icons/ai";

const HomeContact = () => {
  return (
    <section className="homeContact">
      <div className="homeContact--container">
        <div className="spacer-120"></div>
        <div className="homeContact--context">
          <h4 className="homeContact--small--title">لورم ایپسوم متن ساختگی با تولید </h4>
          <div className="spacer-20"></div>
          <h2 className="homeContact--big--title">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت
          </h2>
          <div className="spacer-20"></div>
          <p className="homeContact--description">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک
            است.
          </p>
        </div>
        <div className="spacer-60"></div>
        <ul className="homeContact--list">
          <li className="homeContact--list--item">
            <RiCamera2Line className="homeContact--list--item--icon" />
            <div>
              <h4 className="homeContact--list--item--title">لورم ایپسوم متن ساختگی </h4>
              <h5 className="homeContact--list--item--subtitle">
                لورم ایپسوم متن ساختگی با تولید{" "}
              </h5>
            </div>
          </li>
          <li className="homeContact--list--item">
            <TbCompass className="homeContact--list--item--icon" />
            <div>
              <h4 className="homeContact--list--item--title">لورم ایپسوم متن ساختگی </h4>
              <h5 className="homeContact--list--item--subtitle">
                لورم ایپسوم متن ساختگی با تولید{" "}
              </h5>
            </div>
          </li>
          <li className="homeContact--list--item">
            <AiOutlineTablet className="homeContact--list--item--icon" />
            <div>
              <h4 className="homeContact--list--item--title">لورم ایپسوم متن ساختگی </h4>
              <h5 className="homeContact--list--item--subtitle">
                لورم ایپسوم متن ساختگی با تولید{" "}
              </h5>
            </div>
          </li>
        </ul>
        <div className="spacer-50"></div>
        <div className="homeContact--or"></div>
        <div className="spacer-50"></div>
        <form className="homeContact--form">
          <h2 className="homeContact--form--title">با ما در ارتباط باشید</h2>
          <div className="spacer-40"></div>
          <div className="homeContact--form--inputs">
            <Input
              badge="*"
              type="text"
              label="نام و نام خانوادگی"
              className="homeContact--form--input--group homeContact--form--input--name"
            />
            <Input
              badge="*"
              type="email"
              label="ایمیل"
              className="homeContact--form--input--group homeContact--form--input--email"
            />
            <Input
              textarea
              badge="*"
              type="text"
              label="پیام"
              className="homeContact--form--input--group homeContact--form--input--message"
            />
          </div>
          <div className="homeContact--form--btn--container">
            <button type="button" className="homeContact--form--btn">
              ارسال پیام
            </button>
          </div>
          <div className="spacer-120"></div>
        </form>
      </div>
    </section>
  );
};

export default HomeContact;
