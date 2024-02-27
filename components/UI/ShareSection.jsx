import Link from "next/link";
import ShareSocialMedia from "./ShareSocialMedia";

const ShareSection = () => {
  return (
    <section className="shareSection">
      <Link className="shareSection--more" href="#">
        بیشتر
      </Link>
      <ShareSocialMedia />
    </section>
  );
};

export default ShareSection;