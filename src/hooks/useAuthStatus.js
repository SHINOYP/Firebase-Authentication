import { useState, useEffect } from 'react'
import {useUserAuth} from "../context/UserAuthContext"



export const useAuthStatus = () => {
    const [loggedIn, setLoggedIn] = useState(false)
    const [checkingStatus, setCheckingStatus] = useState(true)
    const { user } = useUserAuth();
    useEffect(() => {
        if (user) {
          setLoggedIn(true)
        } else {
          setLoggedIn(false)
        }
    
        setCheckingStatus(false)
      }, [user])
    
      return { loggedIn, checkingStatus }
}
