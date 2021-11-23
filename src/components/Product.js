import React, { Fragment } from 'react'
import product_image from '../car.jpg'
const Product = (data) => {
    return (
        <Fragment>
            <div className="col-md-3">
                <div className="card shadow my-2">
                    <img src={ product_image } alt="" />
                    <div className="card-body">
                        <h2>{ data.Product.name }</h2>
                        <p>Price: { data.Product.price } BDT</p>
                        <a className="btn btn-success" href="">Add To Card</a>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Product
