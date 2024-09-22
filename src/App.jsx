import React, {useEffect} from 'react'
import AOS from 'aos';
import"aos/dist/aos.css";
import NavBar from './components/NavBar/NavBar';
import Home from './components/Home/Home';
import Menu from './components/Menu/Menu';
import Footer from './components/Footer/Footer';
import SignIn from './components/Sign In/SignIn';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


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
  return (
    <Router>
    <div className = "overflow-x-hidden">
    <NavBar />
    <Routes>
      <Route path="/signin" element={<SignIn />} /> 
      <Route path="/" element={<><Home/><Menu/></>} />
    </Routes>
    <Footer/>
  </div>
  </Router>
  )
}

export default App