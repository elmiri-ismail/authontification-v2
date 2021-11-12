import React from 'react';
import { Link } from 'react-router-dom';


const FormSuccess = () => {
    return (
        <div >
            <div className="d-flex justify-content-center align-items-center">
            <h1>WELCOME <br/>YOU'RE <br/>NEW HERE</h1>
            <img src='img/undraw.svg' alt='success-image' className="w-25 mt-5" />

            </div>
            <button className=" btn btn-primary "> <Link className="logout" to="/Lo">Log out</Link> </button>




        </div>
    )
}

export default FormSuccess;
