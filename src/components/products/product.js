import "./product.css";
import { Container,Row,Col } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";
import { useState,useEffect } from "react";
import axios from "axios";

export function Product({ cat, filters, sort }){
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get( cat? `https://ecommerce-y2fr.onrender.com/api/product/get_all_products?category=${cat}`: "http://localhost:5000/api/product/get_all_products");
        setProducts(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getProducts();
  }, [cat]);

  useEffect(() => {
    cat &&
      setFilteredProducts(
        products.filter((item) =>
          Object.entries(filters).every(([key, value]) =>
            item[key].includes(value)
          )
        )
      );
  }, [products, cat, filters]);


  useEffect(() => {
    if (sort === "newest") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.createdAt - b.createdAt)
      );
    } else if (sort === "asc") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.price - b.price)
      );
    } else {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => b.price - a.price)
      );
    }
  }, [sort]);
    return(
        <Container>
          <Row>
          <Col>
          <div className="  bg-success text-center py-3 ">
            <h4 className="fw-bold text-light">Products</h4>
            <p className="fw-semibold text-light">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
            
          </Col>
          </Row>
             <Row>
                 {cat ? filteredProducts.map((element)=><Col className="col-lg-4 col-md-6"><Pro item={element}/></Col>):products.map((element) =><Col className="col-lg-4 col-md-6"><Pro item={element}/></Col> )}  
            </Row>
        </Container>
    )
}
export function Pro({item}){
  const navigate=useNavigate();
    return(
        <div className=" text-center img">
         <img src={item.img} className="rounded product_img" alt="..."/>
         <p className="book_price">
					Price : <span>&#x20B9;${item.price}</span>
				</p>
         <div className="info">
            <Button variant="success" className="text-end"  onClick={(()=>navigate(`/prod/${item._id}`))}>Buy Now</Button>
         </div>
         </div>
    )
}