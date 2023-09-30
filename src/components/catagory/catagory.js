import "./catogory.css";
import { Container,Row,Col } from "react-bootstrap";
import { categories } from "../../data";
import { Link } from "react-router-dom";
export function Catagorys(){
    return(
        <Container>
            
            <Row>
                 {categories.map((element,index)=> <Col className={index===categories.length-1?"col-md-12 col-lg-4 catagory_container":"col-md-6 col-lg-4 catagory_container"}><Catagory item={element}/></Col> )} 
            </Row>
        </Container>
       
    )
}
 function Catagory({item}){
    return(
        <div className="text-center img">
            <Link to={`/prod_list/${item.cat}`}>
            <img src={item.img} className="rounded" alt="..."/>
            <div className="info">
             <p className="text-semibold">{item.title}</p>
            </div>
            </Link>
         </div>
    )
}