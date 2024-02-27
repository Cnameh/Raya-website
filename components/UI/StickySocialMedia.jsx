// icons
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";

const StickySocialMedia = ({ rightDirection }) => {
  return (
    <ul
      className={`stickySocialMedia ${
        rightDirection ? "stickySocialMedia--right" : "stickySocialMedia--left"
      }`}
    >
      <li>
        <a className="stickySocialMedia--link stickySocialMedia--link--facebook" href="#">
          <FaFacebookF />
        </a>
      </li>
      <li>
        <a className="stickySocialMedia--link stickySocialMedia--link--twitter" href="#">
          <FaXTwitter />
        </a>
      </li>
      <li>
        <a className="stickySocialMedia--link stickySocialMedia--link--linkedIn" href="#">
          <FaLinkedinIn />
        </a>
      </li>
    </ul>
  );
};

export default StickySocialMedia;
