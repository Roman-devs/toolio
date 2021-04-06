import {useForm} from "react-hook-form";
import {Styles} from "../styling/FormStyling";
import { useState } from 'react'
import {useAuth} from "../auth/AuthContext";
import {loginUser} from "../services/loginService";
import {Redirect} from "react-router-dom";
import styled from "styled-components/macro";
import GlobalStyles from "../styling/GlobalStyles";

export default function Login (){
    const {register, handleSubmit, errors} = useForm();
    const { token, setToken } = useAuth()
    const [fetchError, setFetchError] = useState("")

    const onSubmit =  (loginData) => {
        console.log(loginData)
        loginUser(loginData)
            .then(setToken)
            .catch(() => setFetchError("Wrong credentials!"))
    }
    if (token) {
        return <Redirect to="/" />
    }

    return (

        <Styles>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Logo><img src={process.env.PUBLIC_URL + '/pictures/TooLioLogo.png'} alt="Logo"/></Logo>
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

export const Logo = styled.div`
  img{
    height: 5rem;
    padding-bottom: 2rem;
  }
`