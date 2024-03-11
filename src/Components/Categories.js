import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState, useEffect } from 'react';
import { FloatingLabel, Form } from 'react-bootstrap';
import { addCatApi, deleteCatApi, getAVidApi, getCatApi, updateCatApi } from '../apiService/allApis';
import Videocard from './Videocard';


function Categories() {
  const [allCat, setAllCat] = useState([])

  const [catName, setCatName] = useState("")

  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
    setCatName("")
  }
  const handleShow = () => setShow(true);

  const handleAddCat = async () => {
    if (catName) {
      const result = await addCatApi({ catName, allVideos: [] })
      handleClose()
      getAllcat()
    }
    else {
      alert("Please fill the data")
    }
  }
  const getAllcat = async () => {
    const result = await getCatApi()
    setAllCat(result.data)
  }
console.log(allCat);

  const handleRemoveCat = async (cId) => {
    await deleteCatApi(cId)
    getAllcat()
  }

  useEffect(() => {
    getAllcat()
  }, [])

  const videoDropped = async (e, categoryId) => {
    const videoId = e.dataTransfer.getData("videoId")
    console.log(`vid dropped with id: ${videoId} , inside cat :${categoryId}`);
    // get details of video id
    const result = await getAVidApi(videoId)
    const video=result.data
    console.log(video);
    // get details of category for drop
    let selectedCat = allCat.find(item => item.id == categoryId)
    selectedCat.allVideos.push(video)
    console.log(selectedCat)
    await updateCatApi(categoryId, selectedCat)
    getAllcat()

  }

  const dragOverCategory = (e) => {
    e.preventDefault()
    console.log("dragging");
  }

  // const videoDragStarterd = (e, videoId, categoryId) => {
  //   console.log(`Drag strtd from  ${categoryId} with videoId ${videoId}`);
  //   let dataShare = (videoId, categoryId)
  //   e.dataTransfer.setData("removevideodetails", JSON.stringify(dataShare))
  // }

  return (
    <div>
      <button onClick={handleShow} className='container w-75 ms-5 me-5 mt-3' style={{ background: 'white', borderRadius: '3px', border: 'none' }}>Add Category</button>
      <div className='container fluid'>
        {allCat.length > 0 ? allCat.map((item, index) => (
          <div droppable='true' onDragOver={(e) => dragOverCategory(e)} onDrop={(e) => videoDropped(e, item?.id)} key={index} className='border rounded m-2 p-2 text-center'>
            <div className='d-flex justify-content-between'>
              <h5 className='ms-3'>{item.catName}</h5>
              <button onClick={() => handleRemoveCat(item.id)} className='btn' style={{ color: 'red' }}><i className="fa-solid fa-trash"></i></button>
            </div>
            <div className="row mt-2 d-flex">
              {
                
                item.allVideos?.length > 0?( item.allVideos.map(j => (
                  <marquee>
                    <div style={{height:'80px', width:'80px'}}>
                      <img className='w-100' src={j?.coverImg} alt=''></img>
  
  
                    </div>
                  </marquee>

                  // <div draggable onDragStart={e => videoDragStarterd(e, j.id, item?.id)} key={index} className="col-lg-6">
                    // {/* <Videocard insideCategory={true} video={item} /> */}
                    // {/* <Videocard insideCategory={true} video={item}></Videocard> */}
                  // </div>
                ))

                ):""}
                
            </div>
          </div>
        ))
          : <div>      <h3 className='ms-5'>No categories added yet</h3>
          </div>
        }
      </div>
      <Modal show={show} onHide={handleClose} backdrop='static'>
        <Modal.Header closeButton className='bg-dark  text-white '>
          <Modal.Title>Add Category</Modal.Title>
        </Modal.Header>
        <Modal.Body className='bg-dark  '>
          <FloatingLabel controlId="floatingInputCaption" label='Category Name' className="mb-3  ">
            <Form.Control value={catName} onChange={(e) => setCatName(e.target.value)} placeholder='Category Name' type='text' />
          </FloatingLabel>
          {/* <Form.Control className='bg-dark  text-white' placeholder='Video Caption' name='title'  type='text' /> */}


        </Modal.Body>
        <Modal.Footer className='bg-dark text-white '>
          <Button variant="danger" onClick={handleClose}>
            Close
          </Button>
          <Button variant="success" onClick={handleAddCat}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default Categories