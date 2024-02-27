// icons
import { FaRegHeart } from "react-icons/fa";

const FavoriteItem = () => {
  return (
    <div className="favoriteItem">
      <span className="favoriteItem--number">0</span>
      <span className="favoriteItem--icon">
        <FaRegHeart />
      </span>
      <span className="favoriteItem--times">9</span>
    </div>
  );
};

export default FavoriteItem;
