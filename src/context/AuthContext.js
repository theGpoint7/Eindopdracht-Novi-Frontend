import {useState, createContext, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const AuthContext = createContext(null)

function AuthContextProvider({children}){
    const navigate = useNavigate();
    const [isAuth, toggleIsAuth] = useState({
        isAuthenticated: false,
        user: null,
        status: "pending",
    });
    useEffect(()=> {
        const token = localStorage.getItem('token');
        if (token){
            fetchUserData(token);
        }else{
            toggleIsAuth({
                isAuthenticated: false,
                user: null,
                status: 'done'});
        }
    },[])
    async function fetchUserData(token){
        try{
            const response = await axios.get(`https://frontend-educational-backend.herokuapp.com/api/user`,{
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                }
            });
            toggleIsAuth({
                ...isAuth,
                isAuthenticated: true,
                user: {
                    username: response.data.username,
                    email: response.data.email,
                    id: response.data.id,
                    roles: response.data.roles,
                },
                status: "done",
            })
        }catch(error){
            localStorage.clear();
        }
    }
    function login(data){
        localStorage.setItem('token',data.accessToken);
        toggleIsAuth({
            ...isAuth,
            isAuthenticated: true,
            user: {
                username:data.username,
                email:data.email,
                id:data.id,
                role:data.role,
            },
            status: "done",
        });
    }
    function logout(){
        console.log("aan het uitloggen")
        localStorage.clear()
        toggleIsAuth({
            isAuthenticated: false,
            user: null,
            status: "done",
        });
        navigate('/');
    }
    const contextData = {
        isAuthenticated: isAuth.isAuthenticated,
        user: isAuth.user,
        login: login,
        logout: logout
    };
    return (
        <AuthContext.Provider value={contextData}>
            {isAuth.status === 'done' ? children : <p>Loading...</p>}
        </AuthContext.Provider>
    );
}
export default AuthContextProvider;