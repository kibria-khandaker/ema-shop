import React from 'react';
import { Card,Button} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Products.css'

const Products = (props) => {
// console.log(props);
const {img,name,price,seller,ratings}=props.product
    return (
        <div className='product_item'>
            {/* <Card style={{ width: '18rem' }}> */}
            <Card className='card_box'>
                <Card.Img variant="top" src={img} />
                <Card.Body>

                    <Card.Title className='text-capitalize mb-3'>{name}.</Card.Title>
                    <Card.Subtitle>Price: ${price}</Card.Subtitle>
                    <Card.Text className="mt-4 mb-1"> Manufacturer : {seller} start</Card.Text>
                    <Card.Text className='mb-5'>Rating : {ratings} start</Card.Text>
                    
                    <Button  onClick={()=>props.handleAddToCart(props.product)} className='add_to_cart_btn'>
                        Add to Cart &nbsp;
                        <FontAwesomeIcon icon={faShoppingCart} />
                    </Button>

                </Card.Body>
            </Card>

        </div>
    );
};

export default Products;