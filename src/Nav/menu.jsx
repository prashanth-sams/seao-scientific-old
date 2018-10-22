import React, { Component } from 'react';

class NavMenu extends Component {
    state = {  }
    render() { 
        return ( <div className="navdiv">
        <div className="navmenu"><a href="#">Home</a>  | About | Research Topics | Product | Contact Us</div>
       </div> );
    }
}
 
export default NavMenu;