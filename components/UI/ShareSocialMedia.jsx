import Link from "next/link";

// icons
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const ShareSocialMedia = () => {
  return (
    <div className="shareSocialMedia">
      <button className="shareSocialMedia--btn">اشتراک گذاشتن</button>
      <ul className="shareSocialMedia--socialList">
        <a className="shareSocialMedia--socialLink" href="https://www.google.com" target="_blank">
          <FaFacebookF />
        </a>
        <a className="shareSocialMedia--socialLink" href="https://www.google.com" target="_blank">
          <FaLinkedinIn />
        </a>
        <a className="shareSocialMedia--socialLink" href="https://www.google.com" target="_blank">
          <FaPinterestP />
        </a>
        <a className="shareSocialMedia--socialLink" href="https://www.google.com" target="_blank">
          <FaXTwitter />
        </a>
      </ul>
    </div>
  );
};

export default ShareSocialMedia;
