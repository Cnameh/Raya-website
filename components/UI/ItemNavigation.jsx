import Link from "next/link";

// icons
import { LiaAngleLeftSolid } from "react-icons/lia";
import { LiaAngleRightSolid } from "react-icons/lia";
import { PiDotsNineBold } from "react-icons/pi";

const ItemNavigation = ({ centered }) => {
  return (
    <div className={`itemNavigation ${centered && "itemNavigation--center"}`}>
      <div className="itemNavigation--prevNextBtn--container">
        <button className="itemNavigation--prevBtn">
          <LiaAngleRightSolid />
        </button>
        <button className="itemNavigation--nextBtn">
          <LiaAngleLeftSolid />
        </button>
      </div>
      <Link className="itemNavigation--dots--btn" href="#">
        <PiDotsNineBold />
      </Link>
    </div>
  );
};

export default ItemNavigation;
