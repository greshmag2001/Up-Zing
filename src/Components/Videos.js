import React, { useEffect, useState } from 'react'
import Videocard from './Videocard'
import { getVideoApi } from '../apiService/allApis'
import { Col, Row } from 'react-bootstrap'

function Videos({data}) {

  const [allVideos,setAllVideos]=useState([])

  const [deleteUpdate,setDeleteUpdate]=useState({})

  const accessAllVideos=async()=>{
    const result=await getVideoApi()
    setAllVideos(result?.data);
  }
  useEffect(()=>{
    accessAllVideos()
  },[data,deleteUpdate])

  // console.log(allVideos);



  return (
    <Row>
      {
        allVideos?.length>0?
          allVideos?.map((i,index)=>(
            <Col key={index} className='my-3' lg={4} md={6} sm={12}>
              <Videocard  deleteData={setDeleteUpdate} video={i}></Videocard>
            </Col>
          ))
        : <h1>No videos added yet! add a new video</h1>
      }
    </Row>
  )
}

export default Videos