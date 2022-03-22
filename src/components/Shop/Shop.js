import React, { useEffect, useState } from 'react';
import Products from './../Products/Products';
import { Button} from 'react-bootstrap';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(()=>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])

    const handleAddToCart=(prod)=>{
        const newCart = [...cart, prod];
        setCart(newCart)
    }

    return (
        <div className='shop_container'>

            <div className='product_container'>
                {
                    products.map(product=><Products
                        key={product.id} 
                        product={product}
                        handleAddToCart={handleAddToCart} 
                        ></Products>)
                }
            </div>
            <div className='cart_area'>
                <h4 className='text-center fw-normal mt-4 mb-5'> Order Summary </h4>
                <div>
                    <p> Selected Items: {cart.length} </p>
                    <p> Total Price: $1140 </p>
                    <p> Total Shipping Charge: $5 </p>
                    <p> Tax: $114 </p>
                    <p> Grand Total: $1559 </p>
                </div>
                <Button className='w-100 mb-2' variant="danger"> Clear Cart </Button><br/>
                <Button className='w-100' variant="warning"> Review Order</Button>
            </div>

        </div>
    );
};

export default Shop;