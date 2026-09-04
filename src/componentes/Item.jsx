import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { Link } from 'react-router-dom';

function Item({prod}) {  //x React-bootstrap
    return ( 
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={prod.img} />
        <Card.Body>
            <Card.Title>{prod.nombre}</Card.Title>
            <Card.Text> {prod.descripcion}</Card.Text>

        <Link className='btn btn-dark' to={`/Item/${prod.id}`}>Detalle</Link>
        </Card.Body>
        <ListGroup className="list-group-flush">
            <ListGroup.Item>Precio : {prod.precio}</ListGroup.Item>
            <ListGroup.Item>Stock: {prod.stock}</ListGroup.Item>
            </ListGroup>
        </Card>
    );
}

export default Item;

