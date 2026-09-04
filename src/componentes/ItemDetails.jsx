import React from 'react'
import ItemContador from './ItemContador'

// Este componente mostrara DE FORMA "BONITA"
const ItemDetails = ({detail}) => {
    return (
        <div style={{
            textAling:'center',
            display:'flex',
            flexDirection:'colum',
            alingItems:'center',
            gap:'10px',
        }}>
            <h2>Detaller del producto {detail.name}</h2>
            <img src={detail.img} alt={detail.name}/>
            <p> {detail.descripcion}</p>
            <p> {detail.precio} </p>
            <p> Stock de Productos : {detail.stock} Unidades</p>
            <ItemContador/>
        </div>
    )
}

export default ItemDetails