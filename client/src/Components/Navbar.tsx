
import { NavLink } from 'react-router-dom';
import close from '../assests/close.svg';
import menu from '../assests/menu.svg';
import { useState } from 'react';
const Navbar = () => {
    const [isOpen, setisOpen] = useState(false);

    const toggleopen = () => {
        setisOpen(!isOpen);
    }

    const navlinks = [{
        "path": "/skills",
        "name": "Skills"
    },
    {
        "path": "/Projects",
        "name": "Project"
    },
    {
        "path": "/resume",
        "name": "Resume"
    },
    {
        "path": "/about",
        "name": "About"
    }
    ]
    return (
        <div className='bg-customPurple grid grid-cols-2 h-16 text-3xl w-full  fixed top-0 left-0 '>

            <div className='flex text-left my-auto space-x-5  '>
                <div className='-skew-x-12'>
                    <NavLink to='/' className=' bg-customGreen  border ml-7 px-2 py-1 '>YK</NavLink>
                </div>
                <div>
                    <NavLink to='/'>YASHWANTH KUMAR</NavLink>
                </div>
            </div>
            <div className=' hidden lg:block  text-right my-auto space-x-9 '>
                {
                    navlinks.map((navlink) => (
                        <NavLink to={navlink.path}>{navlink.name}</NavLink>
                    ))
                }
                <NavLink to='/contact'><button className='border-solid border-customGreen border-4 mr-11 px-7 py-1 rounded-md'>Get in Touch</button></NavLink>
            </div>
            <div className='m-auto float-right lg:hidden  '>
                <img src={menu} alt="menu" onClick={toggleopen} className='float-right' />
            </div>
        </div>



    );
}
export default Navbar;
