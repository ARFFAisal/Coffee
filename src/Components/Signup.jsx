import React, { use } from "react";
import { AuthContext } from "../context/AuthContext";

const Signup = () => {

    const {createUser} = use(AuthContext);
    console.log(createUser);

    const handleSignUp = e =>{
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const email = formData.get('email');
        const password = formData.get('password');
        console.log(email, password);

        createUser(email, password)
        .then(result => {
            console.log(result.user);
        })
        .then(error=>{
            console.log(error);
        })
        
        
    }

  return (
        <div className="card bg-base-100  max-w-sm mx-auto shrink-0 shadow-2xl">
               <h1 className="text-5xl font-bold">Sign Up now!</h1>
          <div className="card-body">
            <form onSubmit={handleSignUp} className="fieldset">
              <label className="label">Email</label>
              <input type="email" name='email' className="input" placeholder="Email" />
              <label className="label" >Password</label>
              <input type="password" name='password' className="input" placeholder="Password" />
              <div>
                <a className="link link-hover">Forgot password?</a>
              </div>
              <button className="btn btn-neutral mt-4">Sign Up</button>
            </form>
          </div>
        </div>
     
  );
};

export default Signup;
