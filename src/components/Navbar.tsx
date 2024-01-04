import { useState } from "react";
import { FaBars } from 'react-icons/fa';
import { ImCross } from 'react-icons/im';
import { myName, navbarLinks } from "./Data/NavbarData";
import NavbarLinks from "./NavbarLinks";

const Navbar = () => {

    const [mobileNav, setMobileNav] = useState(false);
    const linkClick = () => {
        setMobileNav(false);
    }

    return (
        <nav className="fixed top-0 w-full text-lg h-auto line-h-12 bg-black z-50">
            <div className="md:flex block justify-between text-center mx-auto text-white overflow-hidden">
                <div className="flex items-center px-4 py-2">
                    <div className="text-5xl ml-2 font-extrabold">
                        {myName}
                    </div>
                    <button
                        className="md:hidden ml-auto"
                        onClick={() => setMobileNav((prev) => !prev)}
                    >
                        {mobileNav ? <ImCross size={30} /> : <FaBars size={30} />}
                    </button>
                </div>
                <ul
                    className={`${mobileNav
                        ? 'md:hidden flex flex-col items-center md:flex-row justify-center p-3 bg-gradient-to-b from-gray-800 to-black'
                        : 'hidden md:flex pr-4'
                        } list-none items-center`}
                >
                    {navbarLinks.map((link, index) => (
                        <NavbarLinks key={index} linkClick={linkClick} navbarLink={link} />
                    ))}
                </ul>
            </div>
        </nav>
    )
}

export default Navbar