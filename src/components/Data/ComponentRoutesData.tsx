import { RouteEnum } from "../../Constants"
import { ComponentRouteType } from "../Interfaces"
import About from "../About"
import Contact from "../Contact"
import Experience from "../Experience"
import Home from "../Home"
import Projects from "../Projects"

export const componentRoutes: ComponentRouteType[] = [
    { path: RouteEnum.HOME_ROUTE, component: <Home /> },
    { path: RouteEnum.ABOUT_ROUTE, component: <About /> },
    { path: RouteEnum.PROJECT_ROUTE, component: <Projects /> },
    { path: RouteEnum.EXPERIENCE_ROUTE, component: <Experience /> },
    { path: RouteEnum.CONTACT_ROUTE, component: <Contact /> },
]