import axios from "axios";

// basic structure
export const commonApi= async(method,url,body,reqHeader)=>{
    let reqConfig = {
        method,
        url,
        data: body,
        headers:{
            "Content-Type":"application/json"
        }
    }
    return await axios(reqConfig).then(res=>{
        return res
    }).catch(err=>{
        return err
    })
}