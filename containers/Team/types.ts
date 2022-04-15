export interface Member {
  name: string;
  designation: string;
  profileImage: string;
}

export interface Team {
  president: Member;
  vicePresidents: Array<Member>;
  officeBearers: Array<Member>;
  coreMembers: Array<Member>;
  volunteers: Array<Member>;
}

export interface Props {
  team: Team;
}
