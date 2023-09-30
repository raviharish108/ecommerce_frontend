import { Button } from "react-bootstrap"
import { useNavigate } from "react-router-dom";
import "./success.css"
export function Success(){
  const navigate=useNavigate();
    return(
      
<div className="success_container">
       <div className="success_container_box">
          <div className="success_container_box1">
            <h1 className="fw-bold">  <i class="bi bi-check"></i>success</h1>
          </div>
          <div className="success_container_box2 text-center">
         <p>
            Payment Success
         </p>
         <Button className="btn-success"  onClick={()=>navigate("/")}>continue</Button>
          </div>
       </div>
</div>
     
    )
}