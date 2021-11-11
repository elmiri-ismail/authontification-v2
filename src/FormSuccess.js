import React from 'react';
import { Link } from 'react-router-dom';


const FormSuccess = () => {
    return (
        <div>
            <div ><h1>WELCOME</h1>
                
            </div>

            <img src='img/check.png' alt='success-image' className="form-img-2" />
           <button className="mt-5"> <Link className="logout" to="/">Log out</Link> </button>
            
        </div>
    )
}

export default FormSuccess;
