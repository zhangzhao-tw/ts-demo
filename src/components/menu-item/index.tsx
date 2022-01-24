import React from "react";

import Icon from "../icon";

import styles from "./index.module.scss";

import classNames from "classnames/bind";

const cx = classNames.bind(styles);

export interface MenuItemProps {
    title: string;
    description: string;
    url: string;
    isFocus? : boolean;
}

const MenuItem = (props: MenuItemProps) => {
    const {title, description, isFocus} = props
    return (
        <div className={cx(styles["menu-item"], {"focus": isFocus})}>
            <Icon />
            <div className={styles["text"]}>
                <span className={styles["title"]}>{title}</span>
                <span className={styles["desc"]}>{description}</span>
            </div>
        </div>
    )
}

MenuItem.defaultProps = {
    title:"",
    description:"",
    isFocus: false
}

export default MenuItem;