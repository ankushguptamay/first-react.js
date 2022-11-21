import React from 'react'

export default function AddProduct(props){
    return(
        <div className='container'>
            <div className='m-3 text-center'>
                <form>
                    <div className="mb-3">
                        <h5>Product Name</h5>
                        <input type="text"/>
                    </div>
                    <div className="mb-3">
                        <h5>Price</h5>
                        <input type="number"/>
                    </div>
                    <div className="mb-3">
                        <h5>Massage</h5>
                        <input type="text"/>
                    </div>
                    <button className="btn btn-outline-info mx-2" type="submit">Add</button>
                </form>
            </div>
        </div>
    );
}