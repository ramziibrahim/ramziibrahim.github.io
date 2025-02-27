import { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import Home from "./home";
import Login from '../Login';
import '../../firebase'; // Update the import path to go up two levels to src

const Dashboard = () => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const auth = getAuth();

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            try {
                if(user) {
                    setUser(user);
                } else {
                    setUser(null);
                }
            } catch (error) {
                console.error("Auth state change error:", error);
            } finally {
                setLoading(false);
            }
        });

        return () => unsubscribe();
    }, [auth]);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
       <div>
           {user ? <Home /> : <Login />}
       </div>
    )
}

export default Dashboard;