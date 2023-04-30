import { useState } from 'react'
import { useUserAuth } from '../../../context/UserAuthContext';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import Checkbox from '@mui/material/Checkbox'
import TextField from '@mui/material/TextField'
import InputLabel from '@mui/material/InputLabel'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import CardContent from '@mui/material/CardContent'
import FormControl from '@mui/material/FormControl'
import OutlinedInput from '@mui/material/OutlinedInput'
import { styled, useTheme } from '@mui/material/styles'
import MuiCard from '@mui/material/Card'
import InputAdornment from '@mui/material/InputAdornment'
import MuiFormControlLabel from '@mui/material/FormControlLabel'
import FormHelperText from '@mui/material/FormHelperText'
import Logo from '../../../assets/logo2.svg'
import Icon from '../../../components/icon/index'

// ** Styled Components
const Card = styled(MuiCard)(({ theme }) => ({
  [theme.breakpoints.up('sm')]: { width: 450 }
}))

const FormControlLabel = styled(MuiFormControlLabel)(({ theme }) => ({
  '& .MuiFormControlLabel-label': {
    fontSize: '0.875rem',
    color: theme.palette.text.secondary
  }
}))
const Toast = Swal.mixin({
  toast: true,
  position: 'top-right',
  iconColor: 'white',
  customClass: {
    popup: 'colored-toast'
  },
  showConfirmButton: false,
  timer: 1500,
  timerProgressBar: true
})
const LoginV1 = () => {
  const [values, setValues] = useState({
    password: '',
    showPassword: false
  })
  const [email,setEmail]=useState("");
  const [error,setError]=useState("")
  const {logIn,googleSignIn}=useUserAuth();
  const navigate=useNavigate();
  const handleSubmit = async (e) => {
      e.preventDefault();
      setError("");
      try {
        await logIn(email,values.password);
        await Toast.fire({
          icon: 'success',
          title: 'Success'
        })
        navigate("/");
      } catch (err) {
        console.log(err.message)
        if (err.message === 'Firebase: Error (auth/invalid-email).') {
            setError('Invalid email address');
          } else if(err.message=== 'Firebase: Error (auth/wrong-password).') {
            setError('Invalid passowrd');
          }else{
            setError('Uknown Error please try later')
          }
          
      }
    };
  
    const handleGoogleSignIn = async (e) => {
      e.preventDefault();
      try {
        await googleSignIn();
        navigate("/");
      } catch (error) {
        console.log(error.message);
      }
    };

  // ** Hook
  const theme = useTheme()

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
        <CardContent sx={{ p: theme => `${theme.spacing(3, 6, 5.5)} !important` }}>
          <Box sx={{ mb: 5, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          
                <img src={Logo} style={{maxWidth:'800px',width:'100%'}} alt='err'/>
            
          </Box>
          <Box sx={{ mb: 6 }}>
            <Typography variant='h5' sx={{ mb: 1.5, fontWeight: 600, letterSpacing: '0.18px' }}>
              {`Welcome to Adam! 👋🏻`}
            </Typography>
            <Typography variant='body2'>Please sign-in to your account and start the adventure</Typography>
          </Box>
          <form noValidate autoComplete='off' onSubmit={handleSubmit}>
          {error && <FormHelperText sx={{ color: 'error.main' }}>{error}</FormHelperText>}
            <TextField autoFocus fullWidth id='email' label='Email'
                 sx={{ mb: 4,mt:1 }} 
                 onChange={(e) => setEmail(e.target.value)}
                 error={Boolean(error)}
                 />
            <FormControl fullWidth>
              <InputLabel htmlFor='auth-login-password'  error={Boolean(error)}>Password</InputLabel>
              <OutlinedInput
                label='Password'
                value={values.password}
                id='auth-login-password'
                error={Boolean(error)}
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
                      <Icon icon={values.showPassword ? 'mdi:eye-outline' : 'mdi:eye-off-outline'} />
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>
            <Box
              sx={{ mb: 4, display: 'flex', alignItems: 'center', flexWrap: 'wrap', justifyContent: 'space-between' }}
            >
              <FormControlLabel
                label='Remember Me'
                control={<Checkbox />}
                sx={{ '& .MuiFormControlLabel-label': { color: 'text.primary' } }}
              />
              <Typography
                variant='body2'
                href='/pages/auth/forgot-password-v1'
                sx={{ color: 'primary.main', textDecoration: 'none' }}
              >
                Forgot Password?
              </Typography>
            </Box>
            <Button fullWidth size='large' type='submit' variant='contained' sx={{ mb: 7 }}>
              Login
            </Button>
            <Box sx={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', justifyContent: 'center' }}>
              <Typography sx={{ mr: 2, color: 'text.secondary' }}>New on our platform?</Typography>
              <Button onClick={()=>navigate('/register')}  sx={{ color: 'primary.main', textDecoration: 'none' }}>
                Create an account
              </Button>
            </Box>
            <Divider
              sx={{
                '& .MuiDivider-wrapper': { px: 4 },
                mt: theme => `${theme.spacing(5)} !important`,
                mb: theme => `${theme.spacing(1.5)} !important`
              }}
            >
              or
            </Divider>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <IconButton href='/' sx={{ color: '#1da1f2' }} onClick={e => e.preventDefault()}>
                <Icon icon='mdi:twitter' />
              </IconButton>
             
              <IconButton href='/' sx={{ color: '#db4437' }} onClick={ handleGoogleSignIn}>
                <Icon icon='mdi:google' />
              </IconButton>
            </Box>
          </form>
        </CardContent>
      </Card>
    </Box>
  )
}

export default LoginV1
