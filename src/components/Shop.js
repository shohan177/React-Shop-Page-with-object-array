import React, {useState, useEffect} from 'react'
import Product from './Product'


const Shop = () => {
    
    const [products, setproduct] = useState([]);
    
    useEffect(() => {

        let products = [
            {
                id: 1,
                name: "shirt",
                price: 1250,
                s_price: 1200
            },
            {
                id: 2,
                name: "pant",
                price: 800,
                s_price: 600
            },
            {
                id: 3,
                name: "lungi",
                price: 1150,
                s_price: 1100
            },
            {
                id: 4,
                name: "chair",
                price: 100,
                s_price: 60
            },
            {
                id: 5,
                name: "door",
                price: 700,
                s_price: 600
            }
        ];
      
        setproduct(products);
    }, [])

    return (
        <div className="container mt-5">
            <div className="row">
                {
                    products.map((product) => <Product Product ={product}/> )
                }
               
            </div>
        </div>
    )
}

export default Shop
