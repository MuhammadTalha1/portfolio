import { useState } from "react";
import { FaBars } from 'react-icons/fa';
import { ImCross } from 'react-icons/im';
import { Link } from 'react-router-dom';


interface LinkType {
    id: number,
    path: string;
    label: string;
}
interface NavBarProps {
    links: LinkType[];
}

const Navbar = ({ links }: NavBarProps) => {

    const [mobileNav, setMobileNav] = useState(false);

    return (
        <nav className="relative text-lg h-auto line-h-12 bg-black">
            <div className="md:flex block justify-between text-center mx-auto text-white overflow-hidden">
                <div className="flex items-center px-4 py-2">
                    <div className="text-5xl ml-2 font-extrabold">
                        Talha
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
                    onClick={() => setMobileNav(false)}
                >
                    {links.map((link) => (
                        <li key={link.id} className="px-4 cursor-pointer font-medium text-gray-500 hover:scale-105 duration-300" >
                            <Link to={link.path}>{link.label}</Link>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    )
}

export default Navbar