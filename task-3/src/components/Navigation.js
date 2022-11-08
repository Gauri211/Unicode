import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Navigation = () => {
  return (
    <>
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand>NewsApp</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link to='/'>Home</Nav.Link>
            <Nav.Link to='/Apple'>Apple</Nav.Link>
            <Nav.Link to='/Tesla'>Tesla</Nav.Link>
            <Nav.Link to='/Business'>Business</Nav.Link>
            <Nav.Link to='Tech'>TechCrunch</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Navigation;