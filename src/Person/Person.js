import React from 'react';
import Radium from 'radium';

const style = {
    "width": "40%",
    "margin": "16px auto",
    "border": "1px solid #eee",
    "boxShadow": "0 2px 3px #ccc",
    "padding": "16px",
    "textAlign":"center",
    '@media (min-width: 700px)':{
        width:'400px'
    }
  };

const person = (props) => {
    return (
        <div style={style}>
            <p onClick={props.click}>Nome: {props.name}.</p>
            <p>Idade: {props.age} anos</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name}/>
        </div>
    )
}

export default Radium(person);