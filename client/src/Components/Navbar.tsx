import React from 'react';
import {NavLink} from 'react-router-dom'

const Navbar=()=>{
    return(
        <div>
            <div>
            <NavLink to='/'>YK</NavLink>
            <NavLink to='/'>YASHWANTH KUMAR</NavLink>
            </div>
            <div>
                <NavLink to='/skills'>Skill</NavLink>
                <NavLink to='/Projects'>Projects</NavLink>
                <NavLink to='/resume'>Resume</NavLink>
                <NavLink to='/about'>About</NavLink>
                <NavLink to='contact'><button>Get in Touch</button></NavLink>
            </div>

        </div>

    );
}
export default Navbar;
