import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreatePage =() => {
    const [title, setTitle] =useState()
    const [price, setPrice] =useState()
    const [description, setDescription] =useState()

    const navigate = useNavigate()

    const handleSubmit = (e)=>{
        e.preventDefault()
        axios.post(`http://localhost:8000/api/prods`,{title, price, description})
            .then(res=>{
                console.log(res.data)
                navigate(`/prods`)
            })
            .catch(err=>console.log(err))
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                <label for="title">Title: </label>
                <input type="text" name="title" value={title}
                    onChange={(e) =>setTitle(e.target.value)} /><br></br>
                <label for="price">Price: </label>
                <input type="number" name="price" value={price}
                    onChange={(e) =>setPrice(e.target.value)} /><br></br>
                <label for="description">Description: </label>
                <input type="text" name="description" value={description}
                    onChange={(e) =>setDescription(e.target.value)} /><br></br>
                <button type="submit">Create</button>
                </div>
            </form>
            
        </div>
    )
}

export default CreatePage