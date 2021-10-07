//#region imports
import React from 'react';
import Lottie from 'react-lottie';
import animationData from '../assets/lotties/success';
//#endregion

//#region lottie success component
const LottieSuccess = ({paused}) => {

   //#region variable
   const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
    };
   //#endregion

   //#region return
   return (
            <Lottie 
            options={defaultOptions}
            height={140}
            width={140}
            isPaused={paused}
            />
   );
   //#endregion
   
};
export default LottieSuccess;
//#endregion