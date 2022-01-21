import React, {useState} from 'react';
import MenuItem, {MenuItemProps} from "../menu-item";

import styles from "./index.module.scss";

export interface SubMenuProps {
    menuItems: MenuItemProps[];
    initialMenuIndex? : number;
}

const SubMenu = (props: SubMenuProps) => {
    const {menuItems, initialMenuIndex} = props;
    const [currentMenuIndex, setCurrentMenuIndex] = useState(initialMenuIndex)
    const handleClick = (currentIndex: number) => {
        setCurrentMenuIndex(currentIndex);
    };

    return (
        <ul className={styles["sub-menu"]}>
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

SubMenu.defaultProps = {
    menuItems: [],
    initialMenuIndex: 0
}

export default SubMenu;