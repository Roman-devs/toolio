import {useForm} from "react-hook-form";
import {Styles} from "../styling/FormStyling";
import { useState } from 'react'
import {useAuth} from "../auth/AuthContext";
import {loginUser} from "../services/loginService";
import {Redirect} from "react-router-dom";

export default function Login (){
    const {register, handleSubmit, errors} = useForm();
    const { token, setToken } = useAuth()
    const [fetchError, setFetchError] = useState(null)
    const [loginDTO, setLoginDTO] = useState('');



    const onSubmit = async (loginData) => {
        setLoginDTO(loginData);
        console.log(loginData)
        try{await loginUser(loginData).then(setToken)
            setLoginDTO('');
            setFetchError(null);
        } catch (error) {
            console.log("TEST")
            setFetchError(error.message);
        }
    }
    if (token) {
        return <Redirect to="/" />
    }

    return (
        <Styles>
            <form onSubmit={handleSubmit(onSubmit)}>
                <h1>TooLio</h1>
                <label>Username</label>
                <input name="username"
                       ref={register({required: true})}/>
                {errors.username && "Required"}

                <label>Password</label>
                <input name="password" type="password"
                       ref={register({required: true})}/>
                {errors.password && "Required"}

                <input className="submitButton" type="submit" value="Login!"/>
                {fetchError && (<p style={{color:"red"}}>Wrong Credentials! Please Try Again!</p>)}
            </form>
        </Styles>
    )
}