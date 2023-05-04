import React from "react";
import './App.css';
import { Routes, Route, Navigate } from "react-router-dom";

import Home from "./pages/home/Home";
import Account from "./pages/Account/Account";
import Jobs from "./pages/Jobs/Jobs";
import Login from "./pages/Login/Login";
import Newjob from "./pages/Newjob/Newjob";
import Register from "./pages/Register/Register";

import Navigation from "./components/navigation/Navigation";
import Footer from "./components/footer/Footer";

function App() {

    const isLoggedIn = true;

  return (
      <>
        <Navigation />
          <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="/klusjes-bekijken" element={<Jobs/>} />
              <Route path="/klusje-aanmelden" element={isLoggedIn === true ? <Newjob/> : <Navigate to="/"/> } />
              <Route path="/aanmelden" element={<Login/>} />
              <Route path="/registreren" element={<Register/>} />
              <Route path="/account" element={<Account/>} />
          </Routes>
          <Footer
              text="info@saffier-klusjes.nl"
          />

      </>
  );
}

export default App;
