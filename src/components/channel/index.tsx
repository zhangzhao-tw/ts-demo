import React from "react";

import WithJumpHoc from "../../hoc/jump-hoc";

import styles from "./index.module.scss";

import classNames from "classnames/bind";

const cx = classNames.bind(styles);


export interface ChannelProps {
    focusIndex?: number;
    channelItems: ChannelItem[];
}

interface ChannelItem {
    title: string;
    url: string
}

const Channel = (props: ChannelProps) => {

    const {focusIndex, channelItems} = props;


    return (
        <ul className={styles["channel"]}>
            {channelItems.map(
                (channelItem: ChannelItem, index: number) => {
                    const ChannelLink = () => {
                        return (
                            <span className={styles["title"]}>{channelItem.title}</span>
                        );
                    }

                    const WithJumpHocChannelLink = WithJumpHoc({
                        WrappedComponent: ChannelLink,
                        jumpUrl: channelItem.url,
                    });

                    return (
                        <li
                            key={index}
                            className={cx("group", {"focus": index === focusIndex})}
                        >
                            <WithJumpHocChannelLink />
                        </li>
                    )
                })}
        </ul>
    );
}

Channel.defaultProps = {
    focusIndex: -1,
    channelItems: [],
}

export default Channel;