
import { Pinwheel } from '@uiball/loaders'
import React from "react";

export const Loader = () => {
  return (
    <div className="container-loader">

<Pinwheel 
 size={50}
 lineWeight={10.5}
 speed={1} 
 color="white" 
/>
    </div>
  );
};
