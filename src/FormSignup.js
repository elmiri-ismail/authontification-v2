import React from 'react';
import useForm from './useForm';
import validate from './validatenInfo';
import './Form.css';

const FormSignup = () => {
    const { handleChange, values, handleSubmit, errors} = useForm(validate);

    return (
        <div className='form-content-right'>
            <form className='form' onSubmit={handleSubmit}>
                <center>
                    <h1>Get started with us today ! create your account by filling out the information below. </h1>
                    <div className='form-inputs'>
                        <label htmlFor='username' className='form-label' >
                            Username
                        </label>
                        <input id='username' type='text' name='username' className='form-input' placeholder='Enter your username' value={values.username} onChange={handleChange} />
                        {errors.username && <p>{errors.username}</p>}

                    </div>

                    <div className='form-inputs'>
                        <label htmlFor='email' className='form-label'>
                            Email
                        </label>

                        <input id='email' type='email' name='email' className='form-input' placeholder='Enter your email' value={values.email} onChange={handleChange} />
                        {errors.email && <p>{errors.email}</p>}

                        <div className='form-inputs'>
                            <label htmlFor='password' className='form-label'>
                                password
                            </label>
                            <input id='password' type='password' name='password' className='form-input' placeholder='Enter your password' value={values.password} onChange={handleChange} />
                            {errors.password && <p>{errors.password}</p>}

                        </div>
                        <div className='form-inputs'>
                            <label htmlFor='password2' className='form-label'>
                                Confirm password
                            </label>

                            <input id='password2' type='password' name='password2' className='form-input' placeholder='Enter your password2' value={values.password2} onChange={handleChange} />
                            {errors.password2 && <p>{errors.password2}</p>}

                        </div>
                        <button className='form-input-btn'
                            type='submit'>
                            Sign up
                        </button>
                        <span className="form-input-login">
                            Already have an account ? Login <a href="#">here</a>
                        </span>

                    </div>
                </center>
            </form>

        </div>

    );
}

export default FormSignup;