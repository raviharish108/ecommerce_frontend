import { Announce } from "../../components/announcement/announce"
import { Header } from "../../components/navbar/navbar"
import { Product } from "../../components/products/product"
import { News } from "../../components/news/news"
import { Footer } from "../../components/footer/footer"
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { Container } from "react-bootstrap";
import {Row,Col} from "react-bootstrap";
export function Prod_list(){
   
    return(
        <div>
         <Announce/>
         <Header/>
         <Pr_list/>
         <News/>
         <Footer/>
        </div>
    )
}


export function Pr_list(){
    const location = useLocation();
    const cat = location.pathname.split("/")[2];
    const [filters, setFilters] = useState({});
    const [sort, setSort] = useState("newest");
  
    const handleFilters = (e) => {
      const value = e.target.value;
      setFilters({
        ...filters,
        [e.target.name]: value,
      });
    };
    return(
      <Container>
        <Row>
            <Col>
            <div className="  bg-success text-center py-3 ">
            <h4 className="fw-bold text-light">{cat}</h4>
            <p className="fw-semibold text-light">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
            </Col>
        </Row>
        <Row className="m-3">
                <Col classname="col-md-6">
                <select class="form-select" aria-label="Default select example" name="color" onChange={handleFilters}>
                <option selected>Color</option>
                <option value="White">White</option>
                <option value="Black">Black</option>
                <option value="Blue">Blue</option>
                <option value="Red">Red</option>
                <option value="Yellow">Yellow</option>
                <option value="Green">Green</option>
                </select>
                </Col>
                <Col classname="col-lg-4">
                <select class="form-select" aria-label="Default select example" name="size" onChange={handleFilters}>
                <option selected>Size</option>
                <option value="S">Small</option>
                <option value="M">Medium</option>
                <option value="L">Large</option>
                <option value="X-L">x-large</option>
                <option value="xx-L">xx-Large</option>
                </select>
                </Col>
                <Col classname="col-lg-4">
                <select class="form-select" aria-label="Default select example" onChange={(e) => setSort(e.target.value)}>
                <option  value="newest">Newest</option>
                <option value="asc">Low to High</option>
                <option value="desc">High to Low</option>
                </select>
                </Col>
            </Row>
             <Row>
             <Product cat={cat} filters={filters} sort={sort} />  
            </Row>
      </Container>
    )
}