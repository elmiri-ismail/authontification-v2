import React ,{useState} from 'react';
import { Link } from 'react-router-dom';
import axios from "axios"

import 'bootstrap/dist/css/bootstrap.min.css';
const Login = () => {

    let user={
        email:"",
        password:""
      }
      const [formv,setv]=useState(user);

    const chng=(e)=>{
        const {name,value}=e.target;
        setv({...formv,[name]:value});
    }
    
    const f=()=>{
        let v=false;
        axios.get("http://localhost:300/users").then(
        user=>{
            for(let i=0;i<user.data.length;i++){
                if(user.data[i].email===formv.email){
                    v=true;
                }
            }
            if(v===true){
                alert("equal");
            }
        }
        
    );
    }

    return (
        <div class="container mt-5">
            <div class="row">
                <div className="col  mt-5">
                    <form action="" method="POST" class="login-email">
                        <h1 >Login</h1>
                        <div class="col form-group mt-3" >
                            <input class="form-control w-" type="email" placeholder="Email" onChange={chng} name="email" value={formv.email} />
                        </div>
                        <div class="col form-group mt-3" >
                            <input class="form-control" type="password" placeholder="Password" onChange={chng} name="password" value={formv.password} />
                        </div>
                        <div class="col form-group mt-3" >
                            <a className="btn btn-outline-block btn-primary mb-5" onClick={f} name="submit" >login</a>
                        </div>
                        <p >Don't have an account? <Link to='/'> <a >Register Here</a></Link>.</p>
                    </form>
                </div>
                <div className="col  mt-5">
                    <img src='img/secure.svg' alt='success-image' className="w-100 mt-2" /></div>

            </div>
        </div>

    )
}

export default Login;
