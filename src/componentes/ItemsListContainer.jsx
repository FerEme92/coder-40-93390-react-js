import { useEffect, useState } from "react"
import { getProductos } from "../mock/AsyncData"
import Item from './Item' 
import '../css/ItemsListContainer.css'


const ItemsListContainer= ({saludo , alumno})=>{
const [data, setData]=useState([])   //usaremos un ARRAY.se aguarda como Array vacio. en este caso.

useEffect(()=>{
    //pedimos los productos
    getProductos().then((res)=>setData(res))
    },[])
    console.log(data)
    return(
        <div>
            <h1>{saludo} {alumno}</h1>
            {/*data.map((prod)=><p key={prod.id}>{prod.nombre}</p>)*/}
            {/* aca  ahora pondremos un componete llamado "item"  donde estarian las card*/}
            <div className="CardTotales">
                {data.map((prod)=> <Item key={prod.id} prod={prod}/> )}
                
            </div>
            
        </div>
    )
}

export default ItemsListContainer