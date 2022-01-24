import React from 'react';

const Cards = (props) => {
    return <div className="card">
        <div className="line"></div>
        <div>
            <p className={props.class}>{props.title}</p>
            <p>{props.desc}</p>
        </div>
    </div>

};

export default Cards;
