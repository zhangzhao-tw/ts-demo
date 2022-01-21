import React from "react";

import SubMenu, {SubMenuProps} from "../../components/sub-menu";
import SUB_MENUS from "./content";

const SubMenuPage = () => {

    const subMenuProps: SubMenuProps = {
        menuItems: SUB_MENUS
    }

    return (
        <>
            <SubMenu {...subMenuProps} />
        </>
    );

}

export default SubMenuPage;