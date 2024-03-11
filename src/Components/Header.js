import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <div >
        <Navbar style={{background:'red'}}>
        <Container>
          <Navbar.Brand href="/">
            <img
              alt=""
              src="https://i.postimg.cc/HWbcZkT3/icon-2-removebg-preview.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
           <b> Up Zing</b>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>

  )
}

export default Header