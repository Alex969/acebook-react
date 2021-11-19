import './Header.css'
import {FaCaretDown} from 'react-icons/fa'
import LogOut from '../LogOut'
const Header = () => {
  return (
    <div className="Homepage">
      <div className="Header">
        <div className="acebook-title">
          acebook 
        </div>

        <div className="right-header">
          <div className="profile-picture">
            <img src="/images/dp.jpg"alt="dp"style={{height:"40px"}}/>
          </div>

          <div className="plus">
              <li class="dropdown">
                <a href="javascript:void(0)" class="dropbtn">
                  <FaCaretDown fontSize="1.3rem"/></a>
                  <div class="dropdown-content">
                    <LogOut />
                  </div>
              </li>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Header