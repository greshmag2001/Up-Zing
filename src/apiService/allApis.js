import { BASE_URL } from './baseurl'
import { commonApi } from './commonstructure'

// video add
export const addVideoApi=async(bodyData)=>{
    return await commonApi('POST',`${BASE_URL}/videos`,bodyData)
}
// get all videos
export const getVideoApi=async()=>{
    return await commonApi('GET',`${BASE_URL}/videos`,{})
}
// delete video
export const deleteVideoApi=async(id)=>{
    return await commonApi('DELETE',`${BASE_URL}/videos/${id}`,{})
}

// category add
export const addCatApi=async(bodyData)=>{
    return await commonApi('POST',`${BASE_URL}/categories`,bodyData)
}

// get all category
export const getCatApi=async()=>{
    return await commonApi('GET',`${BASE_URL}/categories`,{})
}

// delete category
export const deleteCatApi=async(categoryId)=>{
    return await commonApi('DELETE',`${BASE_URL}/categories/${categoryId}`,{})
}

// add history
export const saveHistoryApi =async(videoDetails)=>{
    return await commonApi(`POST`,`${BASE_URL}/history`,videoDetails)
}

// get history
export const getHistoryApi=async()=>{
    return await commonApi('GET',`${BASE_URL}/history`,{})
}

// delete history
export const deleteHistoryApi=async(id)=>{
    return await commonApi('DELETE',`${BASE_URL}/history/${id}`,{})
}

// get single vid api (drag)
export const getAVidApi= async(vId)=>{
    return await commonApi('GET',`${BASE_URL}/videos/${vId}`,{})
}

// update category
export const updateCatApi=async(categoryId,updatedCatdetails)=>{
    return await commonApi('PUT',`${BASE_URL}/categories/${categoryId}`,updatedCatdetails)
}
