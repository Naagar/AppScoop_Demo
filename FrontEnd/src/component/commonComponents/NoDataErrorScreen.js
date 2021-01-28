import React from 'react'
import NoData from '../../Assets/icons/3x/Nodata@3x.png'

class NetworkError extends React.Component{
    render(){
        return(
            <div style={{padding:"10% 0% 0% 0%",display:"flex",flexDirection:"column",alignItems:"center"}}>
            <img height="200px" width="200px" style={{alignItems:"center"}}src={NoData} alt="No Data"></img>
            <h5 style={{color:"grey",textAlign:"center"}}>{this.props.msg}</h5>
            <div></div>
       </div> 
        )
    }
}

export default NetworkError