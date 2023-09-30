import "./announce.css"
import Alert from 'react-bootstrap/Alert';
import{Col,Container,Row} from "react-bootstrap"
export function Announce(){
    return(
      <Container>
        <Row>
          <Col>
          <Alert variant="secondary p-1" className="mb-0">
        <p className="text-center pt-2">Super Deal! Free Shipping on Orders Over &#x20B9;1000 Rs✌️✌️✌️🤠🤠🐺🐺</p>
      </Alert>
          </Col>
        </Row>
      </Container>
       
    )
}