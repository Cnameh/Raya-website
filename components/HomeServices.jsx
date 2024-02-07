import { IoWalletOutline } from "react-icons/io5";
import { FaRegCreditCard } from "react-icons/fa6";
import { BiShoppingBag } from "react-icons/bi";

const HomeServices = () => {
  return (
    <section className="homeServices">
      <div className="homeServices--container">
        <div className="spacer"></div>
        <div className="homeServices--context">
          <h4 className="homeServices--small--title">لورم ایپسوم متن ساختگی</h4>
          <br />
          <h2 className="homeServices--big--title">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت
          </h2>
          <br />
          <p className="homeServices--description">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است، چاپگرها و
          </p>
        </div>
        <div className="spacer--module"></div>
        <ul className="homeServices--list">
          <li className="homeServices--list--item homeServices--list-item--1">
            <div className="spacer--module"></div>
            <IoWalletOutline className="homeServices--list--icon" />
            <h4 className="homeServices--list--title">
              لورم ایپسوم متن ساختگی
            </h4>
            <h5 className="homeServices--list--subtitle">
              لورم ایپسوم متن ساختگی با تولید
            </h5>
            <p className="homeServices--list--description">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
            </p>
            <div className="spacer--module"></div>
          </li>
          <li className="homeServices--list--item homeServices--list-item--2">
            <div className="spacer--module"></div>
            <FaRegCreditCard className="homeServices--list--icon" />
            <h4 className="homeServices--list--title">
              لورم ایپسوم متن ساختگی
            </h4>
            <h5 className="homeServices--list--subtitle">
              لورم ایپسوم متن ساختگی با تولید
            </h5>
            <p className="homeServices--list--description">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
            </p>
            <button title="بیشتر" className="homeServices--list--item--dots">
              <span className="dot"></span>
              <span className="dot"></span>
              <span className="dot"></span>
            </button>
            <div className="spacer"></div>
          </li>
          <li className="homeServices--list--item homeServices--list-item--3">
            <div className="spacer--module"></div>
            <BiShoppingBag className="homeServices--list--icon" />
            <h4 className="homeServices--list--title">
              لورم ایپسوم متن ساختگی
            </h4>
            <h5 className="homeServices--list--subtitle">
              لورم ایپسوم متن ساختگی با تولید
            </h5>
            <p className="homeServices--list--description">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
            </p>
            <div className="spacer--module"></div>
          </li>
        </ul>
        <div className="spacer--module"></div>
        <p className="homeServices--oneline">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
          استفاده از طراحان گرافیک است.
        </p>
        <div className="homeServices--btn--container">
          <button className="homeServices--btn">همین الان شروع کن</button>
        </div>
        <div className="spacer"></div>
      </div>
    </section>
  );
};

export default HomeServices;
