import React, {useState, useEffect} from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { Navigate } from "react-router-dom";

const DetailsPage = () =>{
    const {id} = useParams()

    const navigate = useNavigate()

    const[oneProd, setOneProd] = useState()


    useEffect(()=>{
        axios.get(`http://localhost:8000/api/prods/${id}`)
            .then(res => {
                setOneProd(res.data)
                })
            .catch(err=>console.log(err))
    }, [])

    const handleDelete = ()=>{
        axios.delete(`http://localhost:8000/api/prods/${id}`)
        .then(res =>{
            navigate('/prods')
        })
        .cathc(err=>console.log(err))
    }

    return (
        <div>
            {
                oneProd?
                <div>
                    <h1> {oneProd.title} </h1>
                    <h4> Price: ${oneProd.price} </h4>
                    <h4> Description: {oneProd.description} </h4>
                    <p><button onClick={handleDelete}>Delete</button></p>
                </div>:
                <h1>Loading...</h1>
            }
        </div>
    )
        
    
}

export default DetailsPage