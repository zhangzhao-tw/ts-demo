import React, { ReactElement } from "react";

interface OpenNewTabProp {
    href: string;
    [key: string]: any;
    children?: ReactElement;
}

const OpenNewTab = (props: OpenNewTabProp) => {
    const { href } = props;
    const isNotSupportBlank = true;

    const handleClick = () => {
        if (isNotSupportBlank) {
            window.open(href);
        }
    };

    return (
        <a
            rel="noreferrer"
            {...props}
            target="_blank"
            href={href}
            onClick={handleClick}
        >
            {props.children}
        </a>
    );
};

export default OpenNewTab;
