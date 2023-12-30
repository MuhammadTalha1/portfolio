import { RouteEnum } from "../../Constants";
import { NavbarLinkType } from "../Interfaces";

export const myName = 'Talha'
export const navbarLinks: NavbarLinkType[] = [
    { path: RouteEnum.HOME_ROUTE, label: 'Home' },
    { path: RouteEnum.ABOUT_ROUTE, label: 'About' },
    { path: RouteEnum.PROJECT_ROUTE, label: 'Projects' },
    { path: RouteEnum.EXPERIENCE_ROUTE, label: 'Experience' },
    { path: RouteEnum.CONTACT_ROUTE, label: 'Contact' },
];