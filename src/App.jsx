import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { getAuth, signOut } from 'firebase/auth';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './firebase';
import Portada from './componentes/portada'
import Separacion from './componentes/separacion'
import Portafolio from './componentes/portafolio'
import Opiniones from './componentes/opiniones'
import Registrarse from './componentes/Registrar'; 
import Agendar from './componentes/Agendar';
import Iniciarsesion from './componentes/iniciarsesion'
import LoginScreen from  './componentes/LoginScreen'
import Nosotras from './componentes/nosotras';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Portada/>}/>
      <Route path='/separación' element={<Separacion/>}/>
      <Route path='/portafolio' element={<Portafolio/>}/>
      <Route path='/opiniones' element={<Opiniones/>}/>
      <Route path='/registrar' element={<Registrarse/>}/>
      <Route path='/agendar' element={<Agendar/>}/>
      <Route path='/iniciar' element={<Iniciarsesion/>}/>
      <Route path='/mas' element={<LoginScreen/>}/>
      <Route path='/nosotras' element={<Nosotras/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App;
