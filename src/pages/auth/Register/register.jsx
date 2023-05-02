import { useState, Fragment } from 'react'
import Swal from 'sweetalert2'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'

import Checkbox from '@mui/material/Checkbox'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import InputLabel from '@mui/material/InputLabel'
import IconButton from '@mui/material/IconButton'
import CardContent from '@mui/material/CardContent'
import FormControl from '@mui/material/FormControl'
import OutlinedInput from '@mui/material/OutlinedInput'
import { styled, useTheme } from '@mui/material/styles'
import MuiCard from '@mui/material/Card'
import InputAdornment from '@mui/material/InputAdornment'
import MuiFormControlLabel from '@mui/material/FormControlLabel'
import Logo from '../../../assets/logo2.svg'
import Icon from '../../../components/icon/index'
import {useNavigate } from 'react-router-dom'
import { useUserAuth } from "../../../context/UserAuthContext";
import FormHelperText from '@mui/material/FormHelperText'

// ** Styled Components
const Card = styled(MuiCard)(({ theme }) => ({
  [theme.breakpoints.up('sm')]: { width: '28rem' }
}))

const FormControlLabel = styled(MuiFormControlLabel)(({ theme }) => ({
  marginBottom: theme.spacing(4),
  '& .MuiFormControlLabel-label': {
    fontSize: '0.875rem',
    color: theme.palette.text.secondary
  }
}))

const RegisterV1 = () => {
  const [values, setValues] = useState({
    password: '',
    showPassword: false
  })
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const { signUp } = useUserAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signUp(email, values.password);
      Swal.fire(
        'Registration successful!',
        'yaaa!',
        'success'
      )
      navigate("/login");
    } catch (err) {
        console.log(err.message)
        if (err.message === 'Firebase: Error (auth/email-already-in-use).') {
            setError('Email address already exists');
          } else if(err.message=== 'Firebase: Error (auth/weak-password).') {
            setError('Password is weak');
          }else if(err.message=== 'Firebase: Error (auth/invalid-email).') {
            setError('Email id is Invalid');
          }else if(err.message=== 'Firebase: Error (auth/network-request-failed).') {
            setError('bad network try again later');
          }else if(err.message==='Firebase: Error (auth/user-disabled).') {
            setError('User disabled ,contact admin');
          }else{
            setError('Uknown Error please try Again')
          }
      console.log(error)
      Swal.fire('Errr try again', '', 'info')
    }
  };

  const theme = useTheme()
  const navigate=useNavigate()
  const handleChange = prop => event => {
    setValues({ ...values, [prop]: event.target.value })
  }

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword })
  }

  const handleMouseDownPassword = event => {
    event.preventDefault()
  }

  return (
    <Box className='content-center'>
      <Card sx={{ zIndex: 1 }}>
        <CardContent sx={{ p: theme =>  `${theme.spacing(3, 6, 5.5)} !important` }}>
          <Box sx={{ mb: 2, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            
            <img src={Logo} style={{maxWidth:'800px',width:'100%'}} alt='err'/>
            
          </Box>
          <Box sx={{ mb: 3 }}>
            <Typography variant='h5' sx={{ mb: 0.5, letterSpacing: '0.18px', fontWeight: 600 }}>
              Adventure starts here 🚀
            </Typography>
            <Typography variant='body2'>Make your app management easy and fun!</Typography>
          </Box>
          <form noValidate autoComplete='off' onSubmit={handleSubmit}>
          {error && <FormHelperText sx={{ color: 'error.main' }}>{error}</FormHelperText>}
            <TextField fullWidth type='email' label='Email' sx={{ mb: 4,mt:1 }}  onChange={(e) => setEmail(e.target.value)}/>
            <FormControl fullWidth>
              <InputLabel htmlFor='auth-register-password'>Password</InputLabel>
              <OutlinedInput
                label='Password'
                value={values.password}
                id='auth-register-password'
                onChange={handleChange('password')}
                type={values.showPassword ? 'text' : 'password'}
                endAdornment={
                  <InputAdornment position='end'>
                    <IconButton
                      edge='end'
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      aria-label='toggle password visibility'
                    >
                      <Icon icon={values.showPassword ? 'mdi:eye-outline' : 'mdi:eye-off-outline'} fontSize={20} />
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>
            <FormControlLabel
              control={<Checkbox />}
              label={
                <Fragment>
                  <span>I agree to Privacy policy </span>
                 
                </Fragment>
              }
            />
            <Button fullWidth size='large' type='submit' variant='contained' sx={{ mb: 7 }}>
              Sign up
            </Button>
            <Box sx={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', justifyContent: 'center' }}>
              <Typography sx={{ mr: 2, color: 'text.secondary' }}>Already have an account?</Typography>
              <Button onClick={()=>navigate('/')}
            
                sx={{ color: 'primary.main', textDecoration: 'none' }}
              >
                Sign in instead
              </Button>
            </Box>
          </form>
        </CardContent>
      </Card>
    </Box>
  )
}

export default RegisterV1
