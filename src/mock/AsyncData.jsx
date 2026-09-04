const productos=[
    {
        id:'0',
        nombre: 'random0',
        descripcion:' lorem lorem lorem lorem',
        precio: 3000,
        stock:5,
        img:'/historia1.jpeg',
    },
    {
        id:'1',
        nombre: 'random1',
        descripcion:' lorem lorem lorem lorem',
        precio: 500,
        stock:5,
        img:'/historia1.jpeg',
        //'https://picsum.photo/200' //playholder de img
    },
    {
        id:'2',
        nombre: 'random2',
        descripcion:' lorem lorem lorem lorem',
        precio: 3200,
        stock:5,
        img:'/historia1.jpeg',
    },
    {
        id:'3',
        nombre: 'random3',
        descripcion:' lorem lorem lorem lorem',
        precio: 230,
        stock:5,
        img:'/historia1.jpeg',
    },
    {
        id:'4',
        nombre: 'random4',
        descripcion:' lorem lorem lorem lorem',
        precio: 200,
        stock:5,
        img:'/historia1.jpeg',
    },
    {
        id:'5',
        nombre: 'random5',
        descripcion:' lorem lorem lorem lorem',
        precio: 500,
        stock:5,
        img:'/historia1.jpeg',
    }
    ,
];
// apra todos los productos
export const getProductos= ()=>{
    return new Promise((resolve)=>{
    setTimeout(()=>{ resolve(productos)}, 2000)
})
}
//reutilizando para traer UN solo producto
export const getOneProductos= (id)=>{
    return new Promise((resolve)=>{
    setTimeout(()=>{
        let prod= productos.find((producto)=>producto.id=== id)
        resolve(prod)
    }, 1000)
})
}
    