//#region imports
import React, { useState } from 'react';
import Header from './components/Header';
import Card from './components/Card';
import LottieSuccess from './components/LottieSuccess';
import Input from './components/Inputs';
import { isNotEmpty } from './shared/utility';
import { BsFillCheckCircleFill } from 'react-icons/bs';
//#endregion

//#region App
const App = () => {

   //#region state
   const [blockingStep2,setblockingStep2] = useState(true)
   const [blockingStep3,setBlockingStep3] = useState(true)
   const [stateSummary,setStateSummary] = useState({})
   const [inputFields, setInputFields] = useState([]);
   const [success,setSuccess] = useState(false);
   const [selectedValue,setSelectedValue] = useState()  
   // const [isPausedLottie1,setIsPausedLottie1] = useState(false)
   const [isPausedLottie2,setIsPausedLottie2] = useState(false)
   //#endregion

   //#region fun
   const onChangeSelect = (e) => {
      setStateSummary((prev) => ({
         ...prev,
         'step1': {
            [e.target.name] : e.target.value
         }
        
      }))

      const values = [];      
      Array.apply(null, { length: e.target.value }).map((e, index) => (
         values.push({ label: `Attendee ${++index} Name:`, name: `Attendee${index}Name`, value: '' })            
      ))
      setSuccess(false)
      setInputFields(values);
   }
   
   const onChangeInput = (index, e) => {     
      
      const values = [...inputFields];
      values[index].value = e.target.value
      setInputFields(values)

      setStateSummary((prev) => ({
         ...prev,
         'step1': { ...prev.step1 , names: values}
        
      }))

      if(inputFields.every(isNotEmpty)) {
         setSuccess(true) 
         setblockingStep2(false)
      }else {
         setSuccess(false)
         setblockingStep2(true)
      }

   }

   const onChangeCheck = (stepName, { target }) => {  
      setSelectedValue((prev) => ({
         ...prev,
         [target.name]: target.value
      }))

      setStateSummary((prev) => ({
         ...prev,
         [stepName]: { ...prev[stepName] , [target.name]: target.value}
        
      }))

      if(target.name === 'companyName' && target.value === 'No') delete stateSummary.step2?.company
      if(target.name === 'accommodations' && target.value !== '') {
         setBlockingStep3(false)
         setTimeout(() => setIsPausedLottie2(true), 2000)
      } 

   }
   //#endregion
   console.log(stateSummary)
   //#region return
   return (      
      <section className="hero is-dark is-fullheight">
         <Header />
         <div className="hero-body">
               <div className="columns has-hero-style">
                  <Card blocking={false} stepName='Step 1' cardColor='green-light'>
                    
                     <Input name='numPeople' 
                            inputType='dropdown' 
                            label='How many people will be attending?' 
                            options={5} 
                            changed={onChangeSelect} /> 
                     
                     { stateSummary.step1?.numPeople &&  <span className="has-text-weight-bold mt-4" style={{float:'left'}}>
                        Please provide full names:
                     </span>}

                     <div className='mt-3'><br />
                        {inputFields.map((inputField, index) => (
                           <div className='mt-2' key={`inputField_${index}`}>
                              <Input name={`${inputField.name}`} 
                                    className="input is-small ml-2" 
                                    inputType="text" 
                                    value={inputField.value}
                                    changed={(e) => onChangeInput(index, e)}
                                    label={`${inputField.label}`} />
                           </div>
                        ))}
                     </div>

                     { success && <BsFillCheckCircleFill className='mt-6 icon-style'/>}
                  </Card>
               
                  <Card blocking={blockingStep2} stepName='Step 2' cardColor='blue-light'>                     
                     <span className='is-italic' style={{float:'left'}}>
                        Would you like your company name on your badges?

                        <div className="control">
                              <Input inputType="radio" 
                                     value='Yes'                                     
                                     name='companyName' 
                                     label='Yes'
                                     checked={'Yes' === selectedValue?.companyName}
                                     changed={(e) => onChangeCheck ('step2', e)} />
                                 
                              <Input inputType="radio" 
                                     value='No'
                                     label='No'
                                     name='companyName'
                                     checked={'No' === selectedValue?.companyName}
                                     changed={(e) => onChangeCheck ('step2', e)} />
                        </div>
                        {  'Yes' === selectedValue?.companyName &&
                                 <Input className="input is-small ml-2"
                                        inputType="text" 
                                        name='company' 
                                        value={selectedValue?.company ?? ''}
                                        changed={(e) => onChangeCheck ('step2', e)} 
                                        label="Company Name:" />
                        }
                     </span>

                     <span className='mt-4' className='is-italic' style={{float:'left'}}>
                        Will anyone in your group require special accommodations?
                        <div className="control">
                                 <Input inputType="radio" 
                                     value='Yes'                                     
                                     name='accommodations' 
                                     label='Yes'
                                     checked={'Yes' === selectedValue?.accommodations}
                                     changed={(e) => onChangeCheck ('step2', e)} />
                                 
                                  <Input inputType="radio" 
                                     value='No'
                                     label='No'
                                     name='accommodations'
                                     checked={'No' === selectedValue?.accommodations}
                                     changed={(e) => onChangeCheck ('step2', e)} />
                           </div>
                           
                        { 'No' === selectedValue?.accommodations && <LottieSuccess paused={isPausedLottie2}/> }
                     </span>

                  </Card>
                  
                  <Card blocking={blockingStep3} stepName='Step 3' cardColor='brown-light'>
                     <Input name='rock' 
                            inputType='checkbox' 
                            value={selectedValue?.rock}
                            checked={'on' === selectedValue?.rock}
                            changed={(e) => onChangeCheck ('step3', e)} 
                            label='Are you ready to rock?'  />   
                     <button className="button is-small mt-4 has-text-left"  style={{float: 'left'}} onClick={() => console.log(stateSummary)}>Complete Registration</button>
                  </Card>                  
                              
               </div>
         </div>
      </section>
         
   );
   //#endregion
   
};
export default App;
//#endregion