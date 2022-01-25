import React, {useState} from "react";

import WithJumpHoc from "../../hoc/jump-hoc";

import styles from "./index.module.scss";

import classNames from "classnames/bind";

const cx = classNames.bind(styles);


export interface ChannelProps {
    initialIndex?: number;
    channelItems: ChannelItem[];
}

interface ChannelItem {
    title: string;
    url: string
}

const Channel = (props: ChannelProps) => {

    const {initialIndex, channelItems} = props;
    const [currentChannelIndex, setCurrentChannelIndex] = useState(initialIndex)

    const handleClick = (currentIndex: number) => {
        setCurrentChannelIndex(currentIndex);
    };


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
                            className={cx("group", {"focus": index === currentChannelIndex})}
                            onClick={() => {handleClick(index)}}
                        >
                            <WithJumpHocChannelLink />
                        </li>
                    )
                })}
        </ul>
    );
}

Channel.defaultProps = {
    initialIndex: -1,
    channelItems: [],
}

export default Channel;