import "./proddet.css"
import { Container,Row,Col } from "react-bootstrap"
import { Announce } from "../../components/announcement/announce"
import {Header} from "../../components/navbar/navbar"
import { Product } from "../../components/products/product"
import { News } from "../../components/news/news"
import { Footer } from "../../components/footer/footer"
import  Button  from "react-bootstrap/Button"
import { useParams } from "react-router-dom"
import axios from "axios" 
import { useEffect, useState } from "react"
import { addProduct } from "../../redux/cartRedux";
import { useDispatch } from "react-redux";
export function Proddet(){
    return(
       <div>
         <Announce/>
         <Header/>
         <Product_det/>
         <Product/>
         <News/>
         <Footer/>
       </div>
    )
}


export function Product_det(){
    const{id}=useParams();
    const[product,setproduct]=useState({});
    const [color, setColor] = useState("");
    const [size, setSize] = useState("");
    const dispatch = useDispatch();
    const getitem=async()=>{
        try{
         const res = await axios.get(`https://ecommerce-y2fr.onrender.com/api/product/get_product/${id}`);
         setproduct(res.data);
          }
        catch(err){
         console.log(err.response);
        }
        }
   useEffect(()=>{
    getitem();
   },[id]);
    const[quantity,setquantity]=useState(1);
    const handleQuantity = (type) => {
        if (type === "dec") {
          quantity > 1 && setquantity(quantity - 1);
        } else {
          setquantity(quantity + 1);
        }
      };
      const createcart = async()=>{
        try {
               const token = localStorage.getItem('user-token');
               if(token){
                await axios.post(`https://ecommerce-y2fr.onrender.com/api/cart/create`,{"productId":product._id,"quantity":quantity,"color":color,"size":size,"price":`${product.price*quantity}`}, {headers: {Authorization: token}});
             }
               alert("products added successfully")
        } catch (err) {
            await console.log(err.response.data);
        }
    }
      const handleClick = () => {
         createcart();
        dispatch(
          addProduct({ ...product, quantity,color,size })
        );
      };
    return(
        <Container>
                {/* <h3 className="text-center m-5 text-semibold">{product.title}</h3> */}
            <Row  className="detail">
             <Col className="col-md-6">
                     <img src={ product && product.img ? product.img : "https://sometestimage.com/test.jpg" } className="prod_img"  />
                </Col>
                <Col className="col-md-6  box-detail text-start">
               
                    <div className="row"> 
                    <h6>#id: {product._id}</h6>
                     </div>
                     <div>
                        <Button className="bg-danger p-1 px-3 " onClick={() => handleQuantity("inc")}>+</Button>
                        <p className="text-dark">quantity:{quantity}</p>
                        <Button className="bg-primary p-1 px-3 " onClick={() => handleQuantity("dec")}>-</Button>
                     </div>
                     <div className="filtercontainer">
                     <div className="filter">
                     <span className="filtertitle">Color</span>
                     <select onChange={(e) => setColor(e.target.value)}>
                    {product.color?.map((c) => (
                    <option key={c}>{c}</option>
                ))}
              </select>
            </div>
            <div className="filter">
              <span className="filtertitle">Size</span>
              <select onChange={(e) => setSize(e.target.value)}>
                {product.size?.map((s) => (
                  <option key={s}>{s}</option>
                ))}
              </select>
            </div>
          </div>
                    <span>${product.price}</span>
                    <p>{product.description}</p>
                    <p>Sold:{product.quantity}</p>
                    <Button  className="btn-success" onClick={handleClick}>Buy Now</Button>
               
                </Col> 
            </Row>
        </Container>
    )
}