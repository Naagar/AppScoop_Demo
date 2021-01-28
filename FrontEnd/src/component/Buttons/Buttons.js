import React from 'react';
import classes from './button.module.css'

export const FormButton = (props) => {
    return <button type="button" style={{width:props.width==undefined?"auto":props.width,
     backgroundColor:props.color==undefined?"#8cc63f":props.color,padding:props.padding==undefined?"5px 0px":props.padding}} 
    className={classes.btnWarning}>{props.children}</button>
    ;
}
export const SimpleButton = (props) => {
    return <button type="button" style={{width:props.width==undefined?"auto":props.width,
     backgroundColor:props.color==undefined?"#8cc63f":props.color,padding:props.padding==undefined?"5px 0px":props.padding}} 
    onClick={()=>props.fun()}
    className={classes.btnWarning}>{props.children}</button>
    ;
}

export const HoverButton = (props) => {
    return <div className={classes.heading} style={{width:props.width==undefined?"auto":props.width}}>
    <h4>{props.children}</h4>
    </div>;
}

export const DisabledButton = (props) => {
    return <button type="button" style={{width:props.width==undefined?"auto":props.width,
     backgroundColor:props.color==undefined?"#bfbfbf":props.color,padding:props.padding==undefined?"5px 0px":props.padding}} 
     disabled={true}
    className={classes.disabledButton}>{props.children}</button>
    ;
}