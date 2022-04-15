import { ProfileCard } from "../../components";
import { Props } from "./types";
import teamStyles from "./Team.module.scss";

const Team = ({
  team: { president, vicePresidents, officeBearers, coreMembers, volunteers },
}: Props) => {
  return (
    <section className={teamStyles.meet_team}>
      <h1 className={teamStyles.heading}>Council Members</h1>
      <div className={teamStyles.president}>
        <ProfileCard
          name={president.name}
          designation={president.designation}
          imageURL={president.profileImage}
        />
      </div>
      <div className={teamStyles.vice_presidents}>
        {vicePresidents.map((vicePresident) => (
          <ProfileCard
            key={vicePresident.name}
            name={vicePresident.name}
            designation={vicePresident.designation}
            imageURL={vicePresident.profileImage}
          />
        ))}
      </div>
      <div className={teamStyles.office_bearers}>
        {officeBearers.map((officeBearer) => (
          <ProfileCard
            key={officeBearer.name}
            name={officeBearer.name}
            designation={officeBearer.designation}
            imageURL={officeBearer.profileImage}
          />
        ))}
      </div>
      <div className={teamStyles.core_members}>
        {coreMembers.map((coreMember) => (
          <ProfileCard
            key={coreMember.name}
            name={coreMember.name}
            designation={coreMember.designation}
            imageURL={coreMember.profileImage}
          />
        ))}
        {volunteers.map((volunteer) => (
          <ProfileCard
            key={volunteer.name}
            name={volunteer.name}
            designation={volunteer.designation}
            imageURL={volunteer.profileImage}
          />
        ))}
      </div>
    </section>
  );
};

export default Team;
