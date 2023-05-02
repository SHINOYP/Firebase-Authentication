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
         {/* First page to be printed */}
      </div>
      <div>
        {/* Second page to be printed */}
      </div>
     
     </div>
       
  </div>     
  )
}
export default Home;