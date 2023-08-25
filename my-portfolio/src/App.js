import './App.css';

import { BrowserRouter, Routes, Route } from "react-router-dom";

import {NavBar} from "./pages/Nav-Bar"
import { Presentacion } from './pages/Presentacion';
import { SobreMi } from "./pages/SobreMi";
import { Tecnologias } from './pages/Tecnologias';
import {Contactame} from "./pages/Contactame"
import {NotFound} from "./pages/NotFound"

function App() {
  return (

    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<Presentacion />} />
          <Route path='/sobre-mi' element={<SobreMi />} />
          <Route path='/tecnologias' element={<Tecnologias />} />
          <Route path='/contacto' element={<Contactame />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
