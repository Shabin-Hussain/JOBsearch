import { commonApi } from "./commonApi"
import { serverUrl } from "./serverUrl"




//api to register employer account
export const empregApi = async(reqBody)=>{
    return await commonApi('POST',`${serverUrl}/employers`,reqBody,"")
}

//api to login employer account
export const emploginApi = async()=>{
    return await commonApi('GET',`${serverUrl}/employers`,"")
}