import React from "react";
import { Login } from "./Login/Login";
import { Registration } from "./Registration/Registration";

export const Homepage = () => {
    return (
        <div className="login-register">
            <div className='login'>
                <Login />
            </div>
            <div className='register'>
                <Registration />
            </div>
        </div>
    )
}