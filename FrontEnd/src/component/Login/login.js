import React, { Component } from 'react';
import classes from './login.module.css';
import { Container, Row, Col, Card, Button, Form, Alert,Image } from 'react-bootstrap';
import logo from '../../Assets/Logo_InnovationM/download.png';
import { connect } from 'react-redux';
import * as actionTypes from '../../Action/Index';
import {Spinner} from 'react-bootstrap';
class login extends Component {

       state={
        readOnly:true,
        passwordErrorMsg:"",
        UsernameErrorMsg:"",
        email:""
       }

  loginHandler=(e)=>{
    e.preventDefault();
    if (e.target.email.value === "") {
      this.setState({
          UsernameErrorMsg: "Enter your Email ID",
      })
  }
  else if (!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e.target.email.value.trim())) {
      this.setState({
          UsernameErrorMsg: "Please enter a valid Email ID",
          
      })
  }

  else if (e.target.password.value === "") {
      this.setState({
          passwordErrorMsg: "Enter your Password",
          
      })
  }

  else if (!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/.test(e.target.password.value)) {
      this.setState({
          passwordErrorMsg: "Password should be between in 'Exam#123' format.",
      })
  }
  else {
    const username =e.target.email.value
    const password = e.target.password.value
     this.props.onSubmit(username, password)
  }
  
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.loginStatus === true) {
        this.props.history.push('/employeeList')
    }}

    render() {
        return (
            <div className={classes.Background} >
            <Container fluid>
            <form onSubmit={(e) => this.loginHandler(e)}>
  <Row>
    <Col lg={3} md={2}></Col>
    <Col lg={6} md={8} className={classes.makeloginCenter}>
        <Card className={classes.loginBody}>
           <div className={classes.logoDiv}>
             <img src={logo} width="212px" height="112px"/>
           </div>
           <div className={classes.userDiv}>
          <div className={classes.userWrapper}> 
          <i class="fas fa-user" style={{color:"grey",fontSize:"20px",marginTop:"5px"}}></i>
                <input type="text" placeholder="Username" className={classes.userInput} autoComplete="off"
                ref={element => this.email = element}
                onClick={() => this.setState({ readOnly: false })} readOnly={this.state.readOnly} maxLength="52"
                onFocus={() => {
                  this.setState({
                      UsernameErrorMsg: "",
                  })
              }} 
                name="email"
                />
          </div>
           </div>
           <span className={classes.UsernameValidation}>{this.state.UsernameErrorMsg}</span>
           <div className={classes.passwordDiv}>
           <div className={classes.userWrapper}> 
           <i class="fas fa-lock" style={{color:"grey",fontSize:"20px"}}></i>
                 <input type="password" placeholder="Password" className={classes.userInput} autoComplete="off"
                 onClick={() => this.setState({ readOnly: false })} readOnly={this.state.readOnly}
                 ref={element => this.pass = element}
                 onFocus={() => {
                  this.setState({
                    passwordErrorMsg: "",
                  })
              }} 
                 name="password"
                 />
           </div>
           </div>
           <span className={classes.UsernameValidation}>{this.state.passwordErrorMsg}</span>

         
           <div className={classes.loginDiv}>
            <button className={classes.loginButton} type="submit">Login</button> &nbsp;&nbsp;
            <span className={classes.spinner}>{this.props.loader?<Spinner animation="border" variant="warning" />:null}</span>

           </div>

           {
            this.props.errorMsg!==""?<span className={classes.Apierrormsg}>{this.props.errorMsg}</span>:null
           }
           
        </Card>
    </Col>
    <Col lg={3} md={2}></Col>
  </Row>
  </form>
 
</Container>
            </div>
        )
}
}


const mapStateToProps = state => {
  return {
      loginStatus: state.loginStatus,
      errorMsg: state.loginErrorMsg,
      loader: state.loader,
  }
}

const mapDispatchToProps = dispatch => {
  return {
      onSubmit: (email, password) => dispatch(actionTypes.getLogin(email, password)),
       }
}
export default connect(mapStateToProps, mapDispatchToProps)(login);