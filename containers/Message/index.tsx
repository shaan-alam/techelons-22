import messageStyles from "./Message.module.scss";
import LazyImage from "react-lazy-blur-image";

const Message = () => {
  return (
    <>
      <div className={messageStyles.container}>
        <h1>Message from Teachers</h1>
        <div className={messageStyles.grid}>
          <div className={messageStyles.teacher_pic}>
            <LazyImage
              placeholder={
                "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              }
              uri={
                "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              }
              render={(src, style) => (
                <img src={src} style={style} className={messageStyles.img} />
              )}
            />
          </div>
          <div className={messageStyles.message}>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore
              doloremque ab vitae, eos maiores architecto asperiores odit nemo
              facere exercitationem dolore aperiam, amet iste. Voluptate
              suscipit aspernatur tempora atque aliquam.
            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore
              doloremque ab vitae, eos maiores architecto asperiores odit nemo
              facere exercitationem dolore aperiam, amet iste. Voluptate
            </p>
            <blockquote>- Preeti Sharma</blockquote>
          </div>
        </div>
        <div className={`${messageStyles.grid} ${messageStyles.reverse}`}>
          <div className={messageStyles.message}>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore
              doloremque ab vitae, eos maiores architecto asperiores odit nemo
              facere exercitationem dolore aperiam, amet iste. Voluptate
              suscipit aspernatur tempora atque aliquam.
            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore
              doloremque ab vitae, eos maiores architecto asperiores odit nemo
              facere exercitationem dolore aperiam, amet iste. Voluptate
            </p>
            <blockquote>- Rakesh Yadav</blockquote>
          </div>
          <div className={messageStyles.teacher_pic}>
            <LazyImage
              placeholder={
                "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              }
              uri={
                "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              }
              render={(src, style) => (
                <img src={src} style={style} className={messageStyles.img} />
              )}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Message;
