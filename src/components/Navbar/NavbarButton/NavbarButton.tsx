import React from "react";
import styles from "./NavbarButton.module.css";

interface NavbarIconProps {
    text: string;
    link?: string;
}

export const NavbarIcon: React.FC<NavbarIconProps> = (
    props: NavbarIconProps
) => {
    return (
        <div className={styles.NavbarIcon}>
            <div className={styles.NavbarIconButton}>{props.text}</div>
        </div>
    );
};

export default NavbarIcon;
