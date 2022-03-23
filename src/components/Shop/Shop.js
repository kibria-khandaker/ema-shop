import React, { useEffect, useState } from 'react';
import Products from './../Products/Products';
import './Shop.css'
import AddToCart from './../AddToCart/AddToCart';

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
                <AddToCart cart={cart}></AddToCart>
            </div>

        </div>
    );
};

export default Shop;