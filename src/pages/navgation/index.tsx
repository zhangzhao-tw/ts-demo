import React from "react";

import Navigation, {NavigationsProps} from "../../components/navgation";
import NAVIGATIONS from "./content";

const NavigationsPage = () => {
    const navigationProps:NavigationsProps = {
        navigations: NAVIGATIONS
    }

    return (
      <div>
          <Navigation {...navigationProps}/>
      </div>
    );
}

export default NavigationsPage;