import React, { useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import Add from '../Components/Add'
import Videos from '../Components/Videos'
import Categories from '../Components/Categories'
import { Link } from 'react-router-dom'


function Mainpage() {
    // state for state lifting
    const [addUpdate,setAddUpdate]= useState("")

    return (
        <div style={{ backgroundColor: 'black' }} className='text-white'>
            <Row>
                <Col className='col-lg-4 col-md-4 col-sm-4' >
                    <h2 className='ms-5 p-2 mt-3' style={{ color: 'red' }}>Start Uploading Videos For Free</h2>
                    <Link to={'/watch'} style={{ color: 'red', textDecoration: 'none' }}><h4 className='ms-5'><i class="fa-solid fa-clock fa-spin-pulse"></i> View Watch History</h4></Link>
                    <p className='ms-5'><b>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, quo doloribus consequatur, tenetur dignissimos repellendus, saepe quis eaque harum officiis recusandae tempora. Cum, numquam aliquam nobis explicabo placeat culpa vel!</b></p>
                    </Col>
                <Col  className='col-lg-8  col-md-8 col-sm-8 container ' >
                <img style={{width: '80%'}} src='https://i.postimg.cc/dVG1HhJB/main-2-removebg-preview.png' alt=''></img>
                </Col>
            </Row>
            <hr></hr>
            <Row>
                <Col className='col-lg-8 '>
                <Row>
                    <Add updateData={setAddUpdate}></Add>  
                    <Videos data={addUpdate}></Videos>
                </Row>
                </Col>
                <Col className='col-lg-4 '> 
                    <Categories></Categories>

                </Col>

            </Row>

        </div>
    )
}

export default Mainpage