import React from "react";

import Icon from "../icon";

import styles from "./index.module.scss";

export interface MenuItemProps {
    title: string;
    description: string;
}

const MenuItem = (props: MenuItemProps) => {
    const {title, description} = props
    return (
        <div className={styles["menu-item"]}>
            <Icon />
            <div className={styles["text"]}>
                <span className={styles["text-title"]}>{title}</span>
                <span className={styles["text-desc"]}>{description}</span>
            </div>
        </div>
    )
}

export default MenuItem;