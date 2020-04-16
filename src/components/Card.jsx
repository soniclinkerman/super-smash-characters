import React from "react";
import "./Card.css";

const Card = ({name, series, id, image}) =>{
        return( 
            <div className="dib  ma2 grow shadow-5 card-layout">
                <img src={image} alt="profile-icon"/>

            <div className="tc">
                <h2>{name}</h2>
                <p>Series: {series}</p>
            </div>
        </div>

    )

}

export default Card