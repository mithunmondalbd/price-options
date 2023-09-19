import { useState } from "react";
import Link from "../Link/Link";
import {AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
const Navbar = () => {
    const [open, setOpen] = useState(false);
    const routes = [
        { path: '/home', id: 1, name: 'Home' },
        { path: '/about', id: 2, name: 'About' },
        { path: '/products', id: 3, name: 'Products' },
        { path: '/contact', id: 4, name: 'Contact' },
        { path: '/dashboard', id: 5, name: 'Dashboard' }        
    ]
        
    return (
        <nav className="text-black bg-yellow-200 p-6">
            <div onClick={() => setOpen(!open)} className="text-2xl md:hidden">
                {
                    open === true ? 
                    <AiOutlineClose></AiOutlineClose> 
                    : <AiOutlineMenu className=""></AiOutlineMenu>
                }
            
            </div>
            <ul className={`md:flex absolute md:static bg-yellow-200 px-6 duration-1000 ${open ? 'top-16' : 'hidden'}`}>
                {
                    routes.map(route => <Link key={route.id} route={route}></Link>)
                }
            </ul>
        </nav>
    );
};

export default Navbar;