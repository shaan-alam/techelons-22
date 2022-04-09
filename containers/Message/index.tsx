import messageStyles from "./Message.module.scss";
import LazyImage from "react-lazy-blur-image";
import { Parallax } from "react-scroll-parallax";

const Message = () => {
  return (
    <section className={messageStyles.message_section}>
      <div className={messageStyles.container}>
        <h1>Message from Teacher Incharge</h1>
        <Parallax
          speed={25}
          translateX={[-10, 0]}
          className={messageStyles.parallax_container}
        >
          <h2>MESSAGE FROM TEACHERS</h2>
        </Parallax>
        <div className={messageStyles.grid}>
          <div className={messageStyles.teacher_pic}>
            <Parallax speed={0} scale={[0.8, 1, "ease"]}>
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
            </Parallax>
          </div>
          <div className={messageStyles.message}>
            <Parallax speed={5} opacity={[0.3, 1, "ease"]}>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Tempore doloremque ab vitae, eos maiores architecto asperiores
                odit nemo facere exercitationem dolore aperiam, amet iste.
                Voluptate suscipit aspernatur tempora atque aliquam.
              </p>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Tempore doloremque ab vitae, eos maiores architecto asperiores
                odit nemo facere exercitationem dolore aperiam, amet iste.
                Voluptate
              </p>
              <blockquote>- Preeti Sharma</blockquote>
            </Parallax>
          </div>
        </div>
        <div className={messageStyles.grid}>
          <div className={messageStyles.message}>
            <Parallax speed={-5}>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Tempore doloremque ab vitae, eos maiores architecto asperiores
                odit nemo facere exercitationem dolore aperiam, amet iste.
                Voluptate suscipit aspernatur tempora atque aliquam.
              </p>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Tempore doloremque ab vitae, eos maiores architecto asperiores
                odit nemo facere exercitationem dolore aperiam, amet iste.
                Voluptate
              </p>
              <blockquote>- Rakesh Yadav</blockquote>
            </Parallax>
          </div>
          <div className={messageStyles.teacher_pic}>
            <Parallax speed={-5} scale={[0.8, 1, "ease"]}>
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
            </Parallax>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Message;
