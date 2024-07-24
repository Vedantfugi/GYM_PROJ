import { Section } from "lucide-react";
import React from "react";
import { useState } from "react";
import { toast } from "react-toastify";

const BMICalculator=()=>{
    const [height,setHeight] =useState("");
    const[weight,setWeight]=useState("");
    const[gender,setGender]=useState("");
    const[bmi,setBmi]=useState("");


    const calculateBMI=(e)=>{
        e.preventDefault();
        if(!height || !weight || !gender ){
            toast.error("Please enter the basic details");
            return;
        }
    
        const heightInMeter=height/100;
        const bmiVal=(weight/(heightInMeter*heightInMeter)).toFixed(2);
        setBmi(bmiVal);
    
        if(bmiVal<18.5){
            toast.warning(
                "You are underweight"
            );
        }else if(bmiVal>18.5 && bmiVal<29.5){
            toast.success(
                "Great going try to achieve maximum muscle mass"
            );
        }else{
            toast.warning(
                "You are over-weight"
            );
        }
    };
    
    return(
        <section className="bmi">
            <h1>CALCULATE YOUR BMI</h1>
            <div className="container">
                <div className="wrapper">
                    <form onSubmit={calculateBMI}>
                        <div>
                            <label >Enter Height in cms</label>
                            <input 
                            type="number" 
                            value={height}
                            onChange={(e)=>setHeight(e.target.value)}/>
                        </div>
                        <div>
                            <label >Enter weight in kgs</label>
                            <input 
                            type="number" 
                            value={weight}
                            onChange={(e)=>setWeight(e.target.value)}/>
                        </div>
                        <div>
                            <label >Select ur  Gender</label>
                            <select value={gender} onChange={(e)=>setGender(e.target.value)}>
                                <option value="">Select Gender</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                            </select>
                        </div>
                        <button type="submit">Calculate </button>

                    </form>

                </div>
                <div className="wrapper">
                    <img src="bmi.jpg" alt="" />
                </div>
            </div>
        </section>

    )
}
export default BMICalculator;