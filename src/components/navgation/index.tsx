import React, {useState} from "react";

import WithJumpHoc from "../../hoc/jump-hoc";

import styles from "./index.module.scss";

import classNames from "classnames/bind";

const cx = classNames.bind(styles);


export interface NavigationsProps {
    initialIndex?: number;
    navigations: Navigation[];
}

interface Navigation {
    desc: string;
    url: string
}

const Navigations = (props: NavigationsProps) => {

    const {initialIndex, navigations} = props;
    const [currentNavigationIndex, setCurrentNavigationIndex] = useState(initialIndex)

    const handleClick = (currentIndex: number) => {
        setCurrentNavigationIndex(currentIndex);
    };


    return (
        <ul className={styles["navigation"]}>
            {navigations.map(
                (navigation: Navigation, index: number) => {

                    const NavigationLink = () => {
                        return (
                            <span className={styles["title"]}>{navigation.desc}</span>
                        );
                    }

                    const WithJumpHocNavigationLinkLink = WithJumpHoc({
                        WrappedComponent: NavigationLink,
                        jumpUrl: navigation.url,
                    });

                    return (
                        <li
                            key={index}
                            className={cx("group", {"focus": index === currentNavigationIndex})}
                            onClick={() => {handleClick(index)}}
                        >
                            <WithJumpHocNavigationLinkLink />
                        </li>
                    )
                })}
        </ul>


    );
}

Navigations.defaultProps = {
    initialIndex: -1,
    navigations: [],
}

export default Navigations;