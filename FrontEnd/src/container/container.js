import React, { Component } from 'react';
import './container.css';
import logo from '../Assets/Logo_InnovationM/download.png';
import {Image, Accordion, Card} from 'react-bootstrap';
import {NavLink,withRouter} from 'react-router-dom';
// import Cookies from 'universal-cookie';

import ConfirmAlert from '../component/commonComponents/ConfirmSweetAlert'

class container extends Component {

   state={
     confirmAlertModal: false,
     toggle:true
   }
   hideShow=()=>{
    this.setState({toggle:!this.state.toggle})
}
    render() {
     
        return (
            <div className="pagewrapper eieastheme toggled">
            <div id="show-sidebar" className="btn btn-sm btn-dark">
              <i className="fas fa-bars"></i>
            </div>
            <nav id="sidebar" className="sidebarwrapper">
              <div className="sidebar-content">
              
                <div className="sidebarheader">
                  <div className="userpic">
                    <Image className="logoWidth" src={logo} alt="Logo" fluid/>
                  </div>
                </div>
                <div className="sidebarmenu">
                  <ul id="menu">
                    <li>
                      <NavLink to="/employeeList">
                        <span>Employee List</span>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/addEmployee">
                        <span>Add Employee</span>
                      </NavLink>
                    </li>
                    
                    <li onClick={()=>this.setState({confirmAlertModal:true})}>
                      <a className="logoutclass">
                        <span>Logout</span>
                      </a>
                    </li>

                  </ul>
                </div>
              </div>
              <ConfirmAlert msg="Are you sure you want to log out?" show={this.state.confirmAlertModal} cancelHandler={()=>{this.setState({confirmAlertModal:false});}} nextAction={()=>{
                localStorage.clear()
                 this.props.history.push('/login')
               }} />
             </nav>
             
            <main className="pagecontent">
              <div className="container-fluid">
               {this.props.children}
              </div>
          
            </main>
     
           
          </div>
        );
    }
}

export default withRouter(container);