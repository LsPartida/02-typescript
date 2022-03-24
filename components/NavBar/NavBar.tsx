import { ActiveLink } from "./ActiveLink";
import styles from "./NavBar.module.css";
const NavBar = () => {
  const menuItems = [
    {
      text: "Home",
      href: "/",
    },
    {
      text: "About",
      href: "/about",
    },
    {
      text: "Contact",
      href: "/contact",
    },
    {
      text: "Pricing",
      href: "/pricing",
    },
  ];
  return (
    <nav className={styles.menu}>
      {menuItems.map((item) => {
        return (
          <ActiveLink href={item.href} key={item.text}>
            {item.text}
          </ActiveLink>
        );
      })}
    </nav>
  );
};

export default NavBar;
