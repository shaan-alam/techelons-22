import teacherStyles from "./Teachers.module.scss";
import LazyImage from "react-lazy-blur-image";
import { Props } from "./types";

const Teachers = ({ teachers }: Props) => {
  return (
    <>
      <div className={teacherStyles.container}>
        <h1>Teachers In Charge</h1>
        <div className={teacherStyles.teachers}>
          {teachers.map((teacher, index) => (
            <div className={teacherStyles.teacher} key={teacher.name}>
              <div className={teacherStyles.teacher_pic}>
                <LazyImage
                  placeholder={teacher.profileImage}
                  uri={teacher.profileImage}
                  render={(src, style) => (
                    <img
                      src={src}
                      style={style}
                      className={teacherStyles.img}
                    />
                  )}
                />
              </div>
              <h2>{teacher.name}</h2>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Teachers;
