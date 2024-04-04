import React from 'react';
import {NavLink} from 'react-router-dom'

const Navbar=()=>{
    return(
        <div className='bg-customPurple grid grid-cols-2 h-16  '>
            
            <div className='text-left '>
            <NavLink to='/' className='border'>YK</NavLink>
            <NavLink to='/'>YASHWANTH KUMAR</NavLink>
            </div>
            <div className='text-right'>
                <NavLink to='/skills'>Skill</NavLink>
                <NavLink to='/Projects'>Projects</NavLink>
                <NavLink to='/resume'>Resume</NavLink>
                <NavLink to='/about'>About</NavLink>
                <NavLink to='contact'>Get in Touch</NavLink>
            </div>
            </div>

        

    );
}
export default Navbar;
