import React from "react";
import { Link } from "react-router-dom";

const UpdateContact = () => {

    return <>
     <h1> this is the edit page</h1>

     <Link to = "/">
        <p>Back to Home</p>
    </Link>
     <Link to = "/addContact">
        <p>Add Contact</p>
    </Link>
    </>
   
}

export default UpdateContact;