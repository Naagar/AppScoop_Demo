import React from 'react';
import {Row,Col, Form, Button,Modal} from 'react-bootstrap';
import {SimpleButton,HoverButton} from '../Buttons/Buttons'
import classes  from './commonpopup.module.css'
const Commonpopup = (props) => {
    return (
        <Modal
        show={props.show}
        size="sm"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      ><div style={{padding:"23px"}}>
       <span style={{textAlign:"center",fontWeight:"bold"}}>Are you sure you want to delete this partner?</span>
       <br/> <br/>
       <span className={classes.makeincenter}>
       <SimpleButton width="80px" fun={()=>props.closedeleteModal(props.deleteId)}>
       No
      </SimpleButton>
      &nbsp;&nbsp;&nbsp;&nbsp;
      <SimpleButton width="80px" fun={()=>{props.deletePartner(props.deleteId);props.closedeleteModal(props.deleteId)}}> 
       Yes
      </SimpleButton>
      </span>
      </div>
      </Modal>
    );
}

export default Commonpopup;