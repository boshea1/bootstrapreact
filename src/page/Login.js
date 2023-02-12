import React, {useState} from 'react';

import { UserAuth } from '../context/AuthContext';
import { NavLink,useNavigate} from 'react-router-dom'
 
const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error,setError] = useState('');
    const navigate = useNavigate();
    const {signIn} = UserAuth();
       

    const onLogin = async (e) => {
        e.preventDefault();
        setError('')
        try{
            await signIn(email,password)
            navigate('/home')
        } catch (e) {
            setError(e.message)
            console.log(e.message)
        }
    }
    // const onLogin = (e) => {
    //     e.preventDefault();
    //     signInWithEmailAndPassword(auth, email, password)
    //     .then((userCredential) => {
    //         // Signed in
    //         const user = userCredential.user;
    //         navigate("/home")
    //         console.log(user);
    //     })
    //     .catch((error) => {
    //         const errorCode = error.code;
    //         const errorMessage = error.message;
    //         console.log(errorCode, errorMessage)
    //         alert('These credentials are not valid')
    //     });
    // }
 
    return(
        <>
            <main >        
                <section>
                    <div>                                            
                        <h1
                        className='font-mono ml-5 mt-2 bg-yellow-300 inline-block'
                        > FocusApp </h1>                       
                                                       
                        <form>                                              
                            <div
                            className='m-4'>
                                <label htmlFor="email-address" className='w-24 border-zinc-700 font-mono'>
                                Email address
                                </label>
                                <input
                                    className='w-36 border border-rose-700 border-solid rounded'
                                    id="email-address"
                                    name="email"
                                    type="email"                                    
                                    required                                                                                
                                    placeholder="Email address"
                                    onChange={(e)=>setEmail(e.target.value)}
                                />
                            </div>

                            <div
                            className='m-4'>
                                <label htmlFor="password"
                                className='w-24 border-zinc-700 border-solid font-mono'>
                                    Password
                                </label>
                                <input
                                    className='border border-zinc-700 rounded'
                                    id="password"
                                    name="password"
                                    type="password"                                    
                                    required                                                                                
                                    placeholder="Password"
                                    onChange={(e)=>setPassword(e.target.value)}
                                />
                            </div>
                                                
                            <div>
                                <button                                    
                                    onClick={onLogin} 
                                    className='font-mono text-blue-500 hover:text-blue-800 underline ml-5'                                       
                                >      
                                    Login                                                                  
                                </button>
                            </div>                               
                        </form>
                       
                        <p className="text-sm text-center font-mono bg-yellow-300 hover:text-bluee-800">
                            No account yet? {' '}
                            <NavLink to="/signup">
                                Sign up
                            </NavLink>
                        </p>
                                                   
                    </div>
                </section>
            </main>
        </>
    )
}
 
export default Login