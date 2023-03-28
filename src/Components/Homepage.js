import React, {useState, useEffect} from "react";
import ShimmerUI from "./ShimmerUI"
import Cards from "./Cards";
import './cards.css';
const Homepage = ()=>{
    const url = 'https://dummyjson.com/products';
    const [data, SetDate] = useState([]);
    const getData = async()=>{
        let json = await fetch(url);
        let data = await json.json();
        SetDate(data.products);
        
    }
    useEffect(() => {
       getData();
    
    }, []);
    
    return(
        <>
        <div className="homepage">
            <div>
                <h1>Knowledge Base</h1>
                <hr></hr>
            </div>
            <div className="row p-5 m-0">
                {
                    data ===undefined || data?.length === 0 ?
                    <ShimmerUI /> : data?.map((details)=>{
                        return (
                            <Cards details={details}/>
                        )
                    })
                    
                }
            </div>
        </div>
        </> 
    )
}

export default Homepage;