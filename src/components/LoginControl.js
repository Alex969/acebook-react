import Register from "./Register"
import Feed from "./Feed"

const LoginControl = () => {

  //check login status
  const isLoggedIn  = async () => {
    const res = await fetch('https://acebook-api.herokuapp.com/logged_in', {
      method: 'GET',
      credentials: 'include'
    })
    const data = await res.json()
    console.log(data.logged_in)
    console.log('this is the isLoggedIn method');
    return data.logged_in
  }
  
  return (
    <div className="container">
      {isLoggedIn() ? <Feed /> : <Register />}
    </div>
    
  )
}

export default LoginControl
