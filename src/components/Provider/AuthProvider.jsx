import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../../firebase.config';

export const AuthContex = createContext(null);

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const createUser = (email, password) => {
        setLoader(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signIn = (email, password) => {
        setLoader(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logOut = () => {
        return signOut(auth);
    }

    const [loader, setLoader] = useState(true);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoader(false);
        });
        return () => {
            return unsubscribe;
        }
    }, [])

    const authInfo = {
        user,
        loader,
        createUser,
        signIn,
        logOut,
    }

    return (
        <div>
            <AuthContex.Provider value={authInfo}>
                {children}
            </AuthContex.Provider>
        </div>
    );
};

export default AuthProvider;
