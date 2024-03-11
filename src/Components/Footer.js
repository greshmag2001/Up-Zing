import React from 'react'
import { Col, Row } from 'react-bootstrap'

function Footer() {
  return (
    <div style={{background:'black'}} className='border'>
      <Row>
        <Col className='mt-2 ms-3 '>
          <img
            alt=""
            src="https://i.postimg.cc/qMjRd2mc/icon-2-removebg-preview-removebg-preview-removebg-preview.png"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{' '}  <b style={{ color: 'red' }}>Up Zing</b>
          <p style={{ color: 'white' }}><b>Designed and built with all the love in the world by the Up Zing team auptatem obcaecsimilique </b></p>

        </Col>
        <Col  >
        <h5 className='mt-2'  style={{color: 'red'}}><b>Links</b></h5>
        <p style={{ color: 'white' }}><b>Landing Page </b></p>    
        <p style={{ color: 'white' }}><b>Home </b></p>
        <p style={{ color: 'white' }}><b>Watch History</b></p>
        </Col>
        <Col>
        <h5 className='mt-2'  style={{color: 'red'}}><b>Guides</b></h5>
        <p style={{ color: 'white' }}><b>React </b></p>    
        <p style={{ color: 'white' }}><b>React Bootstrap </b></p>
        <p style={{ color: 'white' }}><b>Routing</b></p>
        </Col>
        <Col className='me-3'>
        <h5 className='mt-2'  style={{color: 'red'}}><b>Contact Us</b></h5>
        <form>
          <input placeholder='enter email' className='container' style={{border:'none', background:'wheat', borderRadius:'5px'}}></input>
          <button className='container mt-2' style={{background: 'red', color:'white', borderRadius:'5px'}}>Send</button>
        </form>

        </Col>
      </Row>
    </div>
  )
}

export default Footer