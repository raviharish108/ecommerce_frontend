import { Container,Row,Col } from "react-bootstrap"
export function News(){
    return(
<Container>
<Row>
    <Col>
          <div className="  bg-success text-center py-3 ">
            <h4 className="fw-bold text-light">News Letter</h4>
            <p className="fw-semibold text-light">Keep Up with our latest news and events. Subscribe to our newsletter</p>
          </div> 
    </Col>
</Row>
<Row>
    <Col className=" col-lg-10 ">
    <div className="m-3">
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="please enter a your email address"/>
    </div>
    </Col>
    <Col className="col-lg-2 ">
    <div className="m-3">
    <button type="submit" className="btn btn-success align-center">Send<i class="bi bi-send"></i></button>
    </div>
   
    </Col>
</Row>
</Container>
    )
}