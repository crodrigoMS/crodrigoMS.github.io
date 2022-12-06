import React from "react";
import styles from "./Navbar.module.css";

import NavbarLogo from "./NavbarLogo/NavbarLogo";
import NavbarIcon from "./NavbarButton/NavbarButton";

interface NavbarProps {}

export const Navbar: React.FC<NavbarProps> = () => {
    return (
        <div className={styles.Navbar}>
            <div className={styles.logoWrapper}>
                <NavbarLogo />
            </div>
            <div className={styles.ButtonWrapper}>
                <NavbarIcon text={"Home"} />
                <NavbarIcon text={"About"} />
                <NavbarIcon text={"Contact"} />
            </div>
        </div>
    );
};

export default Navbar;
