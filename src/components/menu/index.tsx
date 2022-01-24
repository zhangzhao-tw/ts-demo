import React, {useState} from 'react';
import MenuItem, {MenuItemProps} from "../menu-item";

import styles from "./index.module.scss";

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
            {menuItems.map((item: MenuItemProps, index) => {
                return (
                    <li
                        key={index}
                        className={styles["item"]}
                        onClick={() => handleClick(index)}
                    >
                        <MenuItem {...item} isFocus={currentMenuIndex === index}/>
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