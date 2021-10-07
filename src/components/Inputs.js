//#region imports
import React from "react";
//#endregion

//#region Input component
const Input = ({label, name, className, inputType, value, changed, checked, options , ...reset}) => {

    let inputElement = null;
  
    switch (inputType) {
      case "text":
        inputElement = (
          <React.Fragment>  
            <span className='is-italic has-text-left' >{label}</span>
            <input name={name} className={className} type="text" value={value}
            onChange={changed}  style={{width: '50%'}} {...reset}/>
          </React.Fragment>
        );
        break;

      case "dropdown":
            inputElement = (
                <span className='is-italic'>{label} 
                    <div className="select is-small ml-2">
                        <select name={name} onChange={changed} {...reset}>
                            <option>Please Choose</option>
                            {
                                Array.apply(null, { length: options }).map((e, i) => (
                                    <option key={i}>{++i}</option>
                                  ))
                            }
                        </select>
                    </div>
                </span>
            );
            break;  

      case "checkbox":
        inputElement = (
            <React.Fragment>
                <label className="checkbox is-italic has-text-left"  >
                    {label} 
                    <input name={name} type="checkbox" className='ml-2' onChange={changed} {...reset} />                           
                </label><br />
            </React.Fragment>);
        break;
     
      case "radio":
            inputElement = (
                <React.Fragment>
                    <label className="radio is-italic">
                        <input type="radio" value={value}
                        checked={checked}
                        name={name}
                        onChange={changed} />
                        {label}
                    </label>
                    
                </React.Fragment>);
            break;
         
      default:
        inputElement = (
          <React.Fragment>  
            <span className='is-italic has-text-left' >{label}</span>
            <input name={name} className={className} type="text" value={value}
            onChange={changed}  style={{width: '50%'}} {...reset}/>
          </React.Fragment>
        );
    }
    return inputElement;
  };
  
  export default Input;
  //#endregion