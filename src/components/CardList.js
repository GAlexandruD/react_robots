import React from 'react';
import Card from './Card';

const CardList = ({props}) => {
    return (
        props.map((user, i) => {
            return (
                < Card key={i} id={props[i].id} name={props[i].name} email={props[i].email}/>
            );
        })
    );
    }


export default CardList;