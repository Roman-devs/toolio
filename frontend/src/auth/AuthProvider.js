import {AuthContext} from './AuthContext'
import {useState, useEffect} from 'react'
import axiosConfig from '../services/axiosConfig'
import decode from 'jwt-decode'

export default function AuthProvider({children}) {
    const [token, setToken] = useState('')

    useEffect(() => {
        if (token) {
            axiosConfig.setAxiosAuthToken(token)
            sessionStorage.setItem("toolio", token);
        }
    }, [token])

    const isTokenExpired = (possibleToken) => {
        try {
            const decodedToken = decode(possibleToken)
            return decodedToken.exp < Date.now() / 1000;
        } catch (error) {
            return false
        }
    }

useEffect(() => {
    const possibleToken = sessionStorage.getItem("toolio")
    if (possibleToken && !isTokenExpired(possibleToken)) {
        setToken(possibleToken);
    }
}, [])


return (
    <AuthContext.Provider value={{token, setToken}}>
        {children}
    </AuthContext.Provider>
)
}