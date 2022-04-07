import messageStyles from "./Message.module.scss";

const Message = () => {
  return (
    <section className={messageStyles.message_section}>
      <div className={messageStyles.container}>
        <h1>Message from Teacher Incharge</h1>
        <div className={messageStyles.grid}>
          <div className={messageStyles.teacher_pic}>
            <img
              src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Preeti Sharma"
              className={messageStyles.img}
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
        <div className={messageStyles.grid}>
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
            <img
              src="https://images.pexels.com/photos/1009874/pexels-photo-1009874.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Rakesh Yadav"
              className={messageStyles.img}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Message;
