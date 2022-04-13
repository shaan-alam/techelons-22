import LazyImage from "react-lazy-blur-image";
import profileStyles from "./ProfleCard.module.scss";
import { Props } from "./types";

/**
 * @name - ProfileCard
 * @description - A card component with lazy loading image for team members
 * @param - An object of type {@link Props}
*/
const ProfileCard = ({ name, designation, imageURL }: Props) => {
  return (
    <div className={profileStyles.profile__wrapper}>
      <LazyImage
        placeholder={imageURL}
        uri={imageURL}
        render={(src, style) => (
          <img src={src} style={style} className="w-3/4" />
        )}
      />
      <h3>{name}</h3>
      <h4>{designation}</h4>
    </div>
  );
};

export default ProfileCard;
