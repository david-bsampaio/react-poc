import React from 'react'

const person = (props) => {
    return (
        <div>
            <p>Nome: {props.name}. Idade: {props.age} anos</p>
            <p>{props.children}</p>
        </div>
    )
}

export default person;