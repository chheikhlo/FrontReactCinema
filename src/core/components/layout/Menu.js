import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const Menu = () => {
    return (
        <Navbar expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand className="logo">CinéMERN</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Link to={'/'} className="nav-link">Accueil</Link>
                        <Link to={'/movies'} className="nav-link">Films</Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Menu;