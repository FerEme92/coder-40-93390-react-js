
import './App.css'
//import de componentes 
// import + nombre del componente + from+ direccion del arch
import Navbar from './componentes/Navbar'
import ItemsListContainer from './componentes/ItemsListContainer'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBarBR from './componentes/NavBarBR'
import DinamicComponents from './examples/DinamicComponents'
import ComponentesChildren from './examples/ComponentesChildren';
import ItemContador from './componentes/ItemContador';
import ItemDetailsContainer from './componentes/ItemDetailsContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Error from './componentes/Error'

function App(){
  //ItemsListContainer podria por const saludo ="hola", y despues llamarlo en < ItemsListContainer  saludo={"saludo"}/>
    return (  
  <BrowserRouter>
  <NavBarBR/>
    <Routes>
      <Route path='/' element={<ItemsListContainer saludo='Hola mi rey' alumno='Fer'/>}></Route>
      <Route path='/' element={<ItemsListContainer saludo='Hola mi rey' alumno='Fer'/>}></Route>
      <Route path='Item/:id' element={<ItemDetailsContainer/>}></Route>
      <Route path='*' element={<Error/>}></Route>
    </Routes>
  </BrowserRouter>
    );
};

export default App;
