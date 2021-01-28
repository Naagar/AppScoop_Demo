import React from 'react'
import Servererror from '../../Assets/icons/3x/Servererror@3x.png'

class ServerError extends React.Component{
    render(){
        return(
            <div style={{padding:"50px",display:"flex",flexDirection:"column",alignItems:"center", marginTop: this.props.marginTop}}>
            <img height="200px" width="200px" style={{alignItems:"center"}}src={Servererror} alt="No Data"></img>
            <h5 style={{color:"grey",textAlign:"center"}}>Our servers are not responding at the moment, Please bear with us.</h5>
            <div></div>
            </div> 
        )
    }
}

export default ServerError