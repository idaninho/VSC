import React from "react";
import {useState} from "react";
import {Link} from "react-router-dom";

export default function LogInScreen(){

    const [userName,setUserName] = useState("");
    const [password,setPassword] = useState("");

    const updateUserName = (event) => {
        setUserName(event.target.value);
    };

    const updatePassword = (event) => {
        setPassword(event.target.value);
    };

    const updateLog=() =>{
        console.log({userName,password});
    }

    
    const LogInRequest =() =>
    {
        var serverUrl = "http://localhost:8080"
        var jsonForm = {userName:userName,password:password}
        fetch(`${serverUrl}/login`, {
            method: "POST",
            mode: 'no-cors',
            url: serverUrl,
            credentials: 'include',
            body: JSON.stringify(jsonForm)
        }).then(res => {
            console.log("Request complete! response:", res);
        }).catch(err=>{console.log(err)});
    }




     return(
         <div>
        <h1>Log In </h1>
       <form>
         <label form="text-form">user name:</label>
         <input type="text" value={userName} onChange={updateUserName} id="text-form" />
         <label form="text-form">password:</label>
         <input type="text" value={password} onChange={updatePassword} id="text-form" />
         </form>
         <button onClick={() => LogInRequest()}>log In</button>
         <h3>Don't you have a user? create now!!! </h3>
         <Link to="/SignUp">
             <button>sign up</button>
              </Link>
         

       </div>
     );
 }