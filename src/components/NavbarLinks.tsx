import { Link } from "react-router-dom"
import { NavbarLinkType } from "./Interfaces"

const NavbarLinks = ({ path, label }: NavbarLinkType) => {
    return (
        <li className="px-4 cursor-pointer font-medium text-gray-500 hover:scale-105 duration-300" >
            <Link to={path}>{label}</Link>
        </li>)
}

export default NavbarLinks