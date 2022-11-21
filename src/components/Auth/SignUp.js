import React from 'react'

export default function SignUp (props){
    return(
        <div className='container'>
            <div className='m-3 text-center'>
                <form>
                    <div className="mb-3">
                        <label for="name" className="col-sm-2 col-form-label">User Name:</label>
                        <input type="text" id='name'/>
                    </div>
                    <div className="mb-3">
                        <label for="email" className="col-sm-2 col-form-label">Email:</label>
                        <input type="email" id="email" />
                    </div>
                    <div className="mb-3">
                        <label for="password" className="col-sm-2 col-form-label">Password:</label>
                        <input type="password" id="password"/>
                    </div>
                    <button className="btn btn-outline-info" type="submit">SignUp</button>
                </form>
            </div>
        </div>
    );
}
