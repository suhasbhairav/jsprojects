import React, {useState, useEffect} from 'react';
import axios from "axios";
import "./Auth.css";

const Home = () => {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");

    useEffect(() => {
      axios.get("/user/getDetails").then(({data: {firstName, lastName}}) => {
        setFirstName(firstName);
        setLastName(lastName);
      }).catch((err) => {
          console.log(err);
      })
    }, []);
    
  return (
    <div>
        <div>First Name: {firstName}</div>
        <div>Last Name: {lastName}</div>
    </div>
  )
}

export default Home