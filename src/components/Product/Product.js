import React from 'react'
import './product.css';
import PropTypes from 'prop-types';

export default function Product(props){
    return(
        <div className='container d-flex flex-wrap'>
            <div className="card m-3 text-center">
                <img src="./download.jpg" className="card-img-top" alt="not available"/>
                <div className="card-body">
                    <h5 className="productName">{props.productName}</h5>
                    <h5 className="price">{props.price}</h5>
                    <p className="massage">{props.massage}</p>
                    <button className="btn btn-outline-warning mx-2" type="submit">Delete</button>
                    <button className="btn btn-outline-warning mx-2" type="submit">Update</button>
                </div>
            </div>

            <div className="card m-3 text-center">
                <img src="./download.jpg" className="card-img-top" alt="not available"/>
                <div className="card-body">
                    <h5 className="productName">{props.productName}</h5>
                    <h5 className="price">{props.price}</h5>
                    <p className="massage">{props.massage}</p>
                    <button className="btn btn-outline-warning mx-2" type="submit">Delete</button>
                    <button className="btn btn-outline-warning mx-2" type="submit">Update</button>
                </div>
            </div>

            <div className="card m-3 text-center">
                <img src="./download.jpg" className="card-img-top" alt="not available"/>
                <div className="card-body">
                    <h5 className="productName">{props.productName}</h5>
                    <h5 className="price">{props.price}</h5>
                    <p className="massage">{props.massage}</p>
                    <button className="btn btn-outline-warning mx-2" type="submit">Delete</button>
                    <button className="btn btn-outline-warning mx-2" type="submit">Update</button>
                </div>
            </div>
        </div>
    );
}

Product.propTypes = {
    productName: PropTypes.string,
    price: PropTypes.number,
    massage: PropTypes.string 
}

Product.defaultProps = {
    productName: "Toy",
    massage: "Some quick example text to build on the card title and make up the bulk of the card's content."

}