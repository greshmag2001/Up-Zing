import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { deleteHistoryApi, getHistoryApi } from '../apiService/allApis'
import Table from 'react-bootstrap/Table'

function Watch() {

    const deleteHistory= async(vId)=>{
        await deleteHistoryApi(vId)
        getallHistory()
    }

    const [history,setHistory]= useState([])

     const getallHistory= async()=>{
        const result= await getHistoryApi()
        if(result.status>=200 && result.status<300){
           setHistory( result.data)
        }

    }
    useEffect(()=>{
        getallHistory()
    },[])
  return (

       <div  style={{ backgroundColor: 'black' }}className=' text-white container' >
         <div className='d-flex justify-content-between container'>
            <h1 className=' mt-5'>Watch History</h1>
            <Link className=' mt-5'  to={'/main'} style={{ color: 'red', textDecoration: 'none' }}><i className='fa-solid fa-arrow-left'></i> Back to <i className='fa-solid fa-home'></i></Link>
         </div >
        
             <Table hover bordered variant="dark" className='container mb-5 w-75' >
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Title</th>
                        <th>Video Link</th>
                        <th>Time Stamp</th>
                        <th><i className='fa-solid fa-ellipsis-vertical'></i></th>
                    </tr>
        
                </thead>
                <tbody >
                    { history?.length>0? history?.map((video,index)=>(
                         <tr key={index}>
                         <td>{index + 1}</td>
                         <td>{video?.title}</td>
                         <td><a href={video?.videoURL} target='_blank'>{video?.videoURL}</a></td>
                         <td>{video?.timeStamp}</td>
                         <td><button onClick={()=>deleteHistory(video?.id)} className='btn' style={{color:'red'}}><i className='fa-solid fa-trash'></i></button></td>
                     </tr>
                    ))
                    :
                    <tr >Your Watch History is Empty! </tr>
                    }
        
                </tbody>
        
        
             </Table>
        
    
        
   </div>
    
  )
}

export default Watch
