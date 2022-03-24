import React, { useEffect, useState } from 'react';
import Products from './../Products/Products';
import './Shop.css'
import AddToCart from './../AddToCart/AddToCart';
import { addToDb, getStoredCart } from '../../utilities/fakedb';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(()=>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[]);

    useEffect(()=>{
        const storedCart = getStoredCart();
        const saveCart = [];
        for (const id in storedCart) {
            const addedProduct = products.find(product => product.id === id);
            if (addedProduct) {
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;
                saveCart.push(addedProduct);
                console.log(addedProduct);
            }
        }
        setCart(saveCart);
    },[products]);

    const handleAddToCart=(prod)=>{
        let newCart =[];
        const exists = cart.find(product => product.id === prod );
        if (!exists) {
            prod.quantity = 1;
            newCart = [...cart, prod];
        }else{
            const rest = cart.filter(product => product.id !== prod.id);
            exists.quantity = exists.quantity +1;
            prod.quantity = 1;
            newCart = [...rest, exists];
        }
        setCart(newCart);
        addToDb(prod.id)
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







