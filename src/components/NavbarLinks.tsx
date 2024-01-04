import { Link } from "react-scroll"
import { NavbarPropType } from "./Interfaces"

const NavbarLinks = ({ navbarLink, linkClick }: NavbarPropType) => {
    return (
        <li className="px-4 cursor-pointer font-medium text-gray-500 hover:scale-105 duration-300" >
            <Link onClick={linkClick} to={navbarLink.link} smooth duration={500}>{navbarLink.label}</Link>
        </li>
    )
}

export default NavbarLinks