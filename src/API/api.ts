import axios from "axios";
import {useSelector} from "react-redux";
import {AppStateType} from "../APP/store";


//
const instance = axios.create({
    withCredentials:true,
    baseURL:`https://social-network.samuraijs.com/api/1.0/`,
    headers:{
        "API-KEY":"37bdb382-9e4d-4b43-8daf-6560697dd4a0"
    }
})
// export const userAPI={
//     getUsers(currentPage:number,pageSize:number){
//         return instance.get(`users?page=${currentPage}&count=${pageSize}`)
//             .then(response=>{
//                 return response.data;
//             })
//     }
// }
//
