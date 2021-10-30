import { useEffect, useState } from "react";
import { getAuth, signOut, signInWithPopup, onAuthStateChanged, GoogleAuthProvider, GithubAuthProvider, FacebookAuthProvider, createUserWithEmailAndPassword, sendEmailVerification, updateProfile, signInWithEmailAndPassword } from "firebase/auth";
import initializeAuthentication from "../Firebase/Firebase.init";


initializeAuthentication();

const useFirebase = () => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [user, setUser] = useState({});
    const [errors, setError] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repassword, setRePassword] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    const fbProvider = new FacebookAuthProvider();


    const googleSignIn = () => {
        return signInWithPopup(auth, googleProvider)

    };

    const githubSignIn = () => {
        return signInWithPopup(auth, githubProvider)

    };

    const fbSignIn = () => {
        return signInWithPopup(auth, fbProvider)
    };

    const handleManulaLogin = () => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = () => {
        setIsLoading(true);
        signOut(auth)
            .then(() => {
                setUser({});
                console.log('Log out successful');

            })
            .catch(error => {
                console.log(error.message);
            })
            .finally(() => setIsLoading(false));
    };


    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            }
            setIsLoading(false);

        });
    });

    const getEmail = (event) => {
        setEmail(event.target.value);
    };

    const getPassword = (event) => {
        setPassword(event.target.value);
    };
    const getRePassword = (event) => {
        setRePassword(event.target.value);
    };

    const handleNameChange = (event) => {
        setName(event.target.value);
    }

    const handlePhoneChange = (event) => {
        setPhone(event.target.value);
    }

    const handleRegistation = (event) => {
        event.preventDefault();

        if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
            setError('Password Must contain two upper case');
            return
        };

        if (!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password)) {
            setError('Password minimum eight characters, at least one letter and one number');
            return
        };

        if (password !== repassword) {
            setError("Didn't match password");
            return
        };

        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                console.log(email, password);
                console.log(result.user);
                setError('');
                verifyEmail();
                setUserName();
                setUser({});

            })
            .catch((error) => {
                setError(error.message);
            });
    };

    const verifyEmail = () => {
        sendEmailVerification(auth.currentUser)
            .then(result => {
            })
    };

    const setUserName = () => {
        updateProfile(auth.currentUser, { displayName: name, phoneNumber: phone, photoURL: "https://i.pinimg.com/564x/0f/05/50/0f05505b9b17b03f1fc4f629d1ec4f86.jpg" })
            .then(result => {
                console.log("update", result.user);
            })
            .catch(error => {
                console.log('username ', error.message)
            })

    };




    return {
        logOut,
        fbSignIn,
        githubSignIn,
        googleSignIn,
        getEmail,
        getPassword,
        getRePassword,
        handleRegistation,
        handleNameChange,
        handlePhoneChange,
        handleManulaLogin,
        user,
        setError,
        errors,
        name,
        isLoading

    }

}

export default useFirebase;