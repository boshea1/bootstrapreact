import React from 'react'

import {  
    signOut,
    onAuthStateChanged,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword } from "firebase/auth";

    import {auth} from '../firebase';

import { useEffect, 
          useState, 
          useContext, 
          createContext} from 'react';


const UserContext = createContext();

export const AuthContext = ({children}) => {
    const [user, setUser] = useState({});
    console.log('user',user)
    console.log(children)

    const createUser = (email,password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    };

 


        const signIn = (email,password) =>{
            return signInWithEmailAndPassword(auth,email,password)
        }


    const logout = () => {
        return signOut(auth)
    }
    
   
   

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
          console.log(currentUser);
          setUser(currentUser);
        });
        return () => {
          unsubscribe();
        };
      }, []);

    

  return (
    <UserContext.Provider value={{createUser, user, logout, signIn}}>
    {children}
    </UserContext.Provider>
  )
}

export const UserAuth = () => {
    return useContext(UserContext);
}