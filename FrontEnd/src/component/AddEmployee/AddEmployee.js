import React,{useState,useCallback} from 'react'
import {useSelector, useDispatch}  from 'react-redux'
import {Row,Col,Card} from 'react-bootstrap';
import classes from './AddEmployee.module.css'
import axios from 'axios'
import DatePicker from "react-datepicker";
import SweetAlert from '../commonComponents/SweetAlert'
import Loader from 'react-loader-advanced';
import loading from '../../Assets/Loader/loadert3.gif';

function AddEmployee(props){
    const [ startDate,setDate]=useState(null)
    const[isuploaded,setUploaded]=useState(false)
    const [ image,setImage]=useState(null)
    const [ src,setSrc]=useState(null)
    const [ loader,setLoader]=useState(false)

    const dispatch=useDispatch();

    const [Error,setError]=useState({
        nameError:"",
        emailError:"",
        phoneError:"",
        addressError:"",
        dobError:"",
        salaryError:"",
        photoError:""
    })
    // const {loader,payload,error}=useSelector(state=>({
    //     loader:state.loader,
    //     payload:state.data,
    //     error:state.error
    // })
    // )


   const setStartDateFrom=useCallback((date)=>{
       setDate(date)
   },[startDate])

 const  handleInput=()=>{
    document.getElementById("file").click();
 }

const onSelectFile=(e)=>{
    let x = e.target.files[0]
    if (e.target.files && e.target.files.length > 0) {
        const myfile = e.target.files[0].name;
        
        var ext = myfile.split('.').pop();
        
        var FileSize = e.target.files[0].size / 1024 / 1024;
       
      if ((ext == "jpg" || ext == "jpeg" || ext == "gif" || ext == "png") && FileSize <= 1) {
        setImage(e.target.files[0])
        const reader = new FileReader();
        reader.addEventListener("load", () =>
          setSrc(reader.result)
        );
        reader.readAsDataURL(e.target.files[0]);
    
      }
      else{
        setError({...Error,phoneError:"Invalid photo format"})
      }
    }
}

const submitForm=(e)=>{
     e.preventDefault();
      let name=e.target.name.value;
      let email=e.target.emailid.value;
      let phone=e.target.phoneno.value;
      let address=e.target.address.value;
      let salary=e.target.salary.value;
      if (!/^[A-Za-z.  ]+$/.test(name)) {
       setError({...Error,nameError:"Enter valid name"})
    }
    else if (!/\S+@\S+\.\S+/.test(email)) {
        setError({...Error,emailError:"Enter valid email id"})
    } 
    else if (!/[1-9]{1}[0-9]{9}/.test(phone)) {
        setError({...Error,phoneError:"Enter valid phone number"})
    }
     else if (address.length==0) {
        setError({...Error,addressError:"Enter valid address"})
    }
     else if (!Number(salary) || Number(salary)<=0 ) {
        setError({...Error,salaryError:"Enter valid salary"})
    }else{

      
        const data = new FormData();
        data.append("image",image);
        let formBody={
             name,
             email,
             phone,
             address,
             dob:startDate,
             salary,
             photo_path:"auisgu//asuidiu//asuhdi",
         }
         const header ={
            "Authorization":localStorage.getItem('JitToken'),
           'content-Type': 'application/json',
       }
       setLoader(true)
    axios({
        method:"post",
        url:"/addEmployee",
        data:formBody,
        headers:header
    }).then(resp=>{
        Apicall(email);
      }).catch(error=>{
          console.log(error)
      })
}
}


const Apicall=(email)=>{
    const data = new FormData();
    data.append("image",image);
    data.append("email",email); 

    const header ={
        "Authorization":localStorage.getItem('JitToken'),
       'content-Type': 'application/json',
   }
    axios({
        method:"post",
        url:"/uploadImage",
        data:data,
        headers:header
    }).then(resp=>{
        setUploaded(true)
        setLoader(false)
      }).catch(error=>{
          console.log(error)
      })
}

const resetState=()=>{
    document.getElementById("create-course-form").reset();
    setUploaded(false)
    setDate(null)
    setSrc(null)
}
    return(
        <div>
            <Row>
            <Col md={1}></Col>
            <Col md={10} style={{display:"flex",justifyContent:"space-between"}}>
                <div className={classes.heading}>
                <h3>Add Employee</h3>
                </div>
            </Col>
        </Row>
        <Loader show={loader} message={<img width="150px" src={loading} />}
        foregroundStyle={{ color: '#00a99d' }}
        backgroundStyle={{ backgroundColor: 'white' }}
        >
        <Row>
            <Col md={2}></Col>
            <Col md={8}>
            <Card className={classes.cardBody}>
             <Card.Body>
                 <form onSubmit={submitForm} id="create-course-form">
                 <Row>
                 <Col md={4}><span className={classes.labelInput}>Name :</span></Col>
                 <Col md={8}>
                     <input 
                     type="text"
                      id="name" 
                      required 
                      maxLength="50"
                      className={classes.inputField}
                      onInput={() =>setError({...Error,nameError:""})}
                      /><br/>
                 <span className={classes.errorMsg}>{Error.nameError}</span></Col>
                 </Row>

                
                 <Row>
                 <Col md={4}><span className={classes.labelInput}>Email Id :</span></Col>
                 <Col md={8}>
                     <input type="text"
                      id="emailid"
                      maxLength="60"
                      onInput={() =>setError({...Error,emailError:""})}
                      required className={classes.inputField}/><br/>
                 <span className={classes.errorMsg}>{Error.emailError}</span></Col>
                 </Row>
                
                 <Row>
                 <Col md={4}><span className={classes.labelInput}>Phone No. :</span></Col>
                 <Col md={8}>
                     <input type="text"
                      id="phoneno"
                      maxLength="10"
                        onInput={() =>setError({...Error,phoneError:""})} 
                        required className={classes.inputField}/><br/>
                 <span className={classes.errorMsg}>{Error.phoneError}</span></Col>
                 </Row>

                 <Row>
                 <Col md={4}><span className={classes.labelInput}>DOB :</span></Col>
                 <Col md={8}><span >
                <DatePicker
                 selected={startDate}
                 maxDate={new Date()}
                 dateFormat="dd/MM/yyyy"
                  onChange={date =>setStartDateFrom(date)} />
                </span><br/>
                 <span className={classes.errorMsg}>{Error.dobError}</span></Col>
                 </Row>
                 <Row>
                 <Col md={4}><span className={classes.labelInput}>Address :</span></Col>
                 <Col md={8}><textarea rows="4" 
                 id="address" 
                 maxLength="100"
                  onInput={() =>setError({...Error,addressError:""})}
                   required cols="50" style={{height:"4em", resize:"none"}} 
                   className={classes.inputField}/><br/>
                 <span className={classes.errorMsg}>{Error.addressError}</span></Col>
                 </Row>
                 
               
                
                 <Row>
                 <Col md={4}><span className={classes.labelInput}>Salary(Rs.) :</span></Col>
                 <Col md={8}><input type="text" 
                  id="salary" 
                 onInput={() =>setError({...Error,salaryError:""})}
                 required className={classes.inputField}/><br/>
                 <span className={classes.errorMsg}>{Error.salaryError}</span></Col>
                 </Row>
                 
                 <Row>
                 <Col md={4}><span className={classes.labelInput}>Photo :</span></Col>
                 <Col md={8}>
                 <input type="file" className={classes.fileinput} required onChange={onSelectFile} accept="image/*" id='file' />
                 <div className={classes.imgdiv} onClick={() =>handleInput()}>
                                {src !== null ? (<div><img className={classes.img2} src={src} />
                                    {/* <img type="image/svg+xml" src={edit} style={{color:'#ffa31a',cursor:"pointer",float:"right", position:"absolute",margin:"0px 0px 0px 81px"}} alt="newuserimage" onClick={()=>this.changePlace()} /> */}
                                    <i style={{ color: 'orange', fontSize: "25px", cursor: "pointer", position: "absolute", top:"113px",left:"120px"}} class="fa fa-camera" aria-hidden="true"></i>
                                </div>) : (<div><i className="fa fa-camera fa-2x" aria-hidden="true" style={{ color: '#ffa31a',position:"relative",top:"25px",left:"50px" }}></i>
                                    <p className={classes.para}>Upload/drag image here</p></div>)}
                            </div><br/>
                 <span className={classes.errorMsg}>{Error.photoError}</span>
                 </Col>
                 </Row>

                 <br/>
                 <Row>
                 <Col md={3} ></Col>
                 <Col md={8} className={classes.makeCenter}>
                 <button className={classes.btnWarning}>
                    Submit
                 </button>

            
                 </Col>
                 </Row>
                 </form>
             </Card.Body>
            </Card>
            </Col>
            <Col md={2}></Col>
        </Row>
        </Loader>
        {isuploaded?
        <SweetAlert
                show="true"
                resetState={resetState}
                type="success"
                msg="Form submitted successfully."
              />:null}
        </div>
       
    )
}
export default AddEmployee