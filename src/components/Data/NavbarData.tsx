import { RouteEnum } from "../../Constants";
import { NavbarLinkType } from "../Interfaces";

export const myName = 'Talha'
export const navbarLinks: NavbarLinkType[] = [
    { link: RouteEnum.HOME_ROUTE, label: 'Home' },
    { link: RouteEnum.ABOUT_ROUTE, label: 'About' },
    { link: RouteEnum.PROJECT_ROUTE, label: 'Projects' },
    { link: RouteEnum.EXPERIENCE_ROUTE, label: 'Experience' },
    { link: RouteEnum.CONTACT_ROUTE, label: 'Contact' },
];