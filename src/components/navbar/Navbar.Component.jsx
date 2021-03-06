import './Navbar.Component.scss'
import { Navbar, Nav, Container} from 'react-bootstrap'
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'


function NavbarComponent() {


    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand as={Link} to="/">Mahmoud Badawy</Navbar.Brand>
                <Nav className="ms-auto">
                    <Nav.Link as={Link} to="/home">Home</Nav.Link>
                    <Nav.Link as={Link} to="/shop">Shop</Nav.Link>
                    <Nav.Link as={Link} to="/counter">Counter</Nav.Link>
                    <Nav.Link as={Link} to="/todo">Todo</Nav.Link>
                    <Nav.Link as={Link} to="/register">Signup</Nav.Link>

                </Nav>
            </Container>
        </Navbar>

    );

}


export default NavbarComponent;