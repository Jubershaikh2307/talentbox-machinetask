import * as type from "./actionType"
import axios from "axios"

export const signup = (data)=> (dispatch)=>{
    dispatch({type:type.POSTUSERDATA_REQUEST})
    axios.post("",data).then((res)=>{
        dispatch({type:type.POSTUSERDATA_SUCCESS})
    }).catch((err)=>{
        dispatch({type:type.POSTUSERDATA_FAIL})
    })
}

export const signin = ()=> (dispatch)=>{
    dispatch({type:type.GETUSERDATA_REQUEST})
    axios.get("").then((res)=>{
        dispatch({type:type.GETUSERDATA_SUCCESS,payload:res.token})
    }).catch((err)=>{
        dispatch({type:type.GETUSERDATA_FAIL})
    })
}