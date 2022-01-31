import React from "react";
import './Card.css';

export default function Card(props) {
    return (
            <div className="card">
                <img src={props.img} className="card__img" />
                <div className="card__book">
                    <h2>{props.title}</h2>
                    <p>{props.author}</p>
                    <p>Ocena: {props.rating}/5</p>
                </div>
            </div>
    )
}