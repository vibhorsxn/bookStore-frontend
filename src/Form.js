import React,{useState} from 'react';
// import { API } from './backend';
import axios from 'axios';

const Form = ({data}) => {

    const [state,setState] = useState({
    name: "",
    email: "",
    title:data.title,
    author:data.author,
    address:""
    });
    
    const handleChange = (e) => {
    setState({...state,[e.target.name]:e.target.value});
    }
    
    const handleSubmit = (e) => {
        console.log("on change" ,e);
    e.preventDefault();
    const{name,email,title,author,address}=state;
    //console.log("enter name",name);
    //console.log("enter email",email);
    axios.post("/buybook",{name,email,title,author,address})
    .then((result) => {console.log("Result is here >",result)});
    
    }
    
    return(
        <>
        <h2>Title:{data.title}</h2>
         <h3>Author:{data.author}</h3>
    <form onSubmit={handleSubmit}>
    <input placeholder="Enter Name" name="name" type = "text" value={state.name} onChange={handleChange}/>
    <input placeholder="Enter Email" name="email" type = "email" value={state.email} onChange={handleChange}/>
    <textarea placeholder="Enter Address" name="address" type = "text" value={state.address} onChange={handleChange}/>
    <button type ="submit">Submit</button>
    </form>
    </>
    )
    }

export default Form;