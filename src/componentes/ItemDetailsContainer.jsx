import React, { useEffect, useState } from 'react'
import ItemDetails from './ItemDetails'
import { getOneProductos } from '../mock/AsyncData'
import { useParams } from 'react-router-dom'

//este es el componente CONTENEDOR

const ItemDetailsContainer = () => {
    const [detail, setDetail]= useState({})
    const {id}= useParams()
    
    useEffect(()=>{
        getOneProductos(id)
        .then((res)=>setDetail(res))
    },[id])
    return (
    <>
        <ItemDetails detail={detail}/>
        
    </>
    )
}

export default ItemDetailsContainer