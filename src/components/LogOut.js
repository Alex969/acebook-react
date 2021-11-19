import { Button } from '@mui/material';
import { Navigate } from 'react-router-dom';
import "./LogOut.css";
const LogOut = () => {
  const onLogOut = async () => {
    const res = await fetch('https://acebook-api.herokuapp.com/logout', {
      method: 'DELETE',
      credentials: 'include'
    })
    const data = await res.json();
    console.log(data);
    console.log('You are logged out');
    return data
  }
  return (
    <div className="logoutbutton">
      <Button type="submit" sx={{
          }} 
              onClick={() => {
                onLogOut()
              }
            }
            >
              Log Out
          </Button>
    </div>
  )
}
export default LogOut