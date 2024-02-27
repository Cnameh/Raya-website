import Link from "next/link";

// icons
import { HiBars3 } from "react-icons/hi2";
import { PiDotsNineBold } from "react-icons/pi";

const FilterBar = ({ centered }) => {
  return (
    <div className={`filterBar ${centered && "filterBar--center"}`}>
      <div className="filterBar--options">
        <h4 className="filterBar--options--title">فیلتر بر اساس:</h4>
        <button className="filterBar--options--btn">
          <span>دسته بندی</span>
          <HiBars3 />
        </button>
        <button className="filterBar--options--btn">
          <span>برچسب‌ها</span>
          <HiBars3 />
        </button>
        <button className="filterBar--options--btn">
          <span>نویسنده‌ها</span>
          <HiBars3 />
        </button>
      </div>
      <Link className="filterBar--dots--btn" href="#">
        <PiDotsNineBold />
      </Link>
    </div>
  );
};

export default FilterBar;
