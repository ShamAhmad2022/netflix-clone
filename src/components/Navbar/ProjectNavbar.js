import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function ProjectNavbar() {
  return (
    <Navbar bg="dark" variant="dark">
    <Container>
      <Navbar.Brand href="#">Netflix-clone</Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/favMovies">Favorites</Nav.Link>
        <Nav.Link href="#">About</Nav.Link>
      </Nav>
    </Container>
  </Navbar>
  )
}

export default ProjectNavbar