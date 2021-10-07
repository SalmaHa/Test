//#region imports
import React from 'react';
import BlockUi from 'react-block-ui';
import 'react-block-ui/style.css';
//#endregion

//#region header component
const Header = () => {
  
   //#region return
   return (
        <div className="hero-head">
            <h1 className="title has-text-weight-bold is-size-4-touch mt-6 ml-6">
            Seminar <span className='has-text-info'>Registration</span>
            </h1>
         </div>
   );
   //#endregion
   
};
export default Header;
//#endregion