import LazyImage from "react-lazy-blur-image";
import profileStyles from "./ProfleCard.module.scss";

interface Props {
  name: string;
  designation: string;
  imageURL: string;
}

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
