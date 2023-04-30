import React,{useRef} from 'react';
import { useReactToPrint } from "react-to-print";
import Secondpage from "../assets/img2.jpg"
import  './homeStyle.css'
import LocalPrintshopIcon from '@mui/icons-material/LocalPrintshop';
import Logo from '../assets/logo.svg'
import Car1 from '../assets/car1.svg'
import Car2 from '../assets/car2.svg'
import Info from '../assets/info.svg'
import Meter1 from '../assets/meter1.svg'
import Meter2 from '../assets/meter2.svg'
import PhoneIcon from '@mui/icons-material/Phone';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';

const Home = () => {  
  const componentRef = useRef();
  const getPageMargins = () => {
    return `@page { margin: ${2} ${4} ${5} ${1} !important; }`;
  };
  const handlePrint = useReactToPrint({
    content: () => componentRef.current, 
    // pageStyle:getPageMargins
    
  });
  


  return (
  <div className='main'>  
    <button  onClick={handlePrint} className="print__button"><LocalPrintshopIcon sx={{marginRight:'12px'}}/>  Print </button> 
     <div  style={{width:'100%'}}  className='main-print'  ref={componentRef}>
      <div className='main-file'>
        <div className='header'>
          <div >
            <div className='header-phone' >
              <hr className='header-phone-margin'/>
              <div>
                <div className='header-phone-logo'><PhoneIcon/><label>+97317599006</label></div>
                <div className='header-phone-logo'><WhatsAppIcon/><label>+97333693888</label></div>
                <div className='header-phone-logo'><EmailIcon/><label>info@adamcarrentaltbh.com</label></div>
              </div>
            </div>
            <div className='header-branch'><label>Branch: </label><input type='text' maxLength={10}/></div>
          </div>
          <img src={Logo} className='img-logo' alt='err'/>
          <div>
              <div className='header-title'>
                <label>تفاقية استئجار سيارة</label>
                <label>CAR HIRE AGREEMENT</label>
              </div>
              <div className='header-number'>
               <label>NO. </label><input type='text' maxLength={5}/>
              </div>
          </div>
        </div>
     
        <div className='table'>
          <div className='second-row'>
          <div className='first-row'>
            <div className='fr-column-one'>
              <div className='fr-column-sec-start'>
                <label>Renter Name</label>
              </div>
              <input type='text' maxLength='30' className='fr-column-sec-middle'>
                
              </input>
              <div className='fr-column-sec-start'>
               <label>سم المستاجر</label>
              </div>
              </div>
            <div className='fr-column-two'>
              <div className='fr-column-sec-start'>
              <label>Second Driver</label>
              </div>
              <input type='text' maxLength='30' className='fr-column-sec-middle'>

              </input>
              <div className='fr-column-sec-start'>
                  <label>السائق الثاني</label>
              </div>
            </div>
          </div>
          </div>
          <input type='text' maxLength='120' className='first-row'>

          </input>
          <div className='second-row'>
            <div className='first-row'>
              <div className='fr-column-one'>
                <div className='fr-column-sec-start'>
                  <label>Nationality</label>
                </div>
                <input type='text' maxLength='30' className='fr-column-sec-middle'>
                    
                </input>
                <div className='fr-column-sec-start'>
                 <label>الجنسية</label>
                </div>
                </div>
              <div className='fr-column-two'>
                <div className='fr-column-sec-start'>
                 <label>Nationality</label>
                </div>
                <input type='text' maxLength='30' className='fr-column-sec-middle'>

                </input>
                <div className='fr-column-sec-start'>
                  <label>الجنسية</label>
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
                <input type='text' maxLength='30' className='fr-column-sec-middle'>

                </input>
                <div className='fr-column-sec-start'>
                    <label>رقم الرخصة</label>
                </div>
                </div>
              <div className='fr-column-two'>
                <div className='fr-column-sec-start'>
                <label>Driver Lic.no</label>
                </div>
                <input type='text' maxLength='30' className='fr-column-sec-middle'>

                </input>
                <div className='fr-column-sec-start'>
                  <label>رقم الرخصة</label>
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
                <input type='text' maxLength='30'  className='fr-column-sec-middle'>
 
                </input>
                <div className='fr-column-sec-start'>
                    <label>محل الإصدار</label>
                </div>
                </div>
              <div className='fr-column-two'>
                <div className='fr-column-sec-start'>
                <label>Issue Place</label>
                </div>
                <input type='text'maxLength='30'  className='fr-column-sec-middle'>

                </input>
                <div className='fr-column-sec-start'>
                  <label>محل الإصدار</label>
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
                <input type='text' maxLength='30' className='fr-column-sec-middle'>

                </input>
                <div className='fr-column-sec-start'>
                  <label>تارخ الانتهاء</label>
                </div>
                </div>
              <div className='fr-column-two'>
                <div className='fr-column-sec-start'>
                <label>Expiry Date</label>
                </div>
                <input type='text' maxLength='30'  className='fr-column-sec-middle'>

                </input>
                <div className='fr-column-sec-start'>
                  <label>تارخ الانتهاء</label>
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
                 <input type='text' maxLength='30' className='fr-column-sec-middle'>

                </input>
                <div className='fr-column-sec-start'>
                   <label style={{marginLeft:'14px'}} >رقم الجواز الرقم الشخصي</label>
                </div>
                </div>
              <div className='fr-column-two'>
                <div className='fr-column-sec-start'>
                <label>Passport/CPR</label>
                </div>
                <input type='text' maxLength='30' className='fr-column-sec-middle'>

                </input>
                <div className='fr-column-sec-start'>
                  <label style={{marginLeft:'14px'}}>رقم الجواز الرقم الشخصي</label>
                </div>
              </div>
           </div>
          </div>
          <div className='row-address'>
            <div className='row-address-column'>
              <label>Address</label>
              <input type='text' style={{fontSize:'16px'}} maxLength={43}  placeholder='.....................................................................' className='ra-first-column'/>
              <label>العنوان</label>
            </div>
            <div  className='row-address-column'>
              <label>Address</label>
              <input type='text'   style={{fontSize:'16px'}}  maxLength={43} placeholder='.......................................................................' className='ra-first-column'/>
              <label>العنوان</label>
            </div>
          </div>
          <div className='second-row'>
            <div className='first-row'>
              <div className='fr-column-one'>
                <div className='fr-column-sec-start'>
                  <label>Tel/Mob</label>
                </div>
                <input type='text' maxLength='15' className='fr-column-sec-middle'>

                </input>
                <div className='fr-column-sec-start'>
                  <label>الهاتف/الذقال</label>
                </div>
                </div>
              <div className='fr-column-two'>
                <div className='fr-column-sec-start'>
                <label>Tel/Mob</label>
                </div>
                <input type='text'  maxLength='15' className='fr-column-sec-middle'>

                </input>
                <div className='fr-column-sec-start'>
                    <label>الهاتف/الذقال</label>
                </div>
              </div>
           </div>
          </div>
          <div className='row-car'>
            <div className='rc-start-column'>
              <div className='rc-start-column-r1'>
                <label>فحص السيارة عند خروجها</label>
                <label>CHECKOUT CONDITION</label>
              </div>
              <div  className='rc-start-column-r2'>
                    <div className='rc-start-column-r2-imggp'> 
                      <img src={Car1} alt='err'/>
                    </div>
                    <div className='rc-start-column-r2-txtgp'>
                      <div  className='checkbox'>
                        <div className='checkbox-txt'>
                          <small>ءجلةا٠ساطي</small>
                          <small>spear Type</small>
                        </div>
                        <input  type='checkbox' className='chk-box'/>
                      </div>
                      <div  className='checkbox'>
                        <div className='checkbox-txt'>
                          <small>رافعة+ءدة</small>
                          <small>Jack & Tools</small>
                        </div>
                        <input type='checkbox' className='chk-box'/>
                      </div>
                      <div  className='checkbox'>
                        <div className='checkbox-txt'>
                          <small>وثائق</small>
                          <small>Documents</small>
                        </div>
                        <input type='checkbox'  className='chk-box'/>
                      </div>
                      <div  className='checkbox'>
                        <div className='checkbox-txt'>
                          <small>شهادة الترخيص</small>
                          <small>Tax Disc</small>
                        </div>
                        <input type='checkbox' className='chk-box'/>
                      </div>
                      <div  className='checkbox'>
                        <div className='checkbox-txt'>
                          <small style={{fontSize:'10px'}}>راديو هوائي ( أريل)</small>
                          <small style={{fontSize:'10px'}}>Radio/Antenna</small>
                        </div>
                        <input type='checkbox' className='chk-box'/>
                      </div>
                      <div  className='checkbox'>
                        <div className='checkbox-txt' >
                          <small style={{fontSize:'10px'}}>غطاءالعجلة</small>
                          <small  style={{fontSize:'10px'}} >No.of Wheel cars</small>
                        </div>
                        <input type='checkbox' className='chk-box'/>
                      </div>
                      <img src={Meter1} alt='err'/>
                    </div>
              </div>
            </div>
            <div className='rc-middle-column'>
              <div className='rc-middle-column-r1'>
                <label>Car Details</label>
                <label>تفاصيل السيارة</label>
              </div>
              <div  className='rc-middle-column-r2'>
                  <div className='rc-middle-column-r2-r1'>
                    <div className='rc-middle-column-r2-r1-start'>
                         <label>Car Type</label>
                    </div>
                    <input type='text'  maxLength='15' style={{fontSize:'15px'}}  className='rc-middle-column-r2-r1-middle'>

                    </input>
                    <div className='rc-middle-column-r2-r1-start'>
                          <label>نوع السيارة</label>
                    </div>
                  </div>
                  <div className='rc-middle-column-r2-r1'>
                    <div className='rc-middle-column-r2-r1-start'>
                       <label>Reg. no.</label>
                    </div>
                    <input type='text' maxLength='15' style={{fontSize:'15px'}} className='rc-middle-column-r2-r1-middle'>

                    </input>
                    <div className='rc-middle-column-r2-r1-start'>
                            <label>رقم السيارة</label>
                    </div>
                  </div>
                  <div className='rc-middle-column-r2-r1'>
                    <div className='rc-middle-column-r2-r1-start'>
                       <label>car color</label>
                    </div>
                    <input type='text' maxLength='15' style={{fontSize:'15px'}} className='rc-middle-column-r2-r1-middle'>

                    </input>
                    <div className='rc-middle-column-r2-r1-start'>
                         <label>لون السيارة</label>
                    </div>
                  </div>
              </div>
              <div className='rc-middle-column-r3'>
                <label>Rates</label>
                <label> الأسعار</label>
              </div>
              <div className='rc-middle-column-r4'>
                <div className='rc-middle-column-r4-hr1'>
                    <div className='rc-middle-column-r4-column'>
                      <label>Charges</label>
                    </div>
                    <div className='rc-middle-column-r4-column'>
                        <label>Bd</label>
                        <label>ديذار</label>
                    </div>
                    <div className='rc-middle-column-r4-column'>
                        <label>Fils</label>
                        <label>ظس</label>
                    </div>
                    <div className='rc-middle-column-r4-column'>
                        <label>الايجار</label>
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
                       <label>يومي</label>
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
                        <label>أسبوعي</label>
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
                    <label>شهدي</label>    
                  </div>
                </div>
              </div>
            </div>
            <div className='rc-end-column'>
              <div className='rc-start-column-r1'>
                <label>فحص السيارة عند خروجها</label>
                <label>CHECKOUT CONDITION</label>
              </div>
              <div  className='rc-start-column-r2'>
                  <div className='rc-start-column-r2-imggp'> 
                    <img src={Car2} alt='err'/>
                   
                  </div>
                  <div className='rc-start-column-r2-txtgp'>
                    <div  className='checkbox'>
                      <div className='checkbox-txt'>
                         <small>ءجلةا٠ساطي</small>
                        <small>spear Type</small>
                      </div>
                      <input type='checkbox' className='chk-box'/>
                    </div>
                    <div  className='checkbox'>
                      <div className='checkbox-txt'>
                        <small>رافعة+ءدة</small>
                        <small >Jack & Tools</small>
                      </div>
                      <input type='checkbox' className='chk-box'/>
                    </div>
                    <div  className='checkbox'>
                      <div className='checkbox-txt'>
                        <small>وثائق</small>
                        <small>Documents</small>
                      </div>
                      <input type='checkbox' className='chk-box'/>
                    </div>
                    <div  className='checkbox'>
                      <div className='checkbox-txt'>
                        <small>شهادة الترخيص</small>
                        <small>Tax Disc</small>
                      </div>
                      <input type='checkbox' className='chk-box'/>
                    </div>
                    <div  className='checkbox'>
                      <div className='checkbox-txt'>
                        <small style={{fontSize:'10px'}} >راديو هوائي ( أريل)</small>
                        <small style={{fontSize:'10px'}} >Radio/Antenna</small>
                      </div>
                      <input type='checkbox' className='chk-box'/>
                    </div>
                    <div  className='checkbox'>
                      <div className='checkbox-txt'>
                        <small style={{fontSize:'10px'}} >غطاءالعجلة</small>
                        <small style={{fontSize:'10px'}} >No.of Wheel cars</small>
                      </div>
                      <input type='checkbox' className='chk-box'/>
                    </div>
                    <img src={Meter2} alt='err'/>
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
                  <label>تاريخ الخروج</label>
                </div>
              </div>
              <div className='row-date-c1-r1'>
                <div className='row-date-c1-r1-c1'>
                 <label>Time out</label>
                </div>
                <input type='text'  maxLength='8' className='row-date-c1-r1-c2'>
                
                </input>
                <div className='row-date-c1-r1-c3'>
                <label>وقت الخروج</label>
                </div>
              </div>
              <div className='row-date-c1-r1'>
                <div className='row-date-c1-r1-c1'>
                  <label>Kms out</label>
                </div>
                <input type='text' maxLength='10' className='row-date-c1-r1-c2'>
                  
                </input>
                <div className='row-date-c1-r1-c3'>
                <label>عداد الكيلو / خروج</label>
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
                  <small>ودائع مسترجعة</small>
                </div>
              </div>
              <div className='row-date-c2-r1'>
                <div className='row-date-c1-r1-c1'>
                  <small>Insurance Excess Amonunt BD</small> 
                </div>
                <textarea  className='row-date-c1-r1-c2'>
                
                </textarea>
                <div className='row-date-c1-r1-c3'>
                  <small>زيادة تأمين</small>
                </div>
              </div>
            </div>
            <div className='row-date-c3'> 
              <div className='row-date-c1-r1'>
                <div className='row-date-c1-r1-c1'>
                  <label>Date out</label>
                </div>
                <input type='text'  maxLength='10' className='row-date-c1-r1-c2'>
               
                </input>
                <div className='row-date-c1-r1-c3'>
                  <label>تاريخ الخروج</label>
                </div>
              </div>
              <div className='row-date-c1-r1'>
                <div className='row-date-c1-r1-c1'>
                 <label>Time out</label>
                </div> 
                <input type='text' maxLength='8' className='row-date-c1-r1-c2'>
                 
                </input>
                <div className='row-date-c1-r1-c3'>
                <label>وقت الخروج</label>
                </div>
              </div>
              <div className='row-date-c1-r1'>
                <div className='row-date-c1-r1-c1'>
                 <label>Kms out</label>
                </div>
                <input type='text' maxLength='10' className='row-date-c1-r1-c2'>
                 
                </input>
                <div className='row-date-c1-r1-c3'>
                <label>عداد الكيلو / خروج</label>
                </div>
              </div>
            </div>

          </div>
          <div className='row-bottom'>
              <div className='row-date-c2'>
                <div className='row-bottom-c1-r1'> 
                 <div className='row-bottom-c1-r1-r1'>
                    <label>Remarks:</label>
                    <input  className='txt-remarks-middle' maxLength="20" placeholder='  .................................................... ' type='text'/>
                    <label>ملاحظات</label>
                 </div> 
                 <input type='text' placeholder='  ............................................................................ '  maxLength="45" className='remarks'/>
                 <input type='text'  placeholder=' ........................................................................... ' maxLength="45" className='remarks'/>
                 <input type='text'  placeholder='  ........................................................................... '  maxLength="45" className='remarks' />
                 <input type='text'  placeholder=' ........................................................................... ' maxLength="45" className='remarks' />
                </div>
                <div className='row-bottom-c1-r2'> 
                  <label>Renters Sign</label>
                  <input className='txt-bottom-sign' maxLength='25' type='text'/>
                  <label style={{width:'25%'}}>توقيع المستأجر</label>
                </div>
                <div className='row-bottom-c1-r2'> 
                  <label style={{width:'53%'}}>Renters Agent Sign</label>
                  <input  className='txt-bottom-sign' maxLength='15' type='text'/>
                  <label  style={{width:'33%'}}>توقيع وكيل تأجير</label>
                </div>
                <div className='row-bottom-c1-r2'> 
                  <label>Date</label>
                  <input  className='txt-bottom-sign' maxLength='25' type='text'/>
                  <label>تاريخ</label>
                </div>
              </div>
              <div className='row-date-c2'>
                <div className='row-bottom-c2-r1'>
                   <small className='row-bottom-c2-r1-txt'>Next service Date</small>
                   <input type="text"  maxLength='2' className='row-bottom-c2-r1-txt-date' />
                   <span>/</span>
                   <input  type="text" maxLength='2' className='row-bottom-c2-r1-txt-date'  />
                   <span>/</span> 
                   <input  type="text" maxLength='4' className='row-bottom-c2-r1-txt-date'  />
                   <label  className='row-bottom-c2-r1-txt' >تاريخ تفيير الزيت القادم</label>
                 </div>
                 <div className='row-bottom-c2-r1'>
                   <small className='row-bottom-c2-r1-txt'>Next Due service KM</small>
                   <input  type="text" maxLength='10' style={{width:'100px'}}  />
                   <label className='row-bottom-c2-r1-txt'>الكيلو متر القادم</label>
                 </div>
                 <div className='row-bottom-c2-r2'>
                  <img src={ Info } alt=''/>
                 </div> 
              </div>
              <div className='row-date-c2'>
                <div className='row-bottom-c1-r1'> 
                  <div className='row-bottom-c1-r1-r1'>
                      <label>Remarks:</label>
                      <input className='txt-remarks-middle' placeholder='  ............................................................................................................................'
                        maxLength="20" type='text'/>
                      <label>ملاحظات</label>
                  </div> 
                  <input  type='text' placeholder='  ............................................................................. '  maxLength="45" className='remarks'/>
                  <input type='text'  placeholder='  .............................................................................'  maxLength="45" className='remarks'/>
                  <input type='text'  placeholder='  ............................................................................. ' maxLength="45" className='remarks' />
                  <input type='text'  placeholder='  .............................................................................' maxLength="45" className='remarks'  />
                </div>
                <div className='row-bottom-c1-r2'> 
                  <label>Renters Sign</label>
                  <input className='txt-bottom-sign'  maxLength='25' type='text'/>
                  <label style={{width:'25%'}}>توقيع المستأجر</label>
                </div>
                <div className='row-bottom-c1-r2'> 
                  <label style={{width:'53%'}}>Renters Agent Sign</label>
                  <input  className='txt-bottom-sign'  maxLength='25' type='text'/>
                  <label style={{width:'33%'}}>توقيع وكيل تأجير</label>
                </div>
                <div className='row-bottom-c1-r2'> 
                  <label>Date</label>
                  <input  className='txt-bottom-sign' maxLength='25' type='text'/>
                  <label>تاريخ</label>
                </div>
              </div>
          </div>
        </div>
        
      </div>
      <img  src={Secondpage} style={{display:'flex',marginInline:'auto'}} alt='err'/>
     
     </div>
       
  </div>     
  )
}
export default Home;