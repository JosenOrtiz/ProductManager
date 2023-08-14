import React, {useState, useEffect} from "react";
import axios from 'axios'

const ApiPage =() => {
    const  [message, setMessage] = useState()

    useEffect(() =>{
        axios.get("http://localhost:8000/api/test")
        .then(res => {
            console.log(res.data)
            setMessage(res.data)
        })
        .catch(err => console.log(err))
    },[])

    return(
        <div>
            <fieldset>
                <legend> ApiPage</legend>
                {
                    message?
                    <h1>message : {message.status}</h1>:
                    <h1>loading...</h1>
                }
                
            </fieldset>
        </div>
    )
}

export default ApiPage