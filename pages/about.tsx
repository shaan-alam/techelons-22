import { Navbar, ProfileCard } from "../components";
import aboutStyles from "../styles/About.module.scss";
import { motion } from "framer-motion";
import { pageTransition } from "../animations";

const About = () => {
  return (
    <>
      <Navbar />
      <motion.section
        className={aboutStyles.container}
        variants={pageTransition}
        initial="hidden"
        animate="visible"
      >
        <h1 className="text-white font-montserrat text-3xl text-center uppercase font-bold mb-8">
          About Us
        </h1>
        <div className="block md:grid grid-cols-2 gap-2">
          <div className="websters flex justify-center">
            <img
              src="./images/websters_logo.png"
              alt="Websters"
              className="w-full h-full object-contain"
            />
          </div>
          <div className="intro text-white text-center md:text-left font-josefin mt-8">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequatur itaque numquam nobis expedita dignissimos tenetur
              provident reiciendis illum autem, minus ipsum consequuntur, amet
              error et omnis iste dolores culpa facere.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
              molestiae doloribus similique, dignissimos autem odio quo, nisi
              facilis a! Autem quae veritatis aut, blanditiis maxime
              reprehenderit praesentium? Nesciunt.
            </p>
          </div>
        </div>
      </motion.section>
      <section className={aboutStyles.meet_team}>
        <h1 className="text-white font-montserrat text-3xl text-center uppercase font-bold mb-8">
          Meet Our Team <span role="emoji">♥</span>
        </h1>
        <div className={aboutStyles.president}>
          <ProfileCard
            name="Prince Sharma"
            designation="President"
            imageURL="./images/prince.png"
          />
        </div>
        <div className={aboutStyles.vice_presidents}>
          <ProfileCard
            name="Jannt Chehal"
            designation="Vice President"
            imageURL="./images/prince.png"
          />
          <ProfileCard
            name="Harsh Shekhawat"
            designation="Vice President"
            imageURL="./images/prince.png"
          />
        </div>
        <div className={aboutStyles.office_bearers}>
          <ProfileCard
            name="Kumar Amrendram"
            designation="Secretary"
            imageURL="./images/prince.png"
          />
          <ProfileCard
            name="Saloni Singh"
            designation="Joint Secretary"
            imageURL="./images/prince.png"
          />
          <ProfileCard
            name="Vaibhav Bhardwaj"
            designation="Treasurer"
            imageURL="./images/prince.png"
          />
        </div>
        <div className={aboutStyles.core_members}>
          <ProfileCard
            name="Shaan Alam"
            designation="Core Member"
            imageURL="./images/prince.png"
          />
          <ProfileCard
            name="Lata Yadav"
            designation="Core Member"
            imageURL="./images/prince.png"
          />
          <ProfileCard
            name="Dipanshu Lohani"
            designation="Core Member"
            imageURL="./images/prince.png"
          />
          <ProfileCard
            name="Navin"
            designation="Core Member"
            imageURL="./images/prince.png"
          />
          <ProfileCard
            name="Rohit Kumar"
            designation="Core Member"
            imageURL="./images/prince.png"
          />
          <ProfileCard
            name="Vani Malhotra"
            designation="Core Member"
            imageURL="./images/prince.png"
          />
          <ProfileCard
            name="Kushagrah"
            designation="Core Member"
            imageURL="./images/prince.png"
          />
          <ProfileCard
            name="Ajay Meena"
            designation="Core Member"
            imageURL="./images/prince.png"
          />
          <ProfileCard
            name="Ravi Yadav"
            designation="Core Member"
            imageURL="./images/prince.png"
          />
          <ProfileCard
            name="Neelansh Aggarwal"
            designation="Core Member"
            imageURL="./images/prince.png"
          />
          <ProfileCard
            name="Shweta Yadav"
            designation="Core Member"
            imageURL="./images/prince.png"
          />
        </div>
      </section>
    </>
  );
};

export default About;
