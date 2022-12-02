import React from 'react'
import './Notes.css';
import PropTypes from 'prop-types';

export default function Home(props){
    return(
        <div className='container d-flex flex-wrap'>
            <div className="card m-3 text-center">
                <img src="./download.jpg" className="card-img-top" alt="not available"/>
                <div className="card-body">
                    <h5 className="editerName">{props.title}</h5>
                    <p className="note">{props.note}</p>
                    <button className="btn btn-outline-warning mx-2" type="submit">Delete</button>
                    <button className="btn btn-outline-warning mx-2" type="submit">Update</button>
                </div>
            </div>
        </div>
    );
}

Home.propTypes = {
    title: PropTypes.string,
    note: PropTypes.string 
}

Home.defaultProps = {
    title: "Ankush",
    note: "Some quick example text to build on the card title and make up the bulk of the card's content."

}