import { RiCamera2Line } from "react-icons/ri";
import { TbCompass } from "react-icons/tb";
import { AiOutlineTablet } from "react-icons/ai";

const HomeContact = () => {
  return (
    <section className="homeContact">
      <div className="homeContact--container">
        <div className="spacer"></div>
        <div className="homeContact--context">
          <h4 className="homeContact--small--title">
            لورم ایپسوم متن ساختگی با تولید{" "}
          </h4>
          <br />
          <h2 className="homeContact--big--title">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت{" "}
          </h2>
          <br />
          <p className="homeContact--description">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است.
          </p>
        </div>
        <div className="spacer--module"></div>
        <ul className="homeContact--list">
          <li className="homeContact--list--item">
            <RiCamera2Line className="homeContact--list--item--icon" />
            <div>
              <h4 className="homeContact--list--item--title">
                لورم ایپسوم متن ساختگی{" "}
              </h4>
              <h5 className="homeContact--list--item--subtitle">
                لورم ایپسوم متن ساختگی با تولید{" "}
              </h5>
            </div>
          </li>
          <li className="homeContact--list--item">
            <TbCompass className="homeContact--list--item--icon" />
            <div>
              <h4 className="homeContact--list--item--title">
                لورم ایپسوم متن ساختگی{" "}
              </h4>
              <h5 className="homeContact--list--item--subtitle">
                لورم ایپسوم متن ساختگی با تولید{" "}
              </h5>
            </div>
          </li>
          <li className="homeContact--list--item">
            <AiOutlineTablet className="homeContact--list--item--icon" />
            <div>
              <h4 className="homeContact--list--item--title">
                لورم ایپسوم متن ساختگی{" "}
              </h4>
              <h5 className="homeContact--list--item--subtitle">
                لورم ایپسوم متن ساختگی با تولید{" "}
              </h5>
            </div>
          </li>
        </ul>
        <div className="spacer--module"></div>
        <div className="homeContact--or"></div>
        <div className="spacer--module"></div>
        <form className="homeContact--form">
          <h2 className="homeContact--form--title">با ما در ارتباط باشید</h2>
          <div className="spacer--module"></div>
          <div className="homeContact--form--inputs">
            <div className="homeContact--form--input--group homeContact--form--input--name">
              <label badge="*">نام و نام خانوادگی</label>
              <input type="text" />
            </div>
            <div className="homeContact--form--input--group homeContact--form--input--email">
              <label badge="*">ایمیل</label>
              <input type="email" />
            </div>
            <div className="homeContact--form--input--group homeContact--form--input--message">
              <label>پیام</label>
              <textarea />
            </div>
          </div>
          <div className="homeContact--form--btn--container">
            <button type="button" className="homeContact--form--btn">
              ارسال پیام
            </button>
          </div>
          <div className="spacer"></div>
        </form>
      </div>
    </section>
  );
};

export default HomeContact;
