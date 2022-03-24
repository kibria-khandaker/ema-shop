import React from 'react';
import { Button} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faClipboardCheck,  } from '@fortawesome/free-solid-svg-icons';
import './AddToCart.css'

const AddToCart = (props) => {
    const {cart}=props;
    console.log('cart' ,cart);

    let total = 0;
    let shipping = 0;
    for(const product of cart){
        total = total + product.price;
        shipping = shipping + product.shipping;
    }
    const tex = parseFloat((total * 0.1).toFixed(2));
    const grandTotall = total+ shipping +tex ;

    return (
        <div className='cart_details_div'>
            <h4 className='text-center fw-normal mt-4 mb-5'> Order Summary </h4>
            <div>
                <p> Selected Items: {cart.length} </p>
                <p> Total Price: ${total} </p>
                <p> Total Shipping Charge: ${shipping} </p>
                <p> Tax: ${tex} </p>
                <p> Grand Total: ${grandTotall} </p>
            </div>
            <Button className='w-100 mb-2' variant="danger"> 
                Clear Cart <FontAwesomeIcon icon={faTrash} />
            </Button><br/>
            <Button className='w-100' variant="warning"> 
                Review Order <FontAwesomeIcon className='text-light' icon={faClipboardCheck} />
            </Button>
        </div>
    );
};

export default AddToCart;