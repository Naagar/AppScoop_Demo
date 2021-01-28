import React,{useEffect} from 'react'
import {useSelector, useDispatch}  from 'react-redux'
import {Row,Col,Card} from 'react-bootstrap';
import classes from './ViewDetails.module.css'
import {SimpleButton} from '../Buttons/Buttons'
import Loader from 'react-loader-advanced';
import loading from '../../Assets/Loader/loadert3.gif';
import * as actionTypes from '../../Action/Index';
function ViewDetails(props){
   const dispatch=useDispatch();
   const {loader,data}=useSelector(state=>({
    loader:state.viewEmployeeDetailsLoader,
    data:state.viewEmployeeDetailsList,
})
)
    useEffect(()=>{
       dispatch(actionTypes.viewEmployeeDetails())
    },[])

    if(data!=null){
        var base64Image = 'data:image/png;base64,'+data.image;
    }


    return(
        <div>
            <Row>
            <Col md={1}></Col>
            <Col md={10} style={{display:"flex",justifyContent:"space-between"}}>
                <div className={classes.heading}>
                <h3>View Details</h3>
                </div>
            </Col>
        </Row>
        <Loader show={loader} message={<img width="150px" src={loading} />}
        foregroundStyle={{ color: '#00a99d' }}
        backgroundStyle={{ backgroundColor: 'white' }}
        >
        <Row>
            <Col md={2}></Col>
            <Col md={7}>
            <Card className={classes.cardBody}>
            {data!=null?
             <Card.Body>
               
                 <Row>
                 <Col md={4}><span className={classes.labelInput}>Name :</span></Col>
                 <Col md={8}>
                 <span className={classes.errorMsg}>{data.name}</span></Col>
                 </Row>

                
                 <Row>
                 <Col md={4}><span className={classes.labelInput}>Email Id :</span></Col>
                 <Col md={8}>
                 <span className={classes.errorMsg}>{data.email}</span></Col>
                 </Row>
                
                 <Row>
                 <Col md={4}><span className={classes.labelInput}>Phone No. :</span></Col>
                 <Col md={8}>
                 <span className={classes.errorMsg}>{data.phone}</span></Col>
                 </Row>
                
                 <Row>
                 <Col md={4}><span className={classes.labelInput}>Address :</span></Col>
                 <Col md={8}>
                 <span className={classes.errorMsg}>{data.address}</span></Col>
                 </Row>
                 
                 <Row>
                 <Col md={4}><span className={classes.labelInput}>DOB :</span></Col>
                 <Col md={8}>
                 <span className={classes.errorMsg}>{new Date(data.dob).getDate()+"/"+
                 new Date(data.dob).getMonth()+"/"+
                 new Date(data.dob).getFullYear()}</span></Col>
                 </Row>
                
                 <Row>
                 <Col md={4}><span className={classes.labelInput}>Salary(Rs.) :</span></Col>
                 <Col md={8}>
                 <span className={classes.errorMsg}>{data.salary}</span></Col>
                 </Row>
                 
                 <Row>
                 <Col md={4}><span className={classes.labelInput}>Photo :</span></Col>
                 <Col md={8}>
                 <span  >
                 <img className={classes.img2} src={base64Image}/>
                 
                 </span>
                 </Col>
                 </Row>

                 <br/>
                 <Row>
                 <Col md={12} className={classes.makeCenter}>
                 <SimpleButton width="80px" fun={()=>props.history.push('/employeeList')}>
            Back
            </SimpleButton>
                 </Col>
                 </Row>
               
             </Card.Body>
              :<span style={{textAlign:"center",fontWeight:"bold"}}>Details of Employee will Show up here.</span>}
            </Card>
            </Col>
            <Col md={2}></Col>
        </Row>
        </Loader>
        </div>
       
    )
}
export default ViewDetails