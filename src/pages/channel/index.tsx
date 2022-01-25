import React from "react";

import Channel, {ChannelProps} from "../../components/channel";
import CHANNELS from "./content";

const ChannelPage = () => {
    const channelProps:ChannelProps = {
        channelItems: CHANNELS
    }

    return (
      <div>
          <Channel {...channelProps}/>
      </div>
    );
}

export default ChannelPage;