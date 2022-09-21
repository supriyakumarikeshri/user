import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import './Login.scss';
import { UserList } from '../UserList/UserList';
import { Link, useNavigate } from "react-router-dom";


export const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const users = useSelector((state: any) => state.users)
    const login = () => {
        console.log("test");

        const loginVal = users.find((user: any) => user.username === username && user.password === password)
        console.log(loginVal);
        if (loginVal) {
            dispatch({
                type: 'LOGOUT',
                payload: loginVal
            })
            setUsername('');
            setPassword('');

            navigate("/user");


        } else {
            alert('User ID or password are wrong');
        }
    }
    return (
        <div className="login-div">
            <h2>LOG IN TO ACCOUNT</h2>
            <form className="login-form">
                <input className="box" type="text" placeholder="username" value={username} onChange={(e) => { setUsername(e.target.value) }} />
                <input className="box" type="password" placeholder="Password" value={password} onChange={(e) => { setPassword(e.target.value) }} />
                <input className="login-btn" type="button" value="LOGIN" onClick={login} />
            </form>
        </div>
    )
}