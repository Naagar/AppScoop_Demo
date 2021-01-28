import React from 'react'
import '../Pagination/Pagination.css'


const Pagination = (props)=>{

   var arr =[]
   
   const numberofLinks =()=>{
    for (let i = 1; i <= props.pageRangeDisplayed; i++) {
            arr.push(<div className={props.activePage===i?'active1':'showPagination'} key={i} onClick={()=>props.onPageChange(i)}>{i}</div>)
            }
        }
        numberofLinks()
   
    return (
        <div>
        {props.pageRangeDisplayed?
            <div className='pagination' style={props.style}>
            {props.activePage===undefined || props.pageRangeDisplayed===null?"":
                <div>
                <div style={{display:'inline-block'}}  onClick={()=>props.onLeftChange()}><i className="fas fa-chevron-left arrow" style={props.activePage===1?{fontSize:'20px',color:'#e6ca93',marginRight:'11px'}:{fontSize:'20px',color:'#fbb03b',marginRight:'11px',cursor:'pointer'}} ></i></div>
                  
                        <div className="active1">{props.activePage}</div>
                <div style={{display:'inline-block'}} onClick={()=>props.onRightChange()}><i className="fas fa-chevron-right arrow" style={props.activePage===props.pageRangeDisplayed?{fontSize:'20px',color:'#e6ca93',marginLeft:'11px'}:{fontSize:'20px',color:'#fbb03b',marginLeft:'11px',cursor:'pointer'}}></i></div>
                </div>
                }
                 </div>       
            :null}
            </div>
        )
    }


export default Pagination
