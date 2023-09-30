import { Container,Row,Col } from "react-bootstrap";
import "./footer.css";
export function Footer(){
    return(
        <Container className="bg-dark footer_container">
            <div className="footer_container_row">
            <i class="bi bi-linkedin" style={{ fontSize: 25,color:"white",margin:"10px"}}></i>
            <i class="bi bi-instagram" style={{ fontSize: 25,color:"white",margin:"10px"}} ></i>
            <i class="bi bi-facebook" style={{ fontSize: 25,color:"white",margin:"10px"}} ></i>
            <i class="bi bi-youtube" style={{ fontSize: 25,color:"white",margin:"10px"}} ></i>
            </div>
        </Container>
    )
}