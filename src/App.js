import React, {useState, useEffect} from "react";
import './App.css';

import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import {AuthContext} from "./context/AuthContext";
import {useContext} from "react";

import Home from "./pages/home/Home";
import Account from "./pages/Account/Account";
import Jobs from "./pages/Jobs/Jobs";
import Login from "./pages/Login/Login";
import Newjob from "./pages/Newjob/Newjob";
import Register from "./pages/Register/Register";
import Navigation from "./components/navigation/Navigation";
import Footer from "./components/footer/Footer";
import Modal from "./components/modal/Modal";

function App() {

    const { isAuthenticated } = useContext(AuthContext)

    const [displayDetourModal, setDisplayDetourModal] = useState(false)

    const location = useLocation();

    useEffect(() => {
        if (location.pathname === '/klusje-aanmelden' && !isAuthenticated) {
            setDisplayDetourModal(true);
        }
    }, [location.pathname, isAuthenticated]);

    function handleUnauthenticatedAccess() {
        return () => {
            setDisplayDetourModal(true);
            return <Navigate to="/" />;
        };
    }

    return (
      <>
        <Navigation />
          <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="/klusjes-bekijken" element={<Jobs/>} />
              <Route path="/klusje-aanmelden" element={isAuthenticated ? <Newjob /> : handleUnauthenticatedAccess()} />


              <Route path="/aanmelden" element={<Login/>} />
              <Route path="/registreren" element={<Register/>} />
              <Route path="/account" element={<Account/>} />
          </Routes>
          <Modal
            displayModal = {displayDetourModal}
            setDisplayModal = {setDisplayDetourModal}
            title = "U bent niet ingelogd"
            message= "U moet aangemeld zijn om deze pagina te bekijken. U word nu terug gestuurd naar de startpagina."
            navigateTo="/"
          />
          <Footer
              text="info@saffier-klusjes.nl"
          />

      </>
  );
}

export default App;
