import React, {useState, useEffect} from "react";
import axios from "axios";
import {useParams} from "react-router-dom"
import {useNavigate} from "react-router-dom"

const EditPage = () =>{
    const {id} = useParams()

    const navigate = useNavigate()

    const [title, setTitle] =useState()
    const [price, setPrice] =useState()
    const [description, setDescription] =useState()


    useEffect(()=>{
        axios.get(`http://localhost:8000/api/prods/${id}`)
            .then(res => {
                const oneProd = res.data
                setTitle(oneProd.title)
                setPrice(oneProd.price)
                setDescription(oneProd.description)
                
                })
            .catch(err=>console.log(err))
    }, [])

    const handleSubmit = (e)=>{
        e.preventDefault()
        axios.put(`http://localhost:8000/api/prods/${id}`, {title, price, description})
            .then(res=>{
                navigate('/prods')
            })
            .catch(err=>console.log(err))

    }

    return (
    
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
                <button type="submit">Submit Changes</button>
                </div>
            </form>
        </div>
    )
        
    
}

export default EditPage