import { RouteEnum } from "../../Constants"
import { ComponentRouteType } from "../Interfaces"
import About from "../About"
import Contact from "../Contact"
import Experience from "../Experience"
import Home from "../Home"
import Projects from "../Projects"

export const componentRoutes: ComponentRouteType[] = [
    { link: RouteEnum.HOME_ROUTE, component: <Home /> },
    { link: RouteEnum.ABOUT_ROUTE, component: <About /> },
    { link: RouteEnum.PROJECT_ROUTE, component: <Projects /> },
    { link: RouteEnum.EXPERIENCE_ROUTE, component: <Experience /> },
    { link: RouteEnum.CONTACT_ROUTE, component: <Contact /> },
]