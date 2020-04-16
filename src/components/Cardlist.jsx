import React from "react";
import Card from "./Card";

const CardList = ({ characters}) => {
    return(
    <div>
        {
            characters.map((character, i) => {
                return (
                <Card 
                key={i} 
                id={characters[i].id} 
                name={characters[i].name} 
                series={characters[i].series}
                image={characters[i].images}
               

                />
            ); 
        })
        }
        
        </div>
    )

}

export default CardList