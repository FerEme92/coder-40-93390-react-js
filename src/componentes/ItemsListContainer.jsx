import { useEffect, useState } from "react"
import { getProductos } from "../mock/AsyncData"
import Item from './item' 

const ItemsListContainer= ({saludo , alumno})=>{
const [data, setData]=useState([])   //usaremos un ARRAY.se aguarda como Array vacio. en este caso.

useEffect(()=>{
    //pedimos los productos
    getProductos().then((res)=>setData(res))
    },[])
    console.log(data)
    return(
        <div>
            <h1>{saludo} </h1>
            {/*data.map((prod)=><p key={prod.id}>{prod.nombre}</p>)*/}
            {/* aca  ahora pondremos un componete llamado "item"  donde estarian las card*/}
            {data.map((prod)=> <Item key={prod.id} prod={prod}/> )}
        </div>
    )
}

export default ItemsListContainer