import React from 'react';
import MenuItem, {MenuItemProps} from "../menu-item";

import styles from "./index.module.scss";
import WithJumpHoc from "../../hoc/jump-hoc";

export interface MenuProps {
    menuItems: MenuItemProps[];
    focusIndex? : number;
}

const Menu = (props: MenuProps) => {
    const {menuItems, focusIndex} = props;

    return (
        <ul className={styles["menu"]}>
            {menuItems.map((menuItem: MenuItemProps, index) => {
                const WithJumpHocMenuItem = WithJumpHoc({
                    WrappedComponent: MenuItem,
                    jumpUrl: menuItem.url,
                })
                menuItem.isFocus = index === focusIndex;

                return (
                    <li
                        key={index}
                        className={styles["item"]}
                    >
                        <WithJumpHocMenuItem {...menuItem}/>
                    </li>
                )
            })}
        </ul>
    )
}

Menu.defaultProps = {
    menuItems: [],
    focusIndex: 1
}

export default Menu;