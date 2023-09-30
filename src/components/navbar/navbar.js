
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import { Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import "./navbar.css";
import { useNavigate } from 'react-router-dom';
export function Header() {
  const quantity = useSelector(state=>state.cart.quantity)
  const navigate=useNavigate();
  const nav=((value)=>{
    navigate(value)
  })
    return (
      <Container >
        <Row>
          <Col>
          <Navbar bg="success" className="text-light" data-bs-theme="success">
        <Container>
          <Navbar.Brand href="#home"><l>Online Shoppig</l></Navbar.Brand>
          <Nav className="me-auto justify-content-end">
            <Nav.Link ><Button className="btn-light" onClick={(()=>navigate("/"))}><i class="bi bi-house"></i></Button></Nav.Link>
            <Nav.Link ><Button className="btn-light" onClick={(()=>navigate("/products"))}><i class="bi bi-bag-heart"></i></Button></Nav.Link>
            <Nav.Link ><Button className="btn-light position-relative" onClick={(()=>navigate("/cart"))}><i class="bi bi-cart2"></i>
            <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
    {quantity}+
    <span class="visually-hidden">unread messages</span>
  </span>
            </Button></Nav.Link>
          </Nav>
        </Container>
      </Navbar>
          </Col>
        </Row>
      </Container>
           
    );
}

