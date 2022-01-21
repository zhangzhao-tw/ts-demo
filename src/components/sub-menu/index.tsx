import React from 'react';
import MenuItem, {MenuItemProps} from "../menu-item";

import styles from "./index.module.scss";

export interface SubMenuProps {
    menuItems: MenuItemProps[];
}

const SubMenu = (props: SubMenuProps) => {
    const {menuItems} = props;
    console.log(menuItems)
    return (
        <ul className={styles["sub-menu"]}>
            {menuItems.map((item: MenuItemProps, index) => {
                return (
                    <li key={index} className={styles["sub-menu-item"]}>
                        <MenuItem {...item} />
                    </li>
                )
            })}
        </ul>
    )
}

SubMenu.defaultProps = {
    menuItems: []
}

export default SubMenu;