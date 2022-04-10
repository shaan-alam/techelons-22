import messageStyles from "./Message.module.scss";
import LazyImage from "react-lazy-blur-image";

interface Props {
  teachers: {
    name: string;
    message: string;
    profileImage: string;
  }[];
}

const Message = ({ teachers }: Props) => {
  return (
    <>
      <div className={messageStyles.container}>
        <h1>Message from Teachers</h1>
        <div className={messageStyles.teachers_message}>
          {teachers.map((teacher, index) => (
            <div
              className={`${messageStyles.teacher} ${
                index % 2 != 0 ? messageStyles.reverse : ""
              } `}
              key={teacher.name}
            >
              <div className={messageStyles.teacher_pic}>
                <LazyImage
                  placeholder={teacher.profileImage}
                  uri={teacher.profileImage}
                  render={(src, style) => (
                    <img
                      src={src}
                      style={style}
                      className={messageStyles.img}
                    />
                  )}
                />
              </div>
              <div className={messageStyles.message}>
                <p>{teacher.message}</p>
                <blockquote>- {teacher.name}</blockquote>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Message;
