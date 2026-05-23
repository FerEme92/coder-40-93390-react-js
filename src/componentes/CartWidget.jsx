const CartWidget= (Props)=>{
    return(
        <div>
            <span>🛒</span>
            <span style={{color:"red"}}> {Props.cart}</span>
        </div>
    )
}

export default CartWidget 