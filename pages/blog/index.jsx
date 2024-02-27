import Head from "next/head";
import Link from "next/link";
import Layout from "../layout";

// components
import FilterBar from "../../components/UI/FilterBar";
import ShareSection from "../../components/UI/ShareSection";
import SearchBlock from "../../components/UI/SearchBlock";
import FavoriteItem from "../../components/UI/FavoriteItem";

// icons
import { FaQuoteRight } from "react-icons/fa";

const BlogPage = () => {
  return (
    <>
      <Head>
        <title>بلاگ</title>
        <meta name="description" content="به سایت رایا خوش اومدید!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="website icon" href="/imgs/logo-little.png" type="image/icon" />
      </Head>
      <Layout>
        <main className="blog--main">
          <FilterBar centered />
          <div className="blog--content">
            <ul className="blog--list">
              <li className="blog--list--item">
                <div className="blog--list--item--context">
                  <button className="blog--list--item--tag">تکنولوژی</button>
                  <Link className="blog--list--item--title" href="#">
                    گالری های زیبا
                  </Link>
                  <div className="blog--list--item--info">
                    <span className="blog--list--item--date">12 / 03 / 1402 توسط</span>
                    <Link href="#">شرکت رایا</Link>
                    <span>در</span>
                    <Link href="#">تکنولوژی</Link>
                  </div>
                  <ShareSection />
                </div>
                <div className="blog--list--item--content">
                  <img
                    className="blog--list--item--img"
                    src="/imgs/man-with-headphones.jpg"
                    alt="عکس"
                  />
                  <FavoriteItem />
                </div>
              </li>
              <li className="blog--list--item">
                <div className="blog--list--item--context">
                  <button className="blog--list--item--tag">تکنولوژی</button>
                  <Link className="blog--list--item--title" href="#">
                    گالری های زیبا
                  </Link>
                  <div className="blog--list--item--info">
                    <span className="blog--list--item--date">12 / 03 / 1402 توسط</span>
                    <Link href="#">شرکت رایا</Link>
                    <span>در</span>
                    <Link href="#">تکنولوژی</Link>
                  </div>
                  <ShareSection />
                </div>
                <div className="blog--list--item--content">
                  <img className="blog--list--item--img" src="/imgs/baker.jpg" alt="عکس" />
                  <FavoriteItem />
                </div>
              </li>
              <li className="blog--list--item">
                <div className="blog--list--item--context">
                  <button className="blog--list--item--tag">تکنولوژی</button>
                  <Link className="blog--list--item--title" href="#">
                    گالری های زیبا
                  </Link>
                  <div className="blog--list--item--info">
                    <span className="blog--list--item--date">12 / 03 / 1402 توسط</span>
                    <Link href="#">شرکت رایا</Link>
                    <span>در</span>
                    <Link href="#">تکنولوژی</Link>
                  </div>
                  <ShareSection />
                </div>
                <div className="blog--list--item--content">
                  <div className="blog--list--item--paragraph">
                    <p>
                      لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از
                      طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که
                      لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و
                    </p>
                    <span className="blog--list--item--paragraph--author">محمد نادری</span>
                    <FaQuoteRight className="blog--list--item--paragraph--quoteIcon" />
                  </div>
                </div>
              </li>
              <li className="blog--list--item">
                <div className="blog--list--item--context">
                  <button className="blog--list--item--tag">تکنولوژی</button>
                  <Link className="blog--list--item--title" href="#">
                    گالری های زیبا
                  </Link>
                  <div className="blog--list--item--info">
                    <span className="blog--list--item--date">12 / 03 / 1402 توسط</span>
                    <Link href="#">شرکت رایا</Link>
                    <span>در</span>
                    <Link href="#">تکنولوژی</Link>
                  </div>
                  <ShareSection />
                </div>
                <div className="blog--list--item--content">
                  <img className="blog--list--item--img" src="/imgs/bread.jpg" alt="عکس" />
                  <FavoriteItem />
                </div>
              </li>
              <li className="blog--list--item">
                <div className="blog--list--item--context">
                  <button className="blog--list--item--tag">تکنولوژی</button>
                  <Link className="blog--list--item--title" href="#">
                    گالری های زیبا
                  </Link>
                  <div className="blog--list--item--info">
                    <span className="blog--list--item--date">12 / 03 / 1402 توسط</span>
                    <Link href="#">شرکت رایا</Link>
                    <span>در</span>
                    <Link href="#">تکنولوژی</Link>
                  </div>
                  <ShareSection />
                </div>
                <div className="blog--list--item--content">
                  <img className="blog--list--item--img" src="/imgs/woman-03.jpg" alt="عکس" />
                  <FavoriteItem />
                </div>
              </li>
              <li className="blog--list--item">
                <div className="blog--list--item--context">
                  <button className="blog--list--item--tag">تکنولوژی</button>
                  <Link className="blog--list--item--title" href="#">
                    گالری های زیبا
                  </Link>
                  <div className="blog--list--item--info">
                    <span className="blog--list--item--date">12 / 03 / 1402 توسط</span>
                    <Link href="#">شرکت رایا</Link>
                    <span>در</span>
                    <Link href="#">تکنولوژی</Link>
                  </div>
                  <ShareSection />
                </div>
                <div className="blog--list--item--content">
                  <div className="blog--list--item--paragraph">
                    <p>
                      لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از
                      طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که
                      لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و
                    </p>
                    <span className="blog--list--item--paragraph--author">عارف کرمی</span>
                    <FaQuoteRight className="blog--list--item--paragraph--quoteIcon" />
                  </div>
                </div>
              </li>
              <nav className="blog--list--pagination--container">
                <ol className="blog--list--pagination">
                  <li>
                    <Link className="blog--list--pagination--prevNext" href="#">
                      بعدی
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="blog--list--pagination--number blog--list--pagination--number--active"
                      href="#"
                    >
                      1
                    </Link>
                  </li>
                  <li>
                    <Link className="blog--list--pagination--number" href="#">
                      2
                    </Link>
                  </li>
                </ol>
              </nav>
            </ul>
            <SearchBlock />
          </div>
        </main>
      </Layout>
    </>
  );
};

export default BlogPage;
