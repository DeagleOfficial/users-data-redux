import React from "react";
import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import './User.css';

const User = () => {

    const [loading, setLoading] = useState(true)
    const [userDetails, setUserDetails] = useState({})
    const params = useParams()

    useEffect(() => {

        const getData = async () => {
            const res = await fetch(`https://reqres.in/api/users/${params.id}`)
            const parsedData = await res.json()
            setUserDetails(parsedData)
            setLoading(false)
        }

        getData()
    }, [])

    if (loading) return (
        <div className="d-flex justify-content-center">
        <div className="spinner-border" role="status">
            <span className="sr-only"></span>
        </div>
        </div>
    )

    console.log("state data: ")
    console.log(userDetails)

    return (
        <div className="container user-card">

        <div className="card" style={{width: "18rem"}}>
        <img src={userDetails.data.avatar} className="card-img-top" alt="..."></img>
        <div className="card-body">
            <h5 className="card-title">{userDetails.data.first_name} {userDetails.data.last_name}</h5>
            <p className="card-text">{userDetails.data.email}</p>
        </div>
        </div>
        </div>
    )
}

export default User;