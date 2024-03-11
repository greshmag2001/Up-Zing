import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { addVideoApi } from '../apiService/allApis';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Add({updateData}) {
    // state to store input datas (add id key too)
    const [inputDatas,setInputDatas]=useState({
        title:"", coverImg:"", videoURL:""
    })
    console.log(inputDatas)

    const [show, setShow] = useState(false);
    // function to update input state
    const setData=(e)=>{
        let{value,name}=e.target;
        setInputDatas({...inputDatas,[name]:value})
    }
// extract url
const extractUrl=(link)=>{
    if(link.includes("v=")){
        let urlCode=link.split("v=")[1].slice(0,11)
        setInputDatas({...inputDatas,videoURL:`https://www.youtube.com/embed/${urlCode}`})
    }
    else{
        setInputDatas({...inputDatas,videoURL:""})
        alert("Input proper youtube link!!!")
    }
    // const {value,name}=e.target

    // let urlCode=value.slice(-11,)

    // "https://www.youtube.com/embed/suAR1PYFNYA?autoplay=1?" 
    // https://www.youtube.com/watch?v=suAR1PYFNYA
    // const finalUrl=`https://www.youtube.com/embed/${urlCode}?autoplay=1`
    // setInputDatas({...inputDatas,[name]:finalUrl})

}
    console.log(inputDatas);

    const handleClose = () => {
        setShow(false);
        // reset state
        setInputDatas({...inputDatas,title:"", coverImg:"", videoURL:""})
    }
    const handleShow = () => setShow(true);
    // add video
    const handleAdd=async(e)=>{
        // prevent the event loop
        e.preventDefault()
        const {title,coverImg,videoURL}=inputDatas

        if(!title || !coverImg || !videoURL){
            toast.error('please fill all datas', {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                });

        }
        else{
            const result=await addVideoApi(inputDatas)
            if(result.status>=200 && result.status<300){
                // update state with added data
                updateData(result.data)
                
                toast.success('video added successfully', {
                    position: "top-center",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                    });
                handleClose()
            }
            else{
                alert("API call failed. Please try again later!!!")
            }
        }

    }

    return (
        <div>
            <button onClick={handleShow} className='bg-black' style={{ border: 'none' }}> <h4 className='ms-5 mt-3'> <i class="fa-solid fa-upload" style={{ color: "#f2f4f8" }}> Upload  new  video</i></h4></button>
            <Modal show={show} onHide={handleClose} >
                <Modal.Header className='bg-dark  text-white' closeButton>
                    <Modal.Title>Upload Video</Modal.Title>
                </Modal.Header>
                <Modal.Body className='bg-black border mt-2'>
                    <FloatingLabel
                        controlId="floatingInput"
                        label="Video Caption"
                        className="mb-3"
                    >
                        <Form.Control className='bg-dark  text-white' value={inputDatas.title} placeholder='title' onChange={(e)=>setInputDatas({...inputDatas,title:e.target.value})} type='text' />
                    </FloatingLabel>
                    <FloatingLabel className="mb-3" controlId="floatingInput" label="Cover Image URL">
                        <Form.Control className='bg-dark  text-white' value={inputDatas.coverImg} placeholder='coverImg' onChange={(e)=>setInputDatas({...inputDatas,coverImg:e.target.value})} type="text" />
                    </FloatingLabel>
                    <FloatingLabel className="mb-3" controlId="floatingInput" label="Youtube Video URL">
                        <Form.Control className='bg-dark  text-white' value={inputDatas.videoURL} placeholder='videoURL' onChange={(e)=>extractUrl(e.target.value)} type="text" />
                    </FloatingLabel>

                </Modal.Body>
                <Modal.Footer className='bg-dark  text-white'>
                    <Button variant="danger" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="success" onClick={(e)=>handleAdd(e)}>
                        Add
                    </Button>
                </Modal.Footer>
            </Modal>

            <ToastContainer />
        </div>
    )
}

export default Add
