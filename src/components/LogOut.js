import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const LogOut = () => {
  const navigate = useNavigate;

  const onLogOut = async () => {
    const res = await fetch('https://acebook-api.herokuapp.com/logout', {
      method: 'DELETE',
      credentials: 'include'
    })
    const data = await res.json();
    console.log(data.logged_out);
    console.log('You are logged out');

    return data.logged_out
  }

  


  return (
    <Button type="submit" sx={{
          display: 'flex',
          flexDirection: 'row',
          backgroundColor: '#E2BCFB',
          border: 0,
          m: 1,
          justifyContent: 'center',
          mx: 'auto',
          borderRadius: 4,
          color: 'white',
          fontWeight: 700
        }} 
            onClick={() => {
              onLogOut()
            }
          }
          >
            Log Out
        </Button>
  )
}

export default LogOut
