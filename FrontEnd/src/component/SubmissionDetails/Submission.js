import React, { PureComponent } from 'react';
import {Row,Col} from 'react-bootstrap';
import classes from './submission.module.css'
import {SimpleButton,HoverButton,DisabledButton} from '../Buttons/Buttons'
import Pagination from '../Pagination/Pagination';
import "react-datepicker/dist/react-datepicker.css";
import { connect } from 'react-redux';
import * as actionTypes from '../../Action/Index';
import Loader from 'react-loader-advanced';
import loading from '../../Assets/Loader/loadert3.gif';
class Submission extends PureComponent{
  state={
    listArray:null,
    currentPage:1,
    modelShow:false,
    partnerSubmissionResponseModel:null,
    startDate:null,
    endDate:null,
    additionalMessage:null
  }
  toggleModel=(data)=>{
   localStorage.setItem("employeeId",data)
   window.open("/employeeList/viewDetails", "_blank")
}
  onPageChange = (id) => {
    this.setState({
       currentPage:1,
   })
}
onLeftChange = () => {
   if (this.state.currentPage==1) {
       return
   }
   this.setState({
       currentPage: this.state.currentPage -1,
   },()=>{
     this.props.getSubmissionDetailsListMethod(this.state.currentPage,this.state.startDate,this.state.endDate);
   })
  
}
onRightChange = () => {
  
   if (this.state.currentPage==this.props.getSubmissionDetailsTotalpages) {
       return
   }
   this.setState({
       currentPage: this.state.currentPage +1,
   },()=>{
     this.props.getSubmissionDetailsListMethod(this.state.currentPage,this.state.startDate,this.state.endDate);
   })
   
}

componentDidMount=()=>{
  this.props.getSubmissionDetailsListMethod(this.state.currentPage,this.state.startDate,this.state.endDate);
}


componentWillReceiveProps=(nextProps)=>{
  if(nextProps.getSubmissionDetailsList!=null && nextProps.getSubmissionDetailsList.length!==0){
      this.setState({
        listArray: nextProps.getSubmissionDetailsList,
          
      })
  }else if(nextProps.getSubmissionDetailsList==null){
    this.setState({
      listArray: nextProps.getSubmissionDetailsList,
        
    })
  }
}



    render(){
let list=null;
 if(this.state.listArray!=null){
    list=this.state.listArray.map(ind=>{
      return(
        <tr>
            <td>{ind.email}</td>
            <td style={{textAlign:"center"}}>{ind.name}</td>
            <td><SimpleButton width="70px" fun={()=>this.toggleModel(ind.id)}>
            View
            </SimpleButton></td>
            
          </tr>
      )
    })
  }else{
    list=<tr><td colSpan="3" style={{textAlign:"center"}}>List of Employee will Show up here.</td></tr>
  }
   
        return(
            <div>
            <Row>
            <Col md={1} sm={2}></Col>
            <Col md={10} sm={10} style={{display:"flex",justifyContent:"space-between"}}>
                <div className={classes.heading}>
                <h3>Employee List</h3>
                </div>
            </Col>
        </Row>

        <Loader show={this.props.getSubmissionDetailsLoader} message={<img width="150px" src={loading} />}
        foregroundStyle={{ color: '#00a99d' }}
        backgroundStyle={{ backgroundColor: 'white' }}
        >
        <Row>
        <Col md={2} sm={2}></Col>
        <Col md={8} sm={10} className="table-responsive">
        <table className={classes.scheduleTbl}>
        <thead>
          <tr>
            <th>Email Id</th>
            <th style={{textAlign:"center"}}>Name</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
        {list}
        </tbody>
      </table>
        </Col>
        <Col md={2}></Col>
    </Row>

    <div className={classes.footer}>
    <Row>

                                        <Col md={12}>
                                            {true?
                                                <Pagination
                                                    activePage={this.state.currentPage}
                                                    pageRangeDisplayed={this.props.getSubmissionDetailsTotalpages}
                                                    onPageChange={this.onPageChange}
                                                    onLeftChange={this.onLeftChange}
                                                    onRightChange={this.onRightChange}
                                                />
                                                : null}
                                        </Col>

                                        
                                    </Row>
    </div>
    </Loader>
</div>
        )
    }
    
}

const mapStateToProps = state => {
  return {
      getSubmissionDetailsLoader:state.getSubmissionDetailsLoader,
      getSubmissionDetailsList:state.getSubmissionDetailsList,
      getSubmissionDetailsTotalpages:state.getSubmissionDetailsTotalpages,
      getSubmissionDetailsError:state.getSubmissionDetailsError,
      getSubmissionDetailsNetissue:state.getSubmissionDetailsNetissue
  }
}

const mapDispatchToProps = dispatch => {
  return {
      getSubmissionDetailsListMethod: (page,start,end) => dispatch(actionTypes.getSubmissionDetailsListMethod(page,start,end)),
       }
}
export default connect(mapStateToProps, mapDispatchToProps)(Submission);
