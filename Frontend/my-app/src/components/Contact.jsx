import React from "react";
import { useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import axios from "axios";
import {toast} from "react-toastify";

const Contact=()=>{
    const [name,setName]= useState("");
    const[email,setEmail]=useState("");
    const[message,setMessage]=useState("");
    const[loading,setLoading]=useState(false);

    const sendMail= async(e)=>{
        e.preventDefault();
        setLoading(true);
        try {
            const {data}=await axios.post(
                "http://localhost:4000/send/mail",
                {
                    name,
                    email,
                    message
                },
                {
                    withCredentials:true,
                    headers:{"Content-type":"application/json"}
                }
            );
            setName("");
            setMessage("");
            setEmail("");
            toast.success(data.message);
            setLoading(false);
        } catch (error) {
            setLoading(false);
            toast.error(error.response.data.message);
            console.log(error.resposne.data.message);
        }
    };

    return(
        <section className="contact">
            <form onSubmit={sendMail}>
                <h1>Send Your Message</h1>
                <div>
                    <label>Enter Your Name</label>
                    <input type="text" value={name} onChange={(e)=>setName(e.target.value)} />
                </div>
                <div>
                    <label>Enter Your Email</label>
                    <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} />
                </div>
                <div>
                    <label>Enter Your Message</label>
                    <input type="text" value={message} onChange={(e)=>setMessage(e.target.value)} />
                </div>
                <div>
                    <button 
                    type="submit"
                    disabled={loading}
                    style={
                    {display:"flex",
                    justifyContent:"center",
                    alignItems:"center",
                    gap:"20px"}
                    }
                    >
                     {loading && <ClipLoader size={20} color="white"/>} 
                     Send Message      
                    </button>
                </div>
            </form>
        </section>
    )
}
export default Contact;