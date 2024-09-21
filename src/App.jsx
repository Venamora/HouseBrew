import React, {useEffect} from 'react'
import AOS from 'aos';
import"aos/dist/aos.css";
import NavBar from './components/NavBar/NavBar';
import Home from './components/Home/Home';
import Menu from './components/Menu/Menu';
import Footer from './components/Footer/Footer';


const App = () => {
  useEffect(() => {
    AOS.init(
      {
        offset: 100,
        duration: 700,
        easing: 'ease-in',
        delay: 100,
      }
    );
  })
  return <div className = "overflow-x-hidden">
    <NavBar />
    <Home />
    <Menu />
    <Footer/>
  </div>
}

export default App