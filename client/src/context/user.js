import React, { useState, useContext, useCallback } from "react";
import {useHistory} from "react-router-dom"
import {MessageContext} from "./message"

// const baseUrl = "http://localhost:3000/api/v1"
const UserContext = React.createContext()

function UserProvider({children}) {
    const [user, setUser] = useState(null);
    const history = useHistory();
    const {setMessage} = useContext(MessageContext)

    const getCurrentUser = useCallback(async () => {  
        try {
            const resp = await fetch("/api/v1/me")
             if (resp.status === 200) {
                const data = await resp.json()
                setUser({...data.data.attributes})
             } else {
                const errorObj = await resp.json()
                setMessage({message: errorObj.error, color: "red"})
             }
        } catch (e) {
            setMessage({message: e.message, color: "red"})
        }
    }, [setMessage])

    const login = async (userObj) => { 
           try{
            const resp = await fetch("/api/v1/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json", 
                    "Accept": "application/json"
                }, 
                body: JSON.stringify(userObj)
           })
            if (resp.status === 202) {
                const data = await resp.json()
                setUser({...data.data.attributes})
                return true
            } else {
                const errorObj = await resp.json()
                setMessage({message: errorObj.error, color: "red"})
                return false
            }
        } catch(e) {
                setMessage(e.message)
                console.log(children)
            }
    }       

    const signup = async(userObj) => { 
        try{
            const resp = await fetch("/api/v1/signup", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json", 
                    "Accept": "application/json"
                }, 
                body: JSON.stringify(userObj)
           })
           if (resp.status === 201) {
                const data = await resp.json()
                setUser({...data.data.attribues})
                history.push("/profile")
                setMessage({message: "New User Created!", color: "green"})
           } else {
               const errorObj = await resp.json()
               setMessage({message: errorObj.error, color: "red"})
               console.log(errorObj.message)
           }
        } catch(e) {
            setMessage({message: e.message, color: "red"})
            }
    }     

    const logout = async() => {
        try {
            const resp = await fetch("api/v1/logout", {
                method: "DELETE", 
            })
             setMessage({message: "You were successfully logged out", color: "green"})
             setUser(null)
             return true
            //  history.push("/login")
        } catch(e) {
            setMessage(e.message)
            return false
        }
    }

    return (
        <UserContext.Provider value={{user, setUser, getCurrentUser, login, signup, logout}}>
            {children}
        </UserContext.Provider>
    )
}

export {UserContext, UserProvider}