import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./UserList.scss";
import { useNavigate } from "react-router-dom";
import upArrow from "../../Icon/upArrow.jpg";
import downArrow from "../../Icon/downArrow.jpg";

export const UserList = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const Users = useSelector((state: any) => state.users);
    const FilterUser = useSelector((state: any) => state.filterUser);

    const [filterData, setFilterData] = useState([]);
    const [searchVal, setSearchVal] = useState('');
    const [asc, setAsc] = useState(true);


    const filtering = (search: string) => {
        setSearchVal(search);
        dispatch({ type: 'FILTER', payload: search })

    }
    const logout = () => {
        dispatch({ type: "LOGOUT", payload: null })
        navigate("/")
    }
    const sorting = () => {
        if (asc) {
            dispatch({
                type: 'ASC-SORT'

            })
        } else {
            dispatch({
                type: 'DESC-SORT'

            })
        }
        setAsc(!asc);
    }
    const deleteUser = (id: any) => {
        dispatch({
            type: "DELETE",
            payload: id
        })
    }
    return (
        <div className="user-list">
            <div className="logout-div">
                <input className="logout" type="button" value="LOGOUT" onClick={logout} />
            </div>
            <div className="filter-div">
                <input className="filter" type="text" placeholder="Search By Name" onChange={(e) => { filtering(e.target.value) }} />
            </div>

            <div className="div1">
                <div className="div2">
                    <table>
                        <thead>
                            <tr>
                                <th>Name<img src={asc ? upArrow : downArrow} alt="upArrow" onClick={sorting} /></th>
                                <th>Username</th>
                                <th>Password</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                searchVal ?
                                    FilterUser && FilterUser.map((item: any, ind: any) => {
                                        return (<tr key={item.id}>
                                            <td>{item.name}</td>
                                            <td>{item.username}</td>
                                            <td>{item.password}</td>
                                            <td>Delete</td>
                                        </tr>)
                                    })
                                    :
                                    Users && Users.map((item: any, ind: any) => {
                                        return (<tr key={item.id}>
                                            <td>{item.name}</td>
                                            <td>{item.username}</td>
                                            <td>{item.password}</td>
                                            <td style={{ cursor: "pointer" }} onClick={() => { deleteUser(item.id) }}>Delete</td>
                                        </tr>)
                                    })
                            }
                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    )
}


