import {Outlet} from 'react-router-dom'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Novidades from './components/login/Novidades';
import './App.css'



function App() {
  return (
    <div className="App">
    <Navbar />
      <div className='container'>
      <Outlet/>
      </div>
      <Novidades/>
      <Footer />
    </div>
  );
}

export default App;
