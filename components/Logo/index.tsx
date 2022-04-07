import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

const Logo = () => {
  const imageVariants = {
    hidden: {
      pathLength: 0,
      opacity: 0,
      fill: "transparent",
    },
  };

  const svgLogoControls = useAnimation();

  const sequence = async () => {
    await svgLogoControls.start({ pathLength: 1, opacity: 1 }),
      await svgLogoControls.start({
        fill: "#fff",
        transition: { duration: 1, ease: "easeInOut" },
      });
  };

  useEffect(() => {
    sequence();
  }, [sequence]);

  return (
    <div className="hidden lg:block sm:w-full">
      <svg
        width="226"
        height="175"
        viewBox="0 0 226 175"
        fill="transparent"
        xmlns="http://www.w3.org/2000/svg"
        className="w-[80%] ml-32 mt-44 relative -z-10"
      >
        <motion.path
          d="M75.6349 72.7741V74.2741H77.1349H98.8464V168.244L2.59779 1.5H222.922L126.423 168.679V74.2741H148.135H149.635V72.7741V47.5089V46.0089H148.135H77.1349H75.6349V47.5089V72.7741Z"
          stroke="white"
          strokeWidth="3"
          variants={imageVariants}
          initial="hidden"
          animate={svgLogoControls}
          transition={{ duration: 3, delay: 1.2, ease: "easeInOut" }}
        />
      </svg>
    </div>
  );
};

export default Logo;
