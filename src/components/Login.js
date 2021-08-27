import Header from './Header';
import { useHistory } from "react-router-dom";
import React, { useState, useEffect } from "react";

function Login(){
    const history = useHistory();   
     useEffect(() => {
       if (localStorage.getItem("user-info")) {
         history.push("/add");
       }
     }, []);
    return(
        <div>
            <Header/>
            <h1>Halaman login</h1>
        </div>
    )
}

export default Login
