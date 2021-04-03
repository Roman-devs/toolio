import {useForm} from "react-hook-form";
import {Styles} from "../styling/FormStyling";
import { useState } from 'react'

export default function Login (){
    const {register, handleSubmit, errors} = useForm();
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');
    const onSubmit = userData => {
        console.log(userData)
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
                <input name="password"
                       ref={register({required: true})}/>
                {errors.password && "Required"}

                <input className="submitButton" type="submit" value="Login!"/>
            </form>
        </Styles>
    )
}