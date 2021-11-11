import React,{useState,useEffect} from 'react';
// import validate from './validateInfo';
import useForm from './useForm';
// import FormSuccess from './FormSuccess';
import { Link, useHistory } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Form.css';
import axios from "axios";

const FormSignup = ({ submitForm }) => {
  const history=useHistory()
  let user={
    username:"",
    email:"",
    password:"",
    password2:""
  }
  let user1={
    username:"",
    email:"",
    password:"",
  }

  const [formv,setv]=useState(user);
  const [formv1,setv1]=useState(user1);
  const [error,seterr]=useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const addit=()=>{
    setv1({username:formv.username,
    email:formv.email,
  password:formv.password2
  });
  }

const handleSubmit=(e)=>{
  e.preventDefault();
  setIsSubmitting(true);
  seterr(validateInfo(formv));
 
  // START VALIDATION

  if (Object.keys(error).length === 0 && isSubmitting) {
    addit();
    axios.post("http://localhost:300/users",formv).then(history.replace('/Login'));
  }

}
useEffect(
  () => {
    if (Object.keys(error).length === 0 && isSubmitting) {
      setIsSubmitting(true);
    }
  },
  [error]
);


  const handleChange=(e)=>{
    const {name,value}=e.target;
    setv({...formv,[name]:value});
  }

  function validateInfo(values) {
    let errors = {};
  
    if (!values.username.trim()) {
      errors.username = 'Username required';
    }
   
  
    if (!values.email) {
      errors.email = 'Email required';
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = 'Email address is invalid';
    }
    if (!values.password) {
      errors.password = 'Password is required';
    } else if (values.password.length < 6) {
      errors.password = 'Password needs to be 6 characters or more';
    }
  
    if (!values.password2) {
      errors.password2 = 'Password is required';
    } else if (values.password2 !== values.password) {
      errors.password2 = 'Passwords do not match';
    }
    return errors;
  }
//END VALIDATION 

//START SIGN UP FORM
  return (
    <div className='form-content-right'>
      <form onSubmit={handleSubmit} className='form' noValidate>
        <h1>
          
          Get started with us today! Create your account by filling out the
          information below.
        </h1>
        <div className='form-inputs'>
          <label className='form-label'>Username</label>
          <input
            className='form-input'
            type='text'
            name='username'
            placeholder='Enter your username'
            value={formv.username}
            onChange={handleChange}
          />
          {error.username && <p>{error.username}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Email</label>
          <input
            className='form-input'
            type='email'
            name='email'
            placeholder='Enter your email'
            value={formv.email}
            onChange={handleChange}
          />
          {error.email && <p>{error.email}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Password</label>
          <input
            className='form-input'
            type='password'
            name='password'
            placeholder='Enter your password'
            value={formv.password}
            onChange={handleChange}
          />
          {error.password && <p>{error.password}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Confirm Password</label>
          <input
            className='form-input'
            type='password'
            name='password2'
            placeholder='Confirm your password'
            value={formv.password2}
            onChange={handleChange}
          />
          {error.password2 && <p>{error.password2}</p>}
        </div>
        <button className='form-input-btn' type='submit'>
          Sign up
        </button>
        <span className='form-input-login'>
          Already have an account? Login <Link to='/Login'><a>here</a></Link>
        </span>
      </form>
    </div>
  );
};

export default FormSignup;
