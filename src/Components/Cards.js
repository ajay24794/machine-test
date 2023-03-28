import React from "react";
const Cards = (props)=>{
    const {details} = props;
    return(
            <div className="col-md-4 col-sm-6" key={details.id}>
                <div className="card mb-4" key={details.id}>
                    <img className="card-img-bottom" src={details.thumbnail} alt="Card image" style={{width: "100%", maxHeight:"230px"}} />
                    <div className="card-body">
                        <h4 className="card-title">{details.title}</h4>
                        <p className="card-text">{details.description}</p>
                    </div>
                    
                </div>
            </div>
    )
}

export default Cards;