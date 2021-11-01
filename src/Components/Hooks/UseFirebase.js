import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../FIrebase/Firebase.init";
initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({})
    const [isLoading,setIsloading]=useState(true)

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();


    const signInWithGoogle = () => {
        // const googleProvider = new GoogleAuthProvider();
     return   signInWithPopup(auth, googleProvider)
            
        .finally(()=>setIsloading(false))

    }
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user)
            }
            else {
                setUser({})
            }
            setIsloading(false)
        });
        return () => unsubscribed;
    }, [])
    const signout = () => {
        setIsloading(true)
        signOut(auth)
            .then(() => { })
            .finally(() => setIsloading(false));
    }
    return {
        user,
        signInWithGoogle,
        signout,
        isLoading

    }
}
export default useFirebase;