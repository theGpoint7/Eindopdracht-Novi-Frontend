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
          {/*<header>
          <h1>Poisonous Beverages</h1>
          {/* <button type={"button"} onClick={logClick}>Get your detox juice</button>
        </header>
        <main>
          {/*   <Product
              /*image={citroen}
              title="Citroen"
              description="Een citroen is voor de meeste mensen te zuur om zo uit de hand te eten. Van citroen kun je het vruchtvlees, het sap en de schil gebruiken. Het sappige, lichtgele zure vruchtvlees versterkt de smaak van ander voedsel."
          />
          <Product
              /*image={limoen}
              title="Limoen"
              description="Limoen is familie van de citroen en de sinaasappel en behoort tot de citrusvruchten (Wijnruitfamilie). Limoenen zijn rond en kleiner dan citroenen. De schil is dun, vrij glad en groen."
          />
          <Product
              /*image={icecubes}
              title="Ijsblokjes"
              description= "Een ijsblokje of ijsklontje is bevroren water in de vorm van een klein blokje. Het wordt gemaakt in een diepvriezer door water in een plastic vorm te laten bevriezen."
          />

        </main>*/}
      </>
  );
}

export default App;
