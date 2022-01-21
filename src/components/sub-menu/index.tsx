import React from 'react';
import MenuItem, {MenuItemProps} from "../menu-item";

import styles from "./index.module.scss";

import classNames from "classnames/bind";

const cx = classNames.bind(styles);

export interface SubMenuProps {
    menuItems: MenuItemProps[];
    currentMenuIndex? : number;
}

const SubMenu = (props: SubMenuProps) => {
    const {menuItems, currentMenuIndex} = props;
    return (
        <ul className={styles["sub-menu"]}>
            {menuItems.map((item: MenuItemProps, index) => {
                return (
                    <li key={index} className={cx(styles["item"], {"focus": index == currentMenuIndex}) }>
                        <MenuItem {...item} />
                    </li>
                )
            })}
        </ul>
    )
}

SubMenu.defaultProps = {
    menuItems: [],
    currentMenuIndex: 1
}

export default SubMenu;