import React from "react";

import Link from "next/link";

import OpenNewTab from "../../components/open-new-tab";

export interface WithJumpHocProps {
    WrappedComponent: any,
    jumpUrl: string,
}

enum JUMP_TARGET {
    SELF = "_self",
    BLANK = "_blank",
}

const WithJumpHoc = (props: WithJumpHocProps) => {
    const {WrappedComponent, jumpUrl} = props
    // calculated by jumpUrl
    const target = jumpUrl.indexOf("baidu") === -1 ? JUMP_TARGET.BLANK : JUMP_TARGET.SELF;
    return class extends React.Component {
        render() {
            return target === JUMP_TARGET.SELF ? (
                <Link href={jumpUrl} passHref>
                    <a target={target}>
                        <WrappedComponent {...this.props}/>
                    </a>
                </Link>
                ) : (
                    <OpenNewTab href={jumpUrl} >
                        <WrappedComponent {...this.props}/>
                    </OpenNewTab>
                )
        }
    }
}


export default WithJumpHoc;