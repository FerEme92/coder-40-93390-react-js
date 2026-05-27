
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


function App(){
  //ItemsListContainer podria por const saludo ="hola", y despues llamarlo en < ItemsListContainer  saludo={"saludo"}/>
    return (  
    <>
    <NavBarBR/> 
    <ItemContador/> 
    <ComponentesChildren/>
    <ComponentesChildren>
      <p>etiqueta desde App</p>
      <input placeholder="holaaa"/>
    </ComponentesChildren>
    
    <DinamicComponents 
    title='this is fine' 
    description= {"Aca no se que poner pero hagamos de cuenta que dice algo sorprendente"}
    botonText={"Comprar"}
    img="/chesscake.jpeg"/>

    <DinamicComponents 
    title='Tooooooottaaaaaaa' 
    description= {"Aca no se que poner pero hagamos de cuenta que dice algo sorprendente"}
    botonText={"Comprar"}
    img="/tarta_frutilla.jpeg"/>
    
    <ItemsListContainer saludo={"hola bienvenido"} alumno='camila'  />
      <h1 className='text-danger'>Hola Chicos</h1>
    </>

    );
  
};

export default App;
