import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { RouteEnum } from './Constants';
import Home from './components/Home';
import Navbar from './components/Navbar';
import About from './components/About';
import Experience from './components/Experience';
import SocialLinks from './components/SocialLinks';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';

interface ComponentRoute {
  id: number;
  path: string;
  component: JSX.Element;
}

interface NavBarLink {
  id: number,
  path: string;
  label: string;
}

const App = () => {

  const componentRoutes: ComponentRoute[] = [
    { id: 0, path: RouteEnum.HOME_ROUTE, component: <Home /> },
    { id: 1, path: RouteEnum.ABOUT_ROUTE, component: <About /> },
    { id: 2, path: RouteEnum.PORTFOLIO_ROUTE, component: <Portfolio /> },
    { id: 4, path: RouteEnum.EXPERIENCE_ROUTE, component: <Experience /> },
    { id: 5, path: RouteEnum.CONTACT_ROUTE, component: <Contact /> },
  ]

  const links: NavBarLink[] = [
    { id: 0, path: RouteEnum.HOME_ROUTE, label: 'Home' },
    { id: 1, path: RouteEnum.ABOUT_ROUTE, label: 'About' },
    { id: 2, path: RouteEnum.PORTFOLIO_ROUTE, label: 'Portfolio' },
    { id: 4, path: RouteEnum.EXPERIENCE_ROUTE, label: 'Experience' },
    { id: 5, path: RouteEnum.CONTACT_ROUTE, label: 'Contact' },
  ];

  return (
    <Router>
      <Routes>
        <>
        </>
        {componentRoutes.map((componentRoute) => (
          <Route key={componentRoute.id} path={componentRoute.path} element={
            <>
              <Navbar links={links} />
              {componentRoute.component}
              <SocialLinks />
            </>
          } />
        ))}
      </Routes>
    </Router>
  )
}

export default App