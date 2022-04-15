import teacherStyles from "./Teachers.module.scss";
import { Props } from "./types";
import { ProfileCard } from "../../components";

const Teachers = ({ teachers }: Props) => {
  return (
    <>
      <div className={teacherStyles.container}>
        <h1>Computer Science Dept. Professors</h1>
        <div className={teacherStyles.teachers}>
          {teachers.map((teacher) => (
            <div className={teacherStyles.teacher} key={teacher.name}>
              <div className={teacherStyles.teacher_pic}>
                <ProfileCard
                  name={teacher.name}
                  designation={teacher.designation}
                  imageURL={teacher.profileImage}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Teachers;
