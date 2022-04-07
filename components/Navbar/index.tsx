import NavbarStyles from "./Navbar.module.scss";

const Navbar = () => {
  return (
    <nav className={NavbarStyles.nav}>
      <div className={NavbarStyles.nav__container}>
        <div className={NavbarStyles.logo}>
          <h1 className="flex items-center justify-start">
            <img src="/images/logo.svg" alt="Techelons" className="w-32" />
          </h1>
        </div>
        <div className={NavbarStyles.nav__menu}>
          <ul>
            <li>Home</li>
            <li>Our Events</li>
            <li>About Us</li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
