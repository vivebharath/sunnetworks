import React, { useEffect, useState } from "react"
import './ProductList.css';
const ProductList = () => {
    const PRODUCT_URL = "https://dummyjson.com/products";
    const [productList, setProductList] = useState([]);
    useEffect(() => {
        fetch(PRODUCT_URL)
            .then(res => res.json())
            .then(data => setProductList(data.products))
            .catch(err => console.error(err));
    }, []);

    return (
        <div className="product-list-container">
            {productList?.map((data) => {
                return (
                    <div className="product-card" key={data.id}>
                        <img src={data.images[0]} alt={data.title} className="product-image" />
                        <div className="product-details">
                            <h3>{data.title}</h3>
                            <p>Category: {data.category}</p>
                            <p>Description: {data.description}</p>
                            <p>Brand: {data.brand}</p>
                            <p>Discount: {data.discountPercentage}%</p>
                            <p>Price: ${data.price}</p>
                            <p>Rating: {data.rating}</p>
                            <p>Stock: {data.stock}</p>
                        </div>
                    </div>
                )
            })

            }

        </div>
    )
}
export default ProductList