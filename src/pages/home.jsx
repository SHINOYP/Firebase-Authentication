import React,{useRef} from 'react';
import { useReactToPrint } from "react-to-print";
import Secondpage from "../assets/img2.jpg"
import  './homeStyle.css'
import LocalPrintshopIcon from '@mui/icons-material/LocalPrintshop';
import Logo from '../assets/logo.svg'
const Home = () => {  
  const componentRef = useRef();

  const handlePrint = useReactToPrint({
    content: () => componentRef.current, 
    
    
  });


  return (
  <div className='main'>  
   
    <button  onClick={handlePrint} className="print__button"><LocalPrintshopIcon sx={{marginRight:'12px'}}/>  Print </button> 
     <div ref={componentRef}>
      <div className='main-file'>
      <img src={Logo} style={{width:'150px'}}/>
        <div className='table'>
          <div className='first-row'>
            <div className='fr-column-one'>
              <div className='fr-column-sec-start'>
                <label>Renter Name</label>
              </div>
              <input type='text' maxLength='22' className='fr-column-sec-middle'>
                
              </input>
              <div className='fr-column-sec-end'>
                    
              </div>
              </div>
            <div className='fr-column-two'>
              <div className='fr-column-sec-start'>
              <label>Second Driver</label>
              </div>
              <input type='text' maxLength='22' className='fr-column-sec-middle'>

              </input>
              <div className='fr-column-sec-end'>
                  
              </div>
            </div>
          </div>
          <input type='text' className='first-row'>

          </input>
          <div className='second-row'>
            <div className='first-row'>
              <div className='fr-column-one'>
                <div className='fr-column-sec-start'>
                  <label>Nationality</label>
                </div>
                <input type='text' maxLength='22' className='fr-column-sec-middle'>
                    
                </input>
                <div className='fr-column-sec-end'>

                </div>
                </div>
              <div className='fr-column-two'>
                <div className='fr-column-sec-start'>
                <label>Nationality</label>
                </div>
                <input type='text' maxLength='22' className='fr-column-sec-middle'>

                </input>
                <div className='fr-column-sec-end'>

                </div>
              </div>
           </div>
          </div>
          <div className='second-row'>
            <div className='first-row'>
              <div className='fr-column-one'>
                <div className='fr-column-sec-start'>
                  <label>Driver Lic.no</label>
                </div>
                <input type='text' maxLength='22' className='fr-column-sec-middle'>

                </input>
                <div className='fr-column-sec-end'>

                </div>
                </div>
              <div className='fr-column-two'>
                <div className='fr-column-sec-start'>
                <label>Driver Lic.no</label>
                </div>
                <input type='text' maxLength='22' className='fr-column-sec-middle'>

                </input>
                <div className='fr-column-sec-end'>

                </div>
              </div>
           </div>
          </div>
          <div className='second-row'>
            <div className='first-row'>
              <div className='fr-column-one'>
                <div className='fr-column-sec-start'>
                  <label>Issue Place</label>
                </div>
                <input type='text'  className='fr-column-sec-middle'>
 
                </input>
                <div className='fr-column-sec-end'>

                </div>
                </div>
              <div className='fr-column-two'>
                <div className='fr-column-sec-start'>
                <label>Issue Place</label>
                </div>
                <input type='text'maxLength='22'  className='fr-column-sec-middle'>

                </input>
                <div className='fr-column-sec-end'>

                </div>
              </div>
           </div>
          </div>
          <div className='second-row'>
            <div className='first-row'>
              <div className='fr-column-one'>
                <div className='fr-column-sec-start'>
                  <label>Expiry Date</label>
                </div>
                <input type='text' maxLength='22' className='fr-column-sec-middle'>

                </input>
                <div className='fr-column-sec-end'>

                </div>
                </div>
              <div className='fr-column-two'>
                <div className='fr-column-sec-start'>
                <label>Expiry Date</label>
                </div>
                <input type='text' maxLength='22'  className='fr-column-sec-middle'>

                </input>
                <div className='fr-column-sec-end'>

                </div>
              </div>
           </div>
          </div>
          <div className='second-row'>
            <div className='first-row'>
              <div className='fr-column-one'>
                <div className='fr-column-sec-start'>
                  <label>Passport/CPR</label>
                </div>
                <input type='text' maxLength='22' className='fr-column-sec-middle'>

                </input>
                <div className='fr-column-sec-end'>

                </div>
                </div>
              <div className='fr-column-two'>
                <div className='fr-column-sec-start'>
                <label>Passport/CPR</label>
                </div>
                <input type='text' maxLength='22' className='fr-column-sec-middle'>

                </input>
                <div className='fr-column-sec-end'>

                </div>
              </div>
           </div>
          </div>
          <div className='row-address'>
            <input type='text' className='ra-first-column'>
              
            </input>
            <input type='text' className='ra-second-column'>
              
            </input>
          </div>
          <div className='second-row'>
            <div className='first-row'>
              <div className='fr-column-one'>
                <div className='fr-column-sec-start'>
                  <label>Tel/Mob</label>
                </div>
                <input type='text' maxLength='15' className='fr-column-sec-middle'>

                </input>
                <div className='fr-column-sec-end'>

                </div>
                </div>
              <div className='fr-column-two'>
                <div className='fr-column-sec-start'>
                <label>Tel/Mob</label>
                </div>
                <input type='text'  maxLength='15' className='fr-column-sec-middle'>

                </input>
                <div className='fr-column-sec-end'>

                </div>
              </div>
           </div>
          </div>
          <div className='row-car'>
            <div className='rc-start-column'>
              <div className='rc-start-column-r1'>
            
              </div>
              <div  className='rc-start-column-r2'>
                    <div className='rc-start-column-r2-imggp'> 

                    </div>
                    <div className='rc-start-column-r2-txtgp'>
                      <div  className='checkbox'>
                        <div className='checkbox-txt'>
                          <small>spear Type</small>
                          <small>spear Type</small>
                        </div>
                        <input  type='checkbox' className='chk-box'/>
                      </div>
                      <div  className='checkbox'>
                        <div className='checkbox-txt'>
                          <small>spear Type</small>
                          <small>Jack & Tools</small>
                        </div>
                        <input type='checkbox' className='chk-box'/>
                      </div>
                      <div  className='checkbox'>
                        <div className='checkbox-txt'>
                          <small>spear Type</small>
                          <small>Documents</small>
                        </div>
                        <input type='checkbox'  className='chk-box'/>
                      </div>
                      <div  className='checkbox'>
                        <div className='checkbox-txt'>
                          <small>spear Type</small>
                          <small>Tax Disc</small>
                        </div>
                        <input type='checkbox' className='chk-box'/>
                      </div>
                      <div  className='checkbox'>
                        <div className='checkbox-txt'>
                          <small>spear Type</small>
                          <small >Radio/Antenna</small>
                        </div>
                        <input type='checkbox' className='chk-box'/>
                      </div>
                      <div  className='checkbox'>
                        <div className='checkbox-txt'>
                          <small>spear Type</small>
                          <small >No.of Wheel cars</small>
                        </div>
                        <input type='checkbox' className='chk-box'/>
                      </div>
                    </div>
              </div>
            </div>
            <div className='rc-middle-column'>
              <div className='rc-middle-column-r1'>

              </div>
              <div  className='rc-middle-column-r2'>
                  <div className='rc-middle-column-r2-r1'>
                    <div className='rc-middle-column-r2-r1-start'>
                         <label>Car Type</label>
                    </div>
                    <input type='text'  maxLength='15' style={{fontSize:'15px'}}  className='rc-middle-column-r2-r1-middle'>

                    </input>
                    <div className='rc-middle-column-r2-r1-end'>

                    </div>
                  </div>
                  <div className='rc-middle-column-r2-r1'>
                    <div className='rc-middle-column-r2-r1-start'>
                       <label>Reg. no.</label>
                    </div>
                    <input type='text' maxLength='15' style={{fontSize:'15px'}} className='rc-middle-column-r2-r1-middle'>

                    </input>
                    <div className='rc-middle-column-r2-r1-end'>

                    </div>
                  </div>
                  <div className='rc-middle-column-r2-r1'>
                    <div className='rc-middle-column-r2-r1-start'>
                       <label>car color</label>
                    </div>
                    <input type='text' maxLength='15' style={{fontSize:'15px'}} className='rc-middle-column-r2-r1-middle'>

                    </input>
                    <div className='rc-middle-column-r2-r1-end'>

                    </div>
                  </div>
              </div>
              <div className='rc-middle-column-r3'>
                <label>Rates</label>
                <label> sd</label>
              </div>
              <div className='rc-middle-column-r4'>
                <div className='rc-middle-column-r4-hr1'>
                    <div className='rc-middle-column-r4-column'>
                      <label>Charges</label>
                    </div>
                    <div className='rc-middle-column-r4-column'>

                    </div>
                    <div className='rc-middle-column-r4-column'>

                    </div>
                    <div className='rc-middle-column-r4-column'>
                      
                    </div>
                </div>
                <div className='rc-middle-column-r4-r2'>
                    <div className='rc-middle-column-r4-column'>
                      <label>Daily</label>
                    </div>
                    <input type='text'  maxLength='8' style={{fontSize:'15px'}} className='rc-middle-column-r4-column'>

                    </input>
                    <input type='text'  maxLength='8' style={{fontSize:'15px'}} className='rc-middle-column-r4-column'>

                    </input>
                    <div className='rc-middle-column-r4-column'>
                      
                    </div>
                </div>  
                <div className='rc-middle-column-r4-r2'>
                    <div className='rc-middle-column-r4-column'>
                      <label>Weekly</label>
                    </div>
                    <input type='text'  maxLength='8' style={{fontSize:'15px'}} className='rc-middle-column-r4-column'>

                    </input>
                    <input type='text'  maxLength='8' style={{fontSize:'15px'}} className='rc-middle-column-r4-column'>

                    </input>
                    <div className='rc-middle-column-r4-column'>
                      
                    </div>
                </div>
                <div className='rc-middle-column-r4-r2'>
                  <div className='rc-middle-column-r4-column'>
                     <label>Monthly</label>
                  </div>
                  <input type='text'  maxLength='8' style={{fontSize:'15px'}} className='rc-middle-column-r4-column'>

                  </input>
                  <input type='text'  maxLength='8' style={{fontSize:'15px'}} className='rc-middle-column-r4-column'>

                  </input>
                  <div className='rc-middle-column-r4-column'>    
                  </div>
                </div>
              </div>
            </div>
            <div className='rc-end-column'>
              <div className='rc-start-column-r1'>

              </div>
              <div  className='rc-start-column-r2'>
                  <div className='rc-start-column-r2-imggp'> 

                  </div>
                  <div className='rc-start-column-r2-txtgp'>
                    <div  className='checkbox'>
                      <div className='checkbox-txt'>
                        <small>spear Type</small>
                        <small>spear Type</small>
                      </div>
                      <input type='checkbox' className='chk-box'/>
                    </div>
                    <div  className='checkbox'>
                      <div className='checkbox-txt'>
                        <small>spear Type</small>
                        <small >Jack & Tools</small>
                      </div>
                      <input type='checkbox' className='chk-box'/>
                    </div>
                    <div  className='checkbox'>
                      <div className='checkbox-txt'>
                        <small>spear Type</small>
                        <small>Documents</small>
                      </div>
                      <input type='checkbox' className='chk-box'/>
                    </div>
                    <div  className='checkbox'>
                      <div className='checkbox-txt'>
                        <small>spear Type</small>
                        <small>Tax Disc</small>
                      </div>
                      <input type='checkbox' className='chk-box'/>
                    </div>
                    <div  className='checkbox'>
                      <div className='checkbox-txt'>
                        <small>spear Type</small>
                        <small>Radio/Antenna</small>
                      </div>
                      <input type='checkbox' className='chk-box'/>
                    </div>
                    <div  className='checkbox'>
                      <div className='checkbox-txt'>
                        <small>spear Type</small>
                        <small >No.of Wheel cars</small>
                      </div>
                      <input type='checkbox' className='chk-box'/>
                    </div>
                  </div>
              </div>
            </div>
          </div>
          <div className='row-date'>
            <div className='row-date-c1'>
              <div className='row-date-c1-r1'>
                <div className='row-date-c1-r1-c1'>
                  <label>Date out</label>
                </div>
                <input type='text' maxLength='10' className='row-date-c1-r1-c2'>
                  
                </input>
                <div className='row-date-c1-r1-c3'>
                
                </div>
              </div>
              <div className='row-date-c1-r1'>
                <div className='row-date-c1-r1-c1'>
                 <label>Time out</label>
                </div>
                <input type='text'  maxLength='8' className='row-date-c1-r1-c2'>
                
                </input>
                <div className='row-date-c1-r1-c3'>
                
                </div>
              </div>
              <div className='row-date-c1-r1'>
                <div className='row-date-c1-r1-c1'>
                  <label>Kms out</label>
                </div>
                <input type='text' maxLength='10' className='row-date-c1-r1-c2'>
                
                </input>
                <div className='row-date-c1-r1-c3'>
                
                </div>
              </div>
            </div>
            <div className='row-date-c2'>
              <div className='row-date-c2-r1'>
                <div className='row-date-c1-r1-c1'>
                 <small>Refundable Deposit Details</small>
                </div>
                <textarea className='row-date-c1-r1-c2'>
                
                </textarea>
                <div className='row-date-c1-r1-c3'>
                
                </div>
              </div>
              <div className='row-date-c2-r1'>
                <div className='row-date-c1-r1-c1'>
                  <small>Insurance Excess Amonunt BD</small> 
                </div>
                <textarea  className='row-date-c1-r1-c2'>
                
                </textarea>
                <div className='row-date-c1-r1-c3'>
                
                </div>
              </div>
            </div>
            <div className='row-date-c3'> 
              <div className='row-date-c1-r1'>
                <div className='row-date-c1-r1-c1'>
                  <label>Date out</label>
                </div>
                <input type='text' maxLength='10' className='row-date-c1-r1-c2'>
                
                </input>
                <div className='row-date-c1-r1-c3'>
                
                </div>
              </div>
              <div className='row-date-c1-r1'>
                <div className='row-date-c1-r1-c1'>
                 <label>Time out</label>
                </div> 
                <input type='text' maxLength='8' className='row-date-c1-r1-c2'>
                
                </input>
                <div className='row-date-c1-r1-c3'>
                
                </div>
              </div>
              <div className='row-date-c1-r1'>
                <div className='row-date-c1-r1-c1'>
                 <label>Kms out</label>
                </div>
                <input type='text' maxLength='10' className='row-date-c1-r1-c2'>
                
                </input>
                <div className='row-date-c1-r1-c3'>
                
                </div>
              </div>
            </div>

          </div>
          <div className='row-bottom'>
              <div className='row-date-c2'>
                <div className='row-bottom-c1-r1'> 
                 <div className='row-bottom-c1-r1-r1'>
                    <label>Remarks:</label>
                    <input  className='txt-remarks-middle' maxLength="15" placeholder='  .................................................... ' type='text'/>
                    <label>text</label>
                 </div> 
                 <input type='text' placeholder='  ........................................................... '  maxLength="35" className='remarks'/>
                 <input type='text'  placeholder='  .......................................................... ' maxLength="35" className='remarks'/>
                 <input type='text'  placeholder='  .......................................................... '  maxLength="35" className='remarks' />
                 <input type='text'  placeholder='  .......................................................... ' maxLength="35" className='remarks' />
                </div>
                <div className='row-bottom-c1-r2'> 

                </div>
                <div className='row-bottom-c1-r2'> 

                </div>
                <div className='row-bottom-c1-r2'> 

                </div>
              </div>
              <div className='row-date-c2'>
                <div className='row-bottom-c2-r1'>
                   <label className='row-bottom-c2-r1-txt'>Next service Date</label>
                   <input type="number"  maxLength='1' className='row-bottom-c2-r1-txt-date' />
                   <span>/</span> 
                   <input  maxLength='1' className='row-bottom-c2-r1-txt-date' type="number"  />
                   <span>/</span> 
                   <input  maxLength='1' className='row-bottom-c2-r1-txt-date' type="number"  />
                   <label className='row-bottom-c2-r1-txt'>ss</label>
                 </div>
                 <div className='row-bottom-c2-r1'>
                 
                 </div>
                 <div className='row-bottom-c2-r2'>
                 
                 </div>
              </div>
              <div className='row-date-c2'>
                <div className='row-bottom-c1-r1'> 
                  <div className='row-bottom-c1-r1-r1'>
                      <label>Remarks:</label>
                      <input className='txt-remarks-middle' placeholder='  .................................................... ' maxLength="15" type='text'/>
                      <label>text</label>
                  </div> 
                  <input  type='text' placeholder='  ........................................................... '  maxLength="30" className='remarks'/>
                  <input type='text'  placeholder='  ........................................................... '  maxLength="30" className='remarks'/>
                  <input type='text'  placeholder='  ...........................................................  ' maxLength="30" className='remarks' />
                  <input type='text'  placeholder='  ........................................................... ' maxLength="30" className='remarks'  />
                </div>
                <div className='row-bottom-c1-r2'> 

                </div>
                <div className='row-bottom-c1-r2'> 

                </div>
                <div className='row-bottom-c1-r2'> 

                </div>
              </div>
          </div>
        </div>
        
      </div>
      <img  src={Secondpage} />
     
     </div>
       
  </div>     
  )
}
export default Home;