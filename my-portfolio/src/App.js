import './App.css';

import {NavBar} from "./pages/Nav-Bar"
import { Presentacion } from './pages/Presentacion';
import { SobreMi } from "./pages/SobreMi";
import {Hobbies} from "./pages/Hobbies"
import { Tecnologias } from './pages/Tecnologias';
import {Contactame} from "./pages/Contactame"
import {NotFound} from "./pages/NotFound"
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (

    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<Presentacion />} />
          <Route path='/hobbies' element={<Hobbies />} />
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
