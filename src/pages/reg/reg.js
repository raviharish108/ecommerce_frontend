import { Container,Row,Col } from "react-bootstrap";
import { Announce } from "../../components/announcement/announce";
import { Header } from "../../components/navbar/navbar";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useFormik } from 'formik';
import * as Yup from 'yup';
export function Register(){
    const [busy, setbusy] = useState(false);
    const[msg,setmsg]=useState();
    const navigate = useNavigate();
    const nav=(value)=>
               navigate(value);
    const formik = useFormik({
        initialValues: {
          name:'',
          lastname:'',
          username:'',
          email:'',
          password:'',
          confirm_password:''
        },
        validationSchema: Yup.object({
            name: Yup.string()
            .max(15, 'Must be 15 characters or less')
            .required('Please specify your first name'),
            lastname: Yup.string()
            .max(15, 'Must be 15 characters or less')
            .required('Please specify your last name'),
            username: Yup.string()
            .max(15, 'Must be 15 characters or less')
            .required('Please specify your username'),
            email:Yup.string()
            .required('specify email')
            .email("invalid email address"),
            password: Yup.string()
            .min(6,'must be 6 characters and above')
            .required('specify your password'),
            confirm_password:Yup.string()
            .min(6,'must be 6 characters and above')
            .required('specify your confirm_password')
        }),
        onSubmit: values => {
          submit(values)
        },
      });
    const submit = async (value) => {
        try {
            await setbusy(true);
            await axios.post(`https://ecommerce-y2fr.onrender.com/api/user/reg`, value);
            await setbusy(false);
            await alert("successfully registered");
            await nav("/login");
        } catch (err) {
            await setbusy(false);
            console.log(err);
            await setmsg(err.response.data.msg);
            
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
                    <div className="login_container">
                        <h4 className="text-center fw-semibold p-4"> Register page</h4>
                        <div>{msg}</div>
                    </div>
                </Col>
            </Row>
           <Row>
            <Col className="col-md-6 col-12">
            <div className=" m-4 ">
                     <label for="exampleFormControlInput1" className="form-label align-center">FirstName</label>
                     <input type="text" className="form-control align-center" id="exampleFormControlInput1" placeholder="please enter your first name" name="name" onChange={formik.handleChange} onBlur={formik.handleBlur}  value={formik.values.name} />
                     {formik.touched.name && formik.errors.name ? <small id="emailHelp" className="form-text text-danger">{formik.errors.name}</small> : null}
                </div>
                
            </Col>
            <Col className="col-md-6 col-12">
            <div className=" m-4 ">
                     <label for="exampleFormControlInput1" class="form-label align-center">LastName</label>
                     <input type="text" className="form-control align-center" id="exampleFormControlInput1" placeholder="please enter your lastname" name="lastname" onChange={formik.handleChange} onBlur={formik.handleBlur}  value={formik.values.lastname} />
                     {formik.touched.username && formik.errors.username ? <small id="emailHelp" className="form-text text-danger">{formik.errors.lastname}</small> : null}
            </div>
            </Col>
            <Col className="col-md-6 col-12">
            <div className=" m-4 ">
                     <label for="exampleFormControlInput1" class="form-label align-center">UserName</label>
                     <input type="text" className="form-control align-center" id="exampleFormControlInput1" placeholder="please enter your username" name="username" onChange={formik.handleChange} onBlur={formik.handleBlur}  value={formik.values.username} />
                     {formik.touched.username && formik.errors.username ? <small id="emailHelp" className="form-text text-danger">{formik.errors.username}</small> : null}
            </div>
            </Col>
            <Col className="col-md-6 col-12">
            <div className=" m-4 ">
                     <label for="exampleFormControlInput1" class="form-label align-center">Email</label>
                     <input type="email" className="form-control align-center" id="exampleFormControlInput1" placeholder="please enter your email address" name="email" onChange={formik.handleChange} onBlur={formik.handleBlur}  value={formik.values.email} />
                     {formik.touched.email && formik.errors.email ? <small id="emailHelp" className="form-text text-danger">{formik.errors.email}</small> : null}
                </div>
               
            </Col>
            <Col className="col-md-6 col-12">
            <div className=" m-4 ">
                     <label for="exampleFormControlInput1" class="form-label align-center">Password</label>
                     <input type="password" className="form-control align-center" id="exampleFormControlInput1" placeholder="please enter your password" name="password" onChange={formik.handleChange} onBlur={formik.handleBlur}  value={formik.values.password} />
                     {formik.touched.password && formik.errors.password ? <small id="emailHelp" className="form-text text-danger">{formik.errors.password}</small> : null}
                </div>
            </Col>
            <Col className="col-md-6 col-12">
            <div className=" m-4 ">
                     <label for="exampleFormControlInput1" class="form-label align-center">ConfirmPassword</label>
                     <input type="password" className="form-control align-center" id="exampleFormControlInput1" placeholder="please enter your password" name="confirm_password" onChange={formik.handleChange} onBlur={formik.handleBlur}  value={formik.values.confirm_password} />
                     {formik.touched.confirm_password && formik.errors.confirm_password ? <small id="emailHelp" className="form-text text-danger">{formik.errors.confirm_password}</small> : null}
                </div>
            </Col>
           </Row>
           <Row>
           <Col className="col-md-6 col-12">
            <div className=" m-4 ">
            <br/>
            <button type="submit" className={busy?"btn btn-danger align-center disabled":"btn btn-success align-center"} onClick={formik.handleSubmit}>{busy?"Loading..":"Register"}<i class="bi bi-chevron-double-right"></i></button>
            </div>
            </Col>
           </Row>   
           <Row>
              <Col>
              <div className="form-group px-5 pt-3">
              <p>if you already have account please go to login page!!</p>
              </div>
              
              </Col>
              <Col>
              <div className="form-group px-5 pt-3">
              <button type="submit"  onClick={(()=>nav("/login"))} className={"btn btn-danger  align-center"}>logIn<i class="bi bi-chevron-double-right"></i></button>
              </div>
              </Col>
            </Row> 
        </Container>
    )
}