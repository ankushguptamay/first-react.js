import React from 'react'

export default function LogIn (props){
    return(
        <div className='container'>
            <div className='m-3 text-center'>
                <form>
                    <div className="mb-3">
                        <label htmlFor="email" className="col-sm-2 col-form-label">Email:</label>
                        <input type="email" id="email" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="col-sm-2 col-form-label">Password:</label>
                        <input type="password" id="password"/>
                    </div>
                    <button className="btn btn-outline-info" type="submit">LogIn</button>
                </form>
            </div>
        </div>
    );
}