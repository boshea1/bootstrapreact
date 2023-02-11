import React from 'react';
import {  signOut,onAuthStateChanged } from "firebase/auth";
import {auth} from '../firebase';
import { useNavigate} from 'react-router-dom';

import { useEffect, useState } from 'react';
 
import NavComponent from '../components/NavComponent'
import Heroslider from '../components/HeroSlider'

const Home = () => {
    const navigate = useNavigate();
 
    const handleLogout = () => {               
        signOut(auth).then(() => {
        // Sign-out successful.
            navigate("/");
            console.log("Signed out successfully")
        }).catch((error) => {
        // An error happened.
        });
    }
    // var user = auth.currentUser
    const [user, setUser] = useState({});
    console.log('user',user)

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
          console.log(currentUser);
          setUser(currentUser);
        });
        return () => {
          unsubscribe();
        };
      }, []);
    
   
    return(
        <>
            <nav>
                <p
                className='font-mono ml-5 mt-2 bg-yellow-300 inline-block'>
                    Welcome Home
                </p>
 
                <div>

                    {user ? 
                        <>
        			<button onClick={handleLogout}
                                                        className='font-mono text-blue-500 hover:text-blue-800 underline ml-5'                                       
                                                        >
                        Logout
                    </button>
                        <NavComponent/>
                    <Heroslider/>
                    </>
                    :
                    <div>you need to login first</div>
                    }
        		</div>
            </nav>
        </>
    )
}
 
export default Home;
 