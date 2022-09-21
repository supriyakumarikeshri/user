import React from 'react';
import logo from './logo.svg';
import './App.scss';
import { useDispatch, useSelector } from 'react-redux';
import { Registration } from './component/Registration/Registration';
import { Login } from './component/Login/Login';
import { Homepage } from './component/Homepage';
import { UserList } from './component/UserList/UserList';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  const Users = useSelector((state: any) => state.users);
  const user = useSelector((state: any) => state.user);
  console.log(user);
  const dispatch = useDispatch();
  console.log(Users);
  return (
    <div className="App">

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/user" element={<UserList />} />
      </Routes>

    </div>
  );
}

export default App;
 /* <div className='login'>
 <Login /> */
/* {user ?
    <div>
      <UserList userlist={Users} />
      <input type="button" value="logout" onClick={() => {
        dispatch({ type: "LOGOUT", payload: null })
      }} />
    </div>
    :
    <Login />

  } */
/* </div>
<div className='register'>
  <Registration />
</div> */
/* <Route path="/BCM" element={<BusinessContinuityManagement />} />
<Route path="/BCP" element={<BusinessCriticalProcess />} /> */