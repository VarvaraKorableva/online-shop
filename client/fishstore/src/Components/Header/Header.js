import './Header.css'
/*import { Link } from 'react-router-dom'
import { Route } from 'react-router-dom'*/


function Header() {
    return (
    <div className="header">

      <div className="header__connection-container">
        <div className="header__btn-container">
            <button className="header__btn header__btn-popup">צור קשר</button>
            <button className="header__btn header__btn-bag">סַל</button>
        </div>
        <div>
            <p className="header__time">שעות פעילות: ימים א-ה 9:00-19:00</p>
            <p className="header__time">ימי שישי 9:00-14:00</p> 
        </div>
      </div>

      <nav className="header__nav">
        <ul className="header__ul">
            <li className="header__li">
            דגים
            </li>
            <li className="header__li">
            צמחים
            </li>
            <li className="header__li">
            קישוטים
            </li>
            <li className="header__li">
            אקווריומים
            </li>
            <li className="header__li">
            אביזרים
            </li>
            <li className="header__li">
            להתחבר
            </li>
        </ul>
      </nav>
    </div>  
    );
  }
  
  export default Header;