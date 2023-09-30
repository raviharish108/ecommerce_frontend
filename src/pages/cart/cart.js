import { Container,Row,Col } from "react-bootstrap";
import { Announce } from "../../components/announcement/announce";
import { Header } from "../../components/navbar/navbar";
import Button from "react-bootstrap/Button";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./cart.css";

export function Cart(){
    
    const cart = useSelector((state) => state.cart);
    const gst=10/100;
    const discount=(40/100);
    const totalamount=Math.round(cart.total+(gst*cart.total)-(cart.total*discount));
    const navigate=useNavigate("/success")
  
   
    const initPayment = (data) => {
		const options = {
			key: "rzp_test_WAQZcJKLiySJfU",
			amount: totalamount*100,
			currency: data.currency,
			description: "Test Transaction",
			handler: async (response) => {
				try {
					const verifyUrl = "https://ecommerce-y2fr.onrender.com/api/pay/verify";
					const { data } = await axios.post(verifyUrl, response);
					console.log(data);
				} catch (error) {
					console.log(error);
				}
			},
			theme: {
				color: "#3399cc",
			},
		};
    const rzp = new window.Razorpay(options);
     rzp.open();
	};

	const handlePayment = async () => {
		try {
			const orderUrl = "https://ecommerce-y2fr.onrender.com/api/pay/orders"
            const data=await axios.post(orderUrl, { amount:totalamount });
			console.log(data);
			initPayment(data.data);
            navigate("/success")

		} catch (error) {
			console.log(error);
		}
	};
    return(
       <Container>
         <Row>
                <Col>
                     <Announce/>
                     <Header/>
                </Col>
         </Row>
         <Row>
                <Col>
                <h4 className="fw-semibold text-center">Shopping Cart</h4>
                </Col>
         </Row>
         <Row>
                 <Col className="col-md-6 col-sm-12">{cart.products.map((element)=><Cartt Product={element}/>)}</Col>
                    <Col className="col-md-6 col-sm-12 ">
                        <div className="total">
                        <p className="fw-semibold text-primary">sub-Total:<span className="text-secondary">&#x20B9;{cart.total}</span></p>
                      <p className="fw-semibold  text-primary">GST:<span className="text-secondary">&#x20B9;10%</span></p>  
                      <p className="fw-semibold  text-primary">Discount:<span className="text-secondary">&#x20B9;40%</span></p>
                      <p className="fw-semibold  text-primary">Total Amount:<span className="text-secondary">&#x20B9;{totalamount}</span></p>
                     <Button variant="success" className="text-center" onClick={handlePayment}>Checkout<i class="bi bi-chevron-double-right"></i></Button>
                        </div> 
                      
                 </Col> 
         </Row>  
       </Container>
    )
}
function Cartt({Product}){
   
    return(
        <Container>
            <Row className="cart_container">
                <Col className="container-fluid ">
                    <img src={Product.img} alt="" />
                </Col>
                <Col className="container-fluid ">
                <p className="text-start text-secondary">{Product.title}</p>
                <div className="amount">
                <span className=" text-start ">Quantity:{Product.quantity}</span>
                <p className="text-start  text-secondary">&#x20B9; {Product.price * Product.quantity}</p>
                </div>
                </Col>
               
            </Row>
        </Container>
    )
}