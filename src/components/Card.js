//#region imports
import React from 'react';
import BlockUi from 'react-block-ui';
import 'react-block-ui/style.css';
//#endregion

//#region card component
const Card = ({blocking, stepName, cardColor, children}) => {
  
   //#region return
   return (
            <div className="column">
               <BlockUi tag="div" blocking={blocking}>
                  <span className="tag has-text-weight-bold is-white ml-4">{stepName}</span>
                  <div className={`card has-background-${cardColor} has-card-style`} style={{borderRadius: 'unset'}}>
                     <div className="card-content">
                        <div className="content">
                           {children}
                        </div>
                        <span className='mt-6'><div className="control"></div></span>
                     </div>
                  </div>
               </BlockUi>
            </div>
   );
   //#endregion
   
};
export default Card;
//#endregion