import React from "react";

import Menu, {MenuProps} from "../../components/menu";
import MENUS from "./content";

const MenuPage = () => {

    const menuProps: MenuProps = {
        menuItems: MENUS
    }

    return (
        <>
            <Menu {...menuProps} />
        </>
    );

}

export default MenuPage;