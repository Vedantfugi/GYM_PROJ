import React from "react";
import {Check} from "lucide-react";


const Pricing=()=>{
    
    const pricing=[
        {
            imageUrl:"pricing.jpg",
            title:"Quarterly",
            price:"18000",
            length:"3"
        },
        {
            imageUrl:"pricing.jpg",
            title:"Halfyearly",
            price:"30000",
            length:"6"
        },
        {
            imageUrl:"pricing.jpg",
            title:"Annualy",
            price:"45000",
            length:"12"
        }
    ]
    return(
        <section className="pricing" >
            <h1>V K FITNESS PLANS</h1>
            <div className="wrapper">
                {pricing.map(element=>{
                    return(
                        <div className="card" key={element.title}>
                            <img src={element.imageUrl} alt="" />
                            <div className="title">
                                    <h1>{element.title}</h1>
                                    <h1>package</h1>
                                    <h3>Rs. {element.price}</h3>
                                    <p>For {element.length} months</p>
                            </div>
                            <div className="description">
                                <p>
                                    <Check /> 24/7 training
                                </p>
                                <p>
                                    <Check /> equipment available
                                </p>
                                <p>
                                    <Check />Cardio section
                                </p>
                                <p>
                                    <Check /> Diet plans
                                </p>
                                <p>
                                    <Check />Steam bath faciility
                                </p>
                                
                            </div>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default Pricing;