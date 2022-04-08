interface Props {
  name: string;
  designation: string;
  imageURL: string;
}

const ProfileCard = ({ name, designation, imageURL }: Props) => {
  return (
    <div className="flex flex-col items-center">
      <img src={imageURL} alt={name} className="w-3/4" />
      <h3 className="font-josefin text-white my-4 text-lg">{name}</h3>
      <h3 className="font-josefin text-gray-400 text-sm -my-4">{designation}</h3>
    </div>
  );
};

export default ProfileCard;
