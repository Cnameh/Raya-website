import { IoPricetagOutline } from "react-icons/io5";
import { BiShoppingBag } from "react-icons/bi";
import { IoFilmOutline } from "react-icons/io5";
import { IoPersonOutline } from "react-icons/io5";
import { IoIosPlay } from "react-icons/io";

const Findout = () => {
  return (
    <section className="findout">
      <div className="findout--container">
      <div className="spacer"></div>
        <div className="findout--content">
          <div className="findout--video">
            <img src="/imgs/bg-people.jpg" alt="عکس" />
            <IoIosPlay className="findout--play--icon" />
          </div>
          <div className="findout--context">
            <h3 className="findout--small--title">لورم ایپسوم متن ساختگی </h3>
            <br />
            <h2 className="findout--big--title">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم
            </h2>
            <br />
            <br />
            <p className="findout--description">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
              نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،
              کتابهای
            </p>
            <br />
            <br />
            <button className="findout--btn">همین الان شروع کن</button>
          </div>
        </div>
        <div className="spacer"></div>
        <ul className="findout--statistics">
          <li className="findout--statistics--item statistics-item-1">
            <span className="findout--statistics--number">781</span>
            <div className="findout--statistics--topic">
              <IoPricetagOutline className="findout--statistics--icon" />
              <div>
                <h4 className="findout--statistics--title">گزینه‌های مختلف</h4>
                <span className="findout--statistics--detail">
                  لورم ایپسوم متن ساختگی
                </span>
              </div>
            </div>
          </li>
          <li className="findout--statistics--item statistics-item-2">
            <span className="findout--statistics--number">472</span>
            <div className="findout--statistics--topic">
              <BiShoppingBag className="findout--statistics--icon" />
              <div>
                <h4 className="findout--statistics--title">گزینه‌های مختلف</h4>
                <span className="findout--statistics--detail">
                  لورم ایپسوم متن ساختگی
                </span>
              </div>
            </div>
          </li>
          <li className="findout--statistics--item statistics-item-3">
            <span className="findout--statistics--number">95</span>
            <div className="findout--statistics--topic">
              <IoFilmOutline className="findout--statistics--icon" />
              <div>
                <h4 className="findout--statistics--title">گزینه‌های مختلف</h4>
                <span className="findout--statistics--detail">
                  لورم ایپسوم متن ساختگی
                </span>
              </div>
            </div>
          </li>
          <li className="findout--statistics--item statistics-item-4">
            <span className="findout--statistics--number">37</span>
            <div className="findout--statistics--topic">
              <IoPersonOutline className="findout--statistics--icon" />
              <div>
                <h4 className="findout--statistics--title">گزینه‌های مختلف</h4>
                <span className="findout--statistics--detail">
                  لورم ایپسوم متن ساختگی
                </span>
              </div>
            </div>
          </li>
        </ul>
        <div className="spacer"></div>
      </div>
    </section>
  );
};

export default Findout;
