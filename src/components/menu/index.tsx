import React, {useState} from 'react';
import MenuItem, {MenuItemProps} from "../menu-item";

import styles from "./index.module.scss";
import WithJumpHoc from "../../hoc/jump-hoc";

export interface MenuProps {
    menuItems: MenuItemProps[];
    initialMenuIndex? : number;
}

const Menu = (props: MenuProps) => {
    const {menuItems, initialMenuIndex} = props;
    const [currentMenuIndex, setCurrentMenuIndex] = useState(initialMenuIndex)
    const handleClick = (currentIndex: number) => {
        setCurrentMenuIndex(currentIndex);
    };

    return (
        <ul className={styles["menu"]}>
            {menuItems.map((menuItem: MenuItemProps, index) => {
                const WithJumpHocMenuItem = WithJumpHoc({
                    WrappedComponent: MenuItem,
                    jumpUrl: menuItem.url,
                })
                menuItem.isFocus = currentMenuIndex === index;

                return (
                    <li
                        key={index}
                        className={styles["item"]}
                        onClick={() => handleClick(index)}
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
    initialMenuIndex: 0
}

export default Menu;