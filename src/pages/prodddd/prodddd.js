import { Announce } from "../../components/announcement/announce"
import { Header } from "../../components/navbar/navbar"
import { News } from "../../components/news/news"
import { Footer } from "../../components/footer/footer"
import {Container,Row,Col} from "react-bootstrap"
import { useState,useEffect } from "react"
import axios from "axios"
import Button from "react-bootstrap/Button"
import "./prodddd.css"
export function Proddddd(){
    return(
        <div>
             <Announce/>
             <Header/>
             <Single_Product/>
             <News/>
             <Footer/>
        </div>
    )
}

function Single_Product(){
    const[products,setproducts]=useState([])
    const allproducts=async()=>{
        try{
            const response=await axios.get(`https://ecommerce-y2fr.onrender.com/api/product/get_all_products`)
            setproducts(response.data);
        }catch(err){

        }
    }
    useEffect(()=>{
        allproducts();
      },[]);
      const delet =async(id)=>{
        try{
            await axios.delete(`https://ecommerce-y2fr.onrender.com/api/product/delete/${id}`);
            await alert("deleted successfully");
            
        }catch(err){
            console.log(err);
        }
      }
    return(
        <Container>
            <Row>
                <Col>
                <table class="table table-striped ">
  <thead className= "table-success">
    <tr>
      <th scope="col">object id</th>
      <th scope="col">title</th>
      <th scope="col">Image</th>
      <th scope="col">categories</th>
      <th scope="col">Delete</th>
      <th scope="col">Edit</th>
    </tr>
  </thead>
  <tbody className= "table-danger ">
    {products.map((item)=> <Tr element={item} deletebutton={<Button className="btn-danger" onClick={(()=>delet(item._id))}>Delete</Button>}/>)}
   
  </tbody>
</table>
                </Col>
            </Row>
        </Container>
    )
}


function Tr({element,deletebutton}){
    return(
        <tr className="table_row">
        <th scope="row">{element._id}</th>
        <td>{element.title}</td>
        <td><img src={element.img}/></td>
        <td>{element.categories}</td>
        <td>{deletebutton}</td>
        <td><Button className="btn-dark">Edit</Button></td>
      </tr> 
    )
}