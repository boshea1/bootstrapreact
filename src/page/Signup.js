import React, {useState} from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import {  createUserWithEmailAndPassword  } from 'firebase/auth';
import { auth } from '../firebase';
 
const Signup = () => {
    const navigate = useNavigate();
 
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');
 
    const onSubmit = async (e) => {
      e.preventDefault()
     
      await createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            console.log(user);
            navigate("/login")
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage);
            // ..
        });
 
   
    }
 
  return (
    <main >        
        <section>
            <div>
                <div>                  
                    <h1
                    className='font-mono ml-5 mt-2 bg-yellow-300 inline-block'> FocusApp </h1>                                                                            
                    <form>                                                                                            
                        <div
                        className='m-4'>
                            <label htmlFor="email-address"
                            className='w-24 border-zinc-700 font-mono'>
                                Email address
                            </label>
                            <input
                                type="email"
                                label="Email address"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}  
                                required                                    
                                placeholder="Email address" 
                                className='w-36 border border-rose-700 border-solid rounded'                               
                            />
                        </div>

                        <div 
                        className='m-4'>
                            <label htmlFor="password"
                            className='w-24 border-zinc-700 font-mono'>
                                Password
                            </label>
                            <input
                                type="password"
                                label="Create password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)} 
                                required                                 
                                placeholder="Password"  
                                className='w-36 border border-rose-700 border-solid rounded'            
                            />
                        </div>                                             
                        
                        <button
                            type="submit" 
                            onClick={onSubmit}  
                            className='font-mono text-blue-500 hover:text-blue-800 underline ml-5'                                       
                      
                        >  
                            Sign up                                
                        </button>
                                                                     
                    </form>
                   
                    <p
                    className="text-sm text-center font-mono bg-yellow-300 hover:text-bluee-800">
                        Already have an account?{' '}
                        <NavLink to="/" >
                            Sign in
                        </NavLink>
                    </p>                   
                </div>
            </div>
        </section>
    </main>
  )
}
 
export default Signup