import React from 'react'
import { useState } from 'react'

const ItemContador = () => {
//lo llamo como funcion:
//const [VariableEstado, VariableModificadora]= useState[valor inicial]
const [contador, setContador]=useState(0);

const sumar=()=>{
    setContador (contador+1)}
const resta=()=>{
    if(contador>0){
        setContador(contador-1)
    }
    
}

    return (
        <div>
    <button className='btn btn-danger' onClick={resta} disabled={contador===0}>-</button>
    <span>{ contador }</span>
    <button className='btn btn-success' onClick={sumar} >+</button>
        </div>
    )
}

export default ItemContador