import { createStore } from "redux";
interface IAppState {
    users: any[];
    filterUser: any[];
    user: any;
}
const initialstate: IAppState = {
    users: [],
    filterUser: [],
    user: null
}



const reducer = (state = initialstate, action: any) => {
    switch (action.type) {
        case "REGISTER":
            return {
                ...state,
                users: [...state.users, action.payload]
            }
        case "LOGIN":
            return {
                ...state,
                user: action.payload
            }
        case "LOGOUT":
            return {
                ...state,
                user: action.payload
            }
        case "DESC-SORT":

            console.log(state.users);
            console.log("sort");
            return {
                ...state,
                users: [...state.users.sort((a: any, b: any) => { return a.name.localeCompare(b.name) }).reverse()]
            }
        case "ASC-SORT":

            console.log(state.users);
            console.log("sort");
            return {
                ...state,
                users: [...state.users.sort((a: any, b: any) => { return a.name.localeCompare(b.name) })]
            }
        case "FILTER":
            console.log("filter");
            console.log(state.users);
            if (action.payload.length > 0) {
                const filterdata = state.users.filter((item: any, ind: number) => {
                    console.log(typeof (item.name))
                    return (item.name.includes(action.payload))
                })
                console.log(typeof (action.payload));
                console.log(filterdata);
                console.log("reducer");
                return {
                    ...state,
                    filterUser: filterdata
                }
            } else {
                console.log("else");
                return {
                    ...state,
                    users: state.users
                }
            }
        case "DELETE":
            return {
                ...state,
                users: [...state.users.filter(item => action.payload !== item.id)]
            }
        default:
            return state;
    }

}

export default createStore(reducer);






// import { Action } from "@remix-run/router";
// import { createStore, combineReducers } from "redux";
// interface IAppState {
//     users: any[];
//     filterUser: any[];
//     user: any;
// }
// const initialstate: IAppState = {
//     users: [],
//     filterUser: [],
//     user: null
// }



// const reducerA = (state = initialstate, action: any) => {
//     switch (action.type) {
//         case "REGISTER":
//             return {
//                 ...state,
//                 users: [...state.users, action.payload]
//             }
//         // case "LOGIN":
//         //     return {
//         //         ...state,
//         //         user: action.payload
//         //     }
//         // case "LOGOUT":
//         //     return {
//         //         ...state,
//         //         user: action.payload
//         //     }
//         case "DESC-SORT":

//             console.log(state.users);
//             console.log("sort");
//             return {
//                 ...state,
//                 users: [...state.users.sort((a: any, b: any) => { return a.name.localeCompare(b.name) }).reverse()]
//             }
//         case "ASC-SORT":

//             console.log(state.users);
//             console.log("sort");
//             return {
//                 ...state,
//                 users: [...state.users.sort((a: any, b: any) => { return a.name.localeCompare(b.name) })]
//             }
//         case "FILTER":
//             console.log("filter");
//             console.log(state.users);
//             if (action.payload.length > 0) {
//                 const filterdata = state.users.filter((item: any, ind: number) => {
//                     console.log(typeof (item.name))
//                     return (item.name.includes(action.payload))
//                 })
//                 console.log(typeof (action.payload));
//                 console.log(filterdata);
//                 console.log("reducer");
//                 return {
//                     ...state,
//                     filterUser: filterdata
//                 }
//             } else {
//                 console.log("else");
//                 return {
//                     ...state,
//                     users: state.users
//                 }
//             }
//         case "DELETE":
//             return {
//                 ...state,
//                 users: [...state.users.filter(item => action.payload !== item.id)]
//             }
//         default:
//             return state;
//     }

// }
// const reducerB = (state = initialstate, action: any) => {
//     switch (action.type) {
//         case "LOGIN":
//             return {
//                 ...state,
//                 user: action.payload
//             }
//         case "LOGOUT":
//             return {
//                 ...state,
//                 user: action.payload
//             }
//     }
// }

// //export default createStore(reducer);
// const rootReducer = combineReducers({ ra: reducerA, rb: reducerB });
// export default createStore(rootReducer);
