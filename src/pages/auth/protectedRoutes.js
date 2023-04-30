import { Route, useNavigate,Outlet } from 'react-router-dom';
import { useUserAuth } from '../../context/UserAuthContext';
import { useAuthStatus } from '../../hooks/useAuthStatus'
import CircularProgress from '@mui/material/CircularProgress'

export default function PrivateRoute() {
  const { loggedIn, checkingStatus } = useAuthStatus()
  const {user} = useUserAuth();
  const navigate=useNavigate();

  if (checkingStatus) {
    return <CircularProgress className='app__modal-loader' />
  }

    return loggedIn ? <Outlet /> : navigate('/login');
      
}