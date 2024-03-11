import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div style={{ backgroundColor: 'black' }} className='text-white'>
      <Row>
        <Col className='p-5'>
          <h1 className='mt-5 pt-5 text-center' style={{ color: 'red' }}>Up Zing <span><h3>Video Uploader</h3></span></h1>
          <p className='mt-5 p-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, voluptate. Iure dolor fuga animi esse corrupti reiciendis, dolorum, sed non quidem similique veritatis voluptate ab quis, nostrum consequuntur voluptatem. Omnis.</p>
          <Link to={'/main'}> 
            <Button variant="outline-dark" style={{ color: 'red' }} className='ms-4' >Get Started  <i class="fa-solid fa-clapperboard fa-bounce"></i> </Button>

          </Link>
        </Col>
        <Col className='p-4 my-5'>
          <img className='w-75' style={{ borderRadius: '120px' }} src='https://i.postimg.cc/L6Kvrwt3/vid-gif.gif' alt=''></img>
        </Col>
      </Row>
      <div className='w-75 container p-5'>
        <hr></hr>
        <h2 className='text-center p-3' style={{ color: 'red' }}>Features</h2>
        <Row >
          <Col className=' col-lg-4 col-md-6 mt-3'>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="https://i.postimg.cc/XX6BrPS0/play-3.gif" />
              <Card.Body style={{ background: 'black' }} className='shadow-lg'>
                <Card.Title className='text-center' style={{ color: 'red' }}>Managing Videos</Card.Title>
                <Card.Text className='text-white'>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col className='col-lg-4 col-md-6 mt-3' >
            <Card style={{ width: '18rem', }}>
              <Card.Img variant="top" src="https://i.postimg.cc/pTGLN6XB/cat-3.gif" />
              <Card.Body style={{ background: 'black' }}>
                <Card.Title className='text-center' style={{ color: 'red' }}>Categorize Videos</Card.Title>
                <Card.Text className='text-white'>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col className='col-lg-4 col-md-6 mt-3'>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="https://i.postimg.cc/yYbMczkK/disco.gif" />
              <Card.Body style={{ background: 'black' }}>
                <Card.Title className='text-center' style={{ color: 'red' }}>Watch History</Card.Title>
                <Card.Text className='text-white'>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

        </Row>      </div>
    </div>
  )
}

export default Home