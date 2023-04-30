import './sidebarStyle.css'
import LogoutIcon from '@mui/icons-material/Logout';
import React from 'react'
import { useNavigate} from 'react-router-dom';
import { Sidebar, Menu, MenuItem, useProSidebar } from "react-pro-sidebar";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import { useState, useEffect } from "react";
import { useUserAuth } from '../../context/UserAuthContext';

function Navsidebar() {
  const { collapseSidebar, toggleSidebar, collapsed, toggled, broken,rtl } = useProSidebar();
  const [activePage, setActivePage] = useState(null) ;
  const {logOut} =useUserAuth();
  const navigate=useNavigate();

  const toggle = () => {
    toggleSidebar();
    if (toggled) {
      console.log(true);
      collapseSidebar();
    } else {
      console.log(false);
      collapseSidebar();
    }
  };
  function handleActive(event) {
    if (!event.target.classList.value.includes("active")) {
      event.target.classList.toggle('active') ;
      if (activePage)
        activePage.classList.remove("active") ;
      setActivePage(event.target) ;
    }
  }
  const handlelogout=async()=>{
    try{
      await logOut()
      navigate('/login')
    }catch(err){
      console.log(err)
    }


  }

  return (
    <div className="nav-main">
      <Sidebar
        breakPoint="sm"
        transitionDuration={800}
        backgroundColor="black"
        rtl={false}
        style={{ height: "100vh" }}
        width='270px'
        
      >
        {/* {!broken && ( */}
        <Menu className='nav-main-content'
          menuItemStyles={{
            button: ({ level, active, disabled }) => {
              if (level === 0) {
                return {
                  color: disabled ? "#eee" : "white",
                  backgroundColor: active ? "#fff" : undefined,
                  "&:hover": {
                    backgroundColor: "RGB(221,221,255) !important",
                    borderRadius: "8px !important",
                    fontWeight: "bold !important",
                    color:'black'
                  },
                };
              }
            },
          }}>
          <MenuItem
            icon={<MenuOutlinedIcon />}
            onClick={() => {
              collapseSidebar();
            }}
            style={{ textAlign: "center" }}
             
          >
            {" "}
            <h1>ADAM</h1>
          </MenuItem>

          <MenuItem onClick={handlelogout} icon={  <LogoutIcon/> } style={{ textAlign: "center" ,display:'flex',marginTop:'80vh'}}>
           Log out
          </MenuItem>
         
          
        </Menu>
        {/* )} */}
      </Sidebar>
      
    </div>
  );
}

export default Navsidebar;