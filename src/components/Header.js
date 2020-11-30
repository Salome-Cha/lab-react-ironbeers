import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

class Header extends React.Component {
   

render () {
    return (
    <div>
        <div className="header-bar">
      <NavLink  exact to="/"> <i class="fas fa-home"></i> </NavLink>
        </div>
    </div>
    )
    }
}

export default  Header;