import React from "react";
import styles from "./NavbarLogo.module.css";

import Logo from "../../../../public/globe.svg";

interface NavbarLogoProps {}

export const NavbarLogo: React.FC<NavbarLogoProps> = (
    props: NavbarLogoProps
) => {
    return (
        <div className={styles.NavbarLogo}>
            <img src={Logo} alt="Logo" />
        </div>
    );
};

export default NavbarLogo;
