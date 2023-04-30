import React, { useEffect,useState } from 'react';
import Home from './pages/home';
import Login from './pages/auth/Login/loginv1';
import Register from './pages/auth/Register/register';
import Error404  from "./pages/404";
import './index.css';
import { css } from '@emotion/react';
import SideNavbar from './components/Sidebar/sidebar'
import { RingLoader } from 'react-spinners';
import {Routes,Route, useLocation} from 'react-router-dom'
import {useUserAuth} from "./context/UserAuthContext"
import PrivateRoute from './pages/auth/protectedRoutes';
import { useAuthStatus } from './hooks/useAuthStatus'
import HashLoader from "react-spinners/HashLoader";

function App() {
  const { loggedIn, checkingStatus } = useAuthStatus()
  const [loading, setLoading] = useState(true);
  const { user } = useUserAuth();
  const location = useLocation();
  const excludedRoutes=['/'];

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000); // 3 seconds delay
  }, []);
  const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
  width:100px;
  height:100px;
  @media (max-width: 768px) {
    width: 50px;
    height: 50px;
  }
`;

  return (
    <div className='app'>
        { !loading && excludedRoutes.includes(location.pathname) && <SideNavbar/>}
      {loading ? (
        <div className='appmain-loading'>

          <HashLoader
          css={override}
          loading={loading}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      </div>
      
      
    ) : (
      <div className='app-main'>
        <Routes>
          <Route path='/' element={<PrivateRoute/>}>
              <Route path='/' element={<Home/>}/>
          </Route>
            <Route  path='/login' element={<Login/>}/>
            <Route  path='/register' element={<Register/>}/>
            <Route path="*" element={<Error404/>} />
        </Routes>
       </div>
    )}
    </div>
  );
}

export default App;
