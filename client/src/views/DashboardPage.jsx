import React, {useState, useEffect} from "react";
import axios from "axios";
import { Link} from "react-router-dom";

const DashboardPage = () =>{
    const [prodList, setProdList] = useState([])

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/prods`)
            .then(res =>{
                console.log(res.data)
                setProdList(res.data)
            })
            .catch(err => console.log(err))
    },[])

    const handleDelete = (deleteId)=>{
        axios.delete(`http://localhost:8000/api/prods/${deleteId}`)
        .then(res =>{
            handleFilterList(deleteId)
        })
        .cathc(err=>console.log(err))
    }

    const handleFilterList = (deleteId)=>{
        const filteredList = prodList.filter((eachProd)=>deleteId !==eachProd._id)
        setProdList(filteredList)
    }
    return (
        <div className="container">
                <table className="center">
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Price</th>
                            <th>Description</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            prodList.map((eachProd, idx)=>{
                                return(
                                    <tr key={idx}>
                                        <td> {eachProd.title} </td>
                                        <td> $ {eachProd.price} </td>
                                        <td> {eachProd.description} </td>
                                        <td><Link to={`/prods/${eachProd._id}`}>View</Link> |
                                            <Link to={`/prods/${eachProd._id}/edit`}>Edit</Link>
                                            <button onClick={(e)=>handleDelete(eachProd._id)}>Delete</button>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
        </div>
    )
        
    
}

export default DashboardPage