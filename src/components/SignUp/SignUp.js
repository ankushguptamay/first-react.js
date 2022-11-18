import React from 'react'

export default function SignUp (props){
    return(
        <div className='container'>
            <div className='m-3 text-center'>
                <form>
                    <div className="mb-3">
                        <h5>User Name</h5>
                        <input type="text"/>
                    </div>
                    <div className="mb-3">
                        <h5>Password</h5>
                        <input type="password"/>
                    </div>
                    <div className="mb-3">
                        <h5>Comfirm Password</h5>
                        <input type="password"/>
                    </div>
                    <button className="btn btn-outline-info mx-2" type="submit">SignUp</button>
                </form>
            </div>
        </div>
    );
}
