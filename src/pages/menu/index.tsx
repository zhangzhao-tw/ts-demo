import React from "react";

import Menu, {MenuProps} from "../../components/menu";
import MENUS from "./content";

import styles from "./index.module.scss";

const MenuPage = () => {

    const menuProps: MenuProps = {
        menuItems: MENUS
    }

    return (
        <div className={styles["layout-menu"]}>
            <Menu {...menuProps} />
        </div>
    );

}

export default MenuPage;