import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import "./Registration.scss";

export const Registration = () => {
    const dispatch = useDispatch();
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const register: any = () => {

        dispatch({
            type: 'REGISTER',
            payload: {
                id: (new Date).getTime(),
                name, username, password
            }
        })
        setName('')
        setUsername('')
        setPassword('')
        setConfirmPassword('')
        alert("user registered")
    }

    return (
        <div className="registration">
            <h2>USER REGISTRATION</h2>
            <form className="register-form">
                <input className="box" type="text" placeholder="Name" value={name} onChange={(e) => { setName(e.target.value) }} />
                <input className="box" type="text" placeholder="Username" value={username} onChange={(e) => { setUsername(e.target.value) }} />
                <input className="box" type="text" placeholder="Password" value={password} onChange={(e) => { setPassword(e.target.value) }} />
                <input className="box" type="text" placeholder="Confirm Password" value={confirmPassword} onChange={(e) => { setConfirmPassword(e.target.value) }} />
                <input className="register-btn" type="button" value="REGISTER" onClick={register} />
            </form>
        </div>
    )
}