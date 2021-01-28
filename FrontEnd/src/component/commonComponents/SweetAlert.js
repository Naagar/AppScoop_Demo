import React, {Component} from 'react';
import SweetAlert from 'react-bootstrap-sweetalert';
import './SweetAlert.css';



class Alert extends Component {
    state = {
        show: this.props.show
    }
    
    render(){
        return(
          this.state.show ? <SweetAlert style = {{width: '400px'}}
              type = {this.props.type}
              onConfirm={() => {this.props.resetState()}}
              confirmBtnBsStyle = "none"
              confirmBtnCssClass = 'newconfirmButtonStyle'
              title=""
              showConfirm={true}
              >
                <span>{this.props.msg}</span>
                </SweetAlert> : null
        );
    }
}


export default Alert;