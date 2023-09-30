import { Container,Row,Col} from "react-bootstrap";
import "./login.css";
import { Announce } from "../../components/announcement/announce";
import { Header } from "../../components/navbar/navbar";
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { loginFailure,loginStart,loginSuccess} from "../../redux/userRedux";

export function Login(){
const[busy,setbusy]=useState(null);
const navigate=useNavigate();
const[msg,setmsg]=useState();
const dispatch=useDispatch();
const nav=((value)=>{
  navigate(value)
})
const formik = useFormik({
        initialValues: {
          email:'',
          password:'',
        },
        validationSchema: Yup.object({
          email: Yup.string()
            .required('specify username')
            .email("invalid email address"),
          password: Yup.string()
            .min(6,'must be 6 characters and above')
            .required('specify your password'),
        }),
        onSubmit: values => {
           login(values);
        },
      });
    const login=async(value)=>{
      try{
        loginStart();
        await setbusy(true);
        const res=await axios.post(`https://ecommerce-y2fr.onrender.com/api/user/login`, value);
       const token=res.data.accesstoken;
        if(!token){
         alert('Unable to login. Please try after some time.');
        }
        await localStorage.clear();
        await localStorage.setItem('user-token', token);
        await setbusy(false);
        await dispatch(loginSuccess(res.data));
        await alert("login success");
        await nav("/");
      }catch(err){
        await setbusy(false);
        await dispatch(loginFailure());
        await setmsg(err.response.data.msg);
      }
    }

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
                    <div className="login_container">
                        <h4 className="text-center fw-semibold p-4"> login page</h4>
                    </div>
                </Col>
            </Row>
            <Row>
            <div className="form-group px-5">
               <label for="exampleInputEmail1">Email address</label>
               <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" name="email" onChange={formik.handleChange} onBlur={formik.handleBlur}  value={formik.values.email}/>
               {formik.touched.email && formik.errors.email ? <small id="emailHelp" className="form-text text-danger">{formik.errors.email}</small> : null}
           </div>
           
           <div className="form-group px-5 pt-3">
               <label for="exampleInputEmail1">Password</label>
               <input type="password" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter your Password" name="password" onChange={formik.handleChange} onBlur={formik.handleBlur}  value={formik.values.password}/>
               {formik.touched.password && formik.errors.password ? <small id="emailHelp" className="form-text text-danger">{formik.errors.password}</small> : null}
           </div>
           <div className="form-group px-5 pt-3">
           <button type="submit"  onClick={formik.handleSubmit} className={busy?"btn btn-danger align-center":"btn btn-success align-center"}>{busy?"Loading..":"Login"}<i class="bi bi-chevron-double-right"></i></button>
           </div>
            </Row>
            <Row>
              <Col>
              <div className="form-group px-5 pt-3">
              <p>if you dont have account please register first!!</p>
              </div>
              
              </Col>
              <Col>
              <div className="form-group px-5 pt-3">
              <button type="submit"  onClick={(()=>nav("/register"))} className={"btn btn-danger  align-center"}>Register<i class="bi bi-chevron-double-right"></i></button>
              </div>
              </Col>
            </Row>
        </Container>
       
    )
}