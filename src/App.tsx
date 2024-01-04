// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Element } from 'react-scroll';
import Navbar from './components/Navbar';
import { componentRoutes } from './components/Data/ComponentRoutesData';
import SocialLinks from './components/SocialLinks';


const App = () => {
  return (
    <>
      <Navbar />
      {componentRoutes.map((componentRoute, index) => (
        <Element key={index} name={componentRoute.link}>
          {componentRoute.component}
        </Element>
      ))
      }
      <SocialLinks />
    </>
  )
}

export default App