import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SocialLinks from './components/SocialLinks';
import { componentRoutes } from './components/Data/ComponentRoutesData'
import Navbar from './components/Navbar';

const App = () => {
  return (
    <Router>
      <Routes>
        <>
        </>
        {componentRoutes.map((componentRoute, index) => (
          <Route key={index} path={componentRoute.path} element={
            <>
              <Navbar />
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