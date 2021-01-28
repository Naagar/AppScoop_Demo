import React, {Component} from 'react';
import SweetAlert from 'react-bootstrap-sweetalert';
import classes from './ConfirmSweetAlert.module.css';


class ConfirmAlert extends Component {
    
        render(){
        
        return(
         this.props.show ?<SweetAlert
          
          showCancel
          confirmBtnText="Confirm"
          confirmBtnCssClass = {classes.confirmButton}
          cancelBtnCssClass = {classes.cancelButton}
          cancelBtnBsStyle = "none"
          confirmBtnBsStyle = "none"
          onConfirm={this.props.nextAction}
          onCancel={() => {this.props.cancelHandler()}}
      >
          <span className={classes.msgStyle}>{this.props.msg}</span>
           
          
      </SweetAlert> : null
        );
    }
}

export default ConfirmAlert;