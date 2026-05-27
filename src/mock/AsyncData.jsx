const productos=[
    {
        id:'0',
        nombre: 'random0',
        descripcion:' lorem lorem lorem lorem',
        precio: 50000,
        stock:5,
        img:'/historia1.jpeg',
    },
    {
        id:'1',
        nombre: 'random1',
        descripcion:' lorem lorem lorem lorem',
        precio: 50000,
        stock:5,
        img:'/historia1.jpeg',
        //'https://picsum.photo/200' //playholder de img
    },
    {
        id:'2',
        nombre: 'random12',
        descripcion:' lorem lorem lorem lorem',
        precio: 50000,
        stock:5,
        img:'/historia1.jpeg',
    },
];

export const getProductos= ()=>{
    return new Promise((resolve)=>{
    setTimeout(()=>{ resolve(productos)}, 5000)
})
}

