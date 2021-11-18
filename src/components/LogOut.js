import { Button } from '@mui/material';
import { Navigate } from 'react-router-dom';

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
