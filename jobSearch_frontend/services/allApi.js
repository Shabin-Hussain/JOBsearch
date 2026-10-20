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

//api to advertise employer jobs
export const advertiseApi = async(reqBody)=>{
    return await commonApi('POST',`${serverUrl}/jobs`,reqBody,"")
}

//api to show employer posted jobs in employer profile
export const postedApi = async()=>{
    return await commonApi('GET',`${serverUrl}/jobs`,"")
}