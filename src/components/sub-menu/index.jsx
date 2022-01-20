import React from "react";
import styles from "./index.module.scss"

const SubMenuWithIcon = () => {

    return (
        <div className={styles["submenu"]}>
            <div>icon</div>
            <div className={styles["text"]}>
                <span className={styles["text-title"]}>title</span>
                <span className={styles["text-desc"]}>description</span>
            </div>
        </div>
    )
}

export default SubMenuWithIcon;