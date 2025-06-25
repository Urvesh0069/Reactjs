import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/home';
import Contect from './pages/contect';
import About from './pages/about';
import Portfolio from './pages/portfolio';
import Portfolio_details from './pages/portfolio-details';
import Resume from './pages/resume';
import Services from './pages/services';
import Starter_page from './pages/starter-page';

function App() {
  return (
    <>
      <Home />
      <Contect/>
      <About/>
      <Portfolio_details/>
      <Portfolio/>
      <Resume/>
      <Services/>
      <Starter_page/>
    </>
  );
}
export default App;
