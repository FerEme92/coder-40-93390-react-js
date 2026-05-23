
import './App.css'
//import de componentes 
// import + nombre del componente + from+ direccion del arch
import Navbar from './componentes/Navbar'
import ItemsListContainer from './componentes/ItemsListContainer'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBarBR from './componentes/NavBarBR'

function App(){
  //ItemsListContainer podria por const saludo ="hola", y despues llamarlo en < ItemsListContainer  saludo={"saludo"}/>
    return (  
    <>
    <NavBarBR/>
    <ItemsListContainer saludo={"hola bienvenido"} alumno='camila' />
      <h1 className='text-danger'>Hola Chicos</h1>
    </>
    );
  
};

export default App;
