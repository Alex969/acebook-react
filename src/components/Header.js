import '../Register.css'
import Box from '@mui/material/Box';
import LogOut from './LogOut'


const Header = () => {
  return (
    <Box sx={{ml: 3}}>
      <div className="row">
        <div className="col"> 
          <div className="container acebooktext">
          acebook 
          </div>
        </div>
        <div className="col"> 
          <LogOut />
        </div>
      </div>
    </Box>
  )
}

export default Header
