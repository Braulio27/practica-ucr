import React, {useContext, useState} from "react";

//Layout
import Header from "./components/layout/Header";
import Navegacion from "./components/layout/Navegacion";

//Routing
import {BrowserRouter as Router, Route , Routes} from 'react-router-dom';

//Componentes
import Clientes from "./components/clientes/Clientes";
import AgregarCliente from "./components/clientes/AgregarCliente";
import Habitaciones from "./components/habitación/Habitaciones";
import AgregarHabitacion from "./components/habitación/AgregarHabitacion";
import Reservacion from "./components/reservación/Reservacion";

import Login from "./components/auth/Login";
import { CRMContext, CRMProvider} from "./context/CRMContext";

function App() {

  //Utilizar el context
  const [auth, guardarAuth] = useContext(CRMContext);

  return (
    <Router>
      <div className="App">
        <CRMProvider value={[auth, guardarAuth]}>
        <Header></Header>
        <div className="grid contenedor contenido-principal">
          <Navegacion></Navegacion>

          <main className="caja-contenido col-9">
            <Routes>
              <Route exact path="/" element={<Clientes/>}/>
              
              <Route exact path="/clientes/nuevo" element={<AgregarCliente/>}/>

              <Route exact path="/habitacion" element={<Habitaciones/>}/>

              <Route exact path="/habitacion/nuevo" element={<AgregarHabitacion/>}/>

              <Route exact path="/Reservacion" element={<Reservacion/>}/>

              <Route exact path="/iniciar-sesion" element={<Login/>}/>
            </Routes>
          </main>
        </div>
        </CRMProvider>
      </div>
    </Router>
  );
}

export default App;
