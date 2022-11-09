import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from 'react-router-dom';
const Navigation = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>NewsApp</Navbar.Brand>
          <Nav className="me-auto">
            <Link to='/'>Home</Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Navigation;