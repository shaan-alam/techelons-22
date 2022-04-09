import { useState } from "react";
import NavbarStyles from "./Navbar.module.scss";
import { motion, useAnimation } from "framer-motion";
import { logoVariant, navVariant } from "./constants";
import Link from "next/link";

const Navbar = () => {
  const [navActive, setNavActive] = useState<boolean>(false);
  const navControls = useAnimation();
  const menuListControls = useAnimation();

  const toggleNav = () => {
    setNavActive(!navActive);

    if (!navActive) {
      navControls.start({
        scaleY: 1,
        transition: { duration: 0.3, ease: [1, 2, 3, 4] },
      });
      menuListControls.start({
        opacity: 1,
        transition: { delay: 1, ease: "easeIn" },
      });
    } else {
      menuListControls.start({
        opacity: 0,
        transition: { ease: "easeIn" },
      });
      navControls.start({ scaleY: 0, transition: { delay: 0.5 } });
    }
  };

  return (
    <motion.nav
      className={NavbarStyles.nav}
      variants={navVariant}
      initial="hidden"
      animate="visible"
    >
      <div className={NavbarStyles.nav__container}>
        <Link href="/">
          <motion.div
            className={NavbarStyles.logo}
            variants={logoVariant}
            initial="hidden"
            animate="visible"
          >
            <img
              src={`./images/${
                !navActive ? "small_logo.svg" : "logo_black.svg"
              }`}
              alt="Techelons"
              className="w-8 h-8"
            />
            <h1
              className={`hidden sm:block font-montserrat font-bold ${
                navActive ? "text-black" : "text-white"
              }`}
            >
              TECHELONS
            </h1>
          </motion.div>
        </Link>
        <div className={NavbarStyles.nav__menu}>
          <div
            className={`${NavbarStyles.nav_toggler} ${
              navActive ? NavbarStyles.active : ""
            }`}
            onClick={toggleNav}
          >
            <span></span>
            <span></span>
          </div>
          <motion.div
            initial={{ scaleY: 0 }}
            animate={navControls}
            className={`${NavbarStyles.nav__menu_bg} ${
              navActive ? NavbarStyles.active : ""
            }`}
          ></motion.div>
          <motion.ul
            className={`${NavbarStyles.nav__menu_list} ${
              navActive ? NavbarStyles.active : ""
            }`}
            initial={{ opacity: 1 }}
            animate={menuListControls}
          >
            <li>
              <Link href="/">
                <a>Home</a>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <a>About Us</a>
              </Link>
            </li>
          </motion.ul>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
