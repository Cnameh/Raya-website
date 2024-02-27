// icons
import { IoDocumentTextOutline } from "react-icons/io5";
import { SlTrophy } from "react-icons/sl";

const Templates = () => {
  return (
    <section className="templates">
      <div className="spacer-150"></div>
      <div className="templates--container">
        <div className="templates--context--container">
          <h4 className="templates--small--title">لورم ایپسوم متن ساختگی</h4>
          <div className="spacer-20"></div>
          <h2 className="templates--big--title">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم</h2>
          <div className="spacer-40"></div>
          <p className="templates--description">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک
            است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط
            فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود
          </p>
          <div className="spacer-50"></div>
          <div className="templates--documents">
            <div className="templates--documents--item">
              <div className="templates--documents--icon">
                <IoDocumentTextOutline />
              </div>
              <h4 className="templates--documents--title">لورم ایپسوم متن ساختگی</h4>
              <span className="templates--documents--description">
                لورم ایپسوم متن ساختگی با تولید
              </span>
              <p className="templates--documents--detail">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان
                گرافیک است، چاپگرها و
              </p>
            </div>
            <div className="templates--documents--item">
              <div className="templates--documents--icon">
                <SlTrophy />
              </div>
              <h4 className="templates--documents--title">لورم ایپسوم متن ساختگی</h4>
              <span className="templates--documents--description">
                لورم ایپسوم متن ساختگی با تولید
              </span>
              <p className="templates--documents--detail">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان
                گرافیک است، چاپگرها و
              </p>
            </div>
          </div>
        </div>
        <div className="templates--img--container">
          <img src="/imgs/bg-templates.jpg" alt="عکس" />
        </div>
      </div>
      <div className="spacer-150"></div>
    </section>
  );
};

export default Templates;
