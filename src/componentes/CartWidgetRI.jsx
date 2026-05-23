import { IoIosCart } from "react-icons/io"; //importado desde la pag
import Badge from 'react-bootstrap/Badge';
const CartWidgetRI= ()=>{

    return(
        <div>
            <IoIosCart  fontSize={"2rem"} />
            <Badge bg="danger">9</Badge>
        </div>
    )
}
export default CartWidgetRI