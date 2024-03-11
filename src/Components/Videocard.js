import React from 'react'
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { deleteVideoApi, saveHistoryApi } from '../apiService/allApis';

function Videocard({video,deleteData,insideCategory}) {
    const deleteVideo=async(e,id)=>{
        e.preventDefault()
        const result=await deleteVideoApi(id)
        alert ("Delete this video ?")
        deleteData(result.data)
    }
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = async() => {
        setShow(true);
        // get vid details
        const {title,videoURL}= video
        let timeData = new Date()
        let timeStamp=new Intl.DateTimeFormat('en-US',{
            year:'numeric',month:'2-digit',day:'2-digit',hour:'2-digit',minute:'2-digit',second:'2-digit',
        }).format(timeData)
        console.log(timeStamp);
        await saveHistoryApi({title,videoURL,timeStamp})
    }
    const dragStarted= (e,vId)=>{
        console.log(`Dragging started with video id: ${vId}`);
        // e.dataTransfer.setItem("videoId",vId)
        e.dataTransfer.setItem("videoId",vId)

    }

    return (
        <div className='px-3 mx-3'>

            <Card draggable onDragStart={(e)=>dragStarted(e,video?.id)} bg='dark' className='mx-1 border   ' style={{ width: '130%' }}>
                <Card.Img onClick={handleShow} className='w-100' style={{ height: '160px' }}
                    variant="top" src={video?.coverImg} />
                <Card.Body>
                    <Card.Title className='text-white'>
                        <h5 className='text-center'>{ video?.title}</h5>
                        <div className='text-end'>
                            {!insideCategory && <button onClick={(e)=>deleteVideo(e,video?.id)}  className='btn' style={{color:'red'}}>
                                <i class="fa-solid  fa-trash-can"></i></button>}
                        </div>
                    </Card.Title>
                </Card.Body>
            </Card>
            {/* modal */}
            <Modal centered size='lg' show={show} onHide={handleClose}>
                <Modal.Header className='bg-dark text-white' closeButton>
                    <Modal.Title>{video?.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body className='bg-dark text-white'>
                <iframe width="100%" style={{height:'300px'}} 
                src={`${video?.videoURL}?autoplay=1`} 
                title="Dua Lipa - Houdini (Official Music Video)" 
                 allow="accelerometer; autoplay; clipboard-write; 
                encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowfullscreen></iframe>

                </Modal.Body>
            </Modal>
        </div>
    )
}

export default Videocard