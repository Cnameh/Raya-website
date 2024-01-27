import Link from "next/link";

const Banner = () => {
  return (
    <section
      className="banner"
      style={{ backgroundImage: `url('/imgs/bg-suitman.jpg')` }}
    >
      <h1 className="banner--title">نام صفحه</h1>
      <div className="banner--user--location">
        <Link href="/" className="banner--user--location--link">خانه</Link> / نام صفحه
      </div>
    </section>
  );
};

export default Banner;
