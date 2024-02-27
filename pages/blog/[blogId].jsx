import Head from "next/head";
import Link from "next/link";
import Layout from "../layout";

// components
import ItemNavigation from "../../components/UI/ItemNavigation";
import SearchBlock from "../../components/UI/SearchBlock";
import ShareSocialMedia from "../../components/UI/ShareSocialMedia";
import Input from "../../components/UI/Input";

// icons
import { MdFavoriteBorder } from "react-icons/md";
import StickySocialMedia from "../../components/UI/StickySocialMedia";

const SingleBlogPage = () => {
  return (
    <>
      <Head>
        <link rel="website icon" href="/imgs/logo-little.png" type="image/icon" />
      </Head>
      <Layout>
        <main className="singleBlog--main">
          <ItemNavigation centered />
          <div className="singleBlog--content">
            <div className="singleBlog--about">
              <StickySocialMedia rightDirection />
              <section className="singleBlog--item">
                <div className="singleBlog--item--context">
                  <button className="singleBlog--item--name">تکنولوژی</button>
                  <Link className="singleBlog--item--title" href="#">
                    گالری های زیبا
                  </Link>
                  <div className="singleBlog--item--info">
                    <span className="singleBlog--item--date">12 / 03 / 1402 توسط</span>
                    <Link href="#">شرکت رایا</Link>
                    <span>در</span>
                    <Link href="#">تکنولوژی</Link>
                  </div>
                </div>
                <div className="singleBlog--img--container">
                  <img src="/imgs/bread.jpg" alt="عکس" className="singleBlog--img" />
                </div>
                <p className="singleBlog--paragraph">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان
                  گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و
                  برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای
                  کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان
                  جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه
                  ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می
                  توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان
                  رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل
                  دنیای موجود طراحی اساسا مورد استفاده قرار گیرد. لورم ایپسوم متن ساختگی با تولید
                  سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه
                  روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
                  نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در
                  شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را است.
                </p>
                <div className="singleBlog--comments">
                  <span className="singleBlog--comments--title" badge="0">
                    نظرات
                  </span>
                  <div className="singleBlog--comments--tags">
                    <Link className="singleBlog--comments--tag" href="#">
                      گالری
                    </Link>
                    <Link className="singleBlog--comments--tag" href="#">
                      پست
                    </Link>
                    <Link className="singleBlog--comments--tag" href="#">
                      نمونه
                    </Link>
                    <Link className="singleBlog--comments--tag" href="#">
                      طراحی
                    </Link>
                  </div>
                </div>
                <div className="singleBlog--like--share">
                  <button className="singleBlog--like--btn">
                    <MdFavoriteBorder />
                    <span className="singleBlog--like--count">14</span>
                  </button>
                  <ShareSocialMedia />
                </div>
                <div className="singleBlog--relatedPosts">
                  <h4 className="singleBlog--relatedPosts--title">پست‌های مربوط</h4>
                  <ul className="singleBlog--relatedPosts--list">
                    <li className="singleBlog--relatedPosts--item">
                      <img
                        src="/imgs/man-with-headphones.jpg"
                        alt="عکس"
                        className="singleBlog--relatedPosts--item--img"
                      />
                      <h4 className="singleBlog--relatedPosts--item--title">پست های گالری جدید</h4>
                      <div className="singleBlog--item--info">
                        <span className="singleBlog--item--date">12 / 03 / 1402 توسط</span>
                        <Link href="#">شرکت رایا</Link>
                        <span>در</span>
                        <Link href="#">تکنولوژی</Link>
                      </div>
                    </li>
                    <li className="singleBlog--relatedPosts--item">
                      <img
                        src="/imgs/baker.jpg"
                        alt="عکس"
                        className="singleBlog--relatedPosts--item--img"
                      />
                      <h4 className="singleBlog--relatedPosts--item--title">پست های گالری جدید</h4>
                      <div className="singleBlog--item--info">
                        <span className="singleBlog--item--date">12 / 03 / 1402 توسط</span>
                        <Link href="#">شرکت رایا</Link>
                        <span>در</span>
                        <Link href="#">تکنولوژی</Link>
                      </div>
                    </li>
                    <li className="singleBlog--relatedPosts--item">
                      <img
                        src="/imgs/bread.jpg"
                        alt="عکس"
                        className="singleBlog--relatedPosts--item--img"
                      />
                      <h4 className="singleBlog--relatedPosts--item--title">پست های گالری جدید</h4>
                      <div className="singleBlog--item--info">
                        <span className="singleBlog--item--date">12 / 03 / 1402 توسط</span>
                        <Link href="#">شرکت رایا</Link>
                        <span>در</span>
                        <Link href="#">تکنولوژی</Link>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="spacer-60"></div>
                <div className="singleBlog--respond">
                  <h3 className="singleBlog--respond--title">نظرتان را با ما به اشتراک بگذارید</h3>
                  <form className="singleBlog--respond--form">
                    <div className="singleBlog--respond--inputs--container">
                      <Input
                        label="نام و نام خانوادگی"
                        type="text"
                        className="singleBlog--respond--name"
                      />
                      <Input label="ایمیل" type="text" className="singleBlog--respond--email" />
                      <Input label="وبسایت" type="text" className="singleBlog--respond--website" />
                      <Input
                        textarea
                        label="پیام"
                        type="text"
                        className="singleBlog--respond--comment"
                      />
                    </div>
                    <button className="singleBlog--respond--btn" type="button">
                      ارسال
                    </button>
                  </form>
                </div>
              </section>
            </div>
            <SearchBlock />
          </div>
        </main>
      </Layout>
    </>
  );
};

export default SingleBlogPage;
