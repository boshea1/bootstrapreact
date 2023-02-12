import { NavLink, useNavigate} from 'react-router-dom';
import React, { useState } from 'react';
import { UserAuth } from '../context/AuthContext';

 
const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('')
    const { createUser } = UserAuth();
    const navigate = useNavigate()

       const onSubmit = async (e) => {
        e.preventDefault();
        setError('');
        try {
            await createUser(email, password);
            navigate('/account')
          } catch (e) {
            setError(e.message);
            console.log(e.message);
          }
        };

        
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