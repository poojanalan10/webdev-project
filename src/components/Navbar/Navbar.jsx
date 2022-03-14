import "./Navbar.css"
import React, {Component} from 'react'
import { MenuItems} from "./MenuItems";

class NavBar extends Component {

    render() {
    return (
        <nav className="navbar">

            <ul className= 'nav-menu'>
                {MenuItems.map((item,index) =>{
                    return (    
                        <li key={index}>
                            <a className={item.cname} href={item.url} >
                                {item.title}
                            </a>
                        </li>
                    )
                } )}    
            </ul>
        </nav>
    );
    }
}
export default NavBar