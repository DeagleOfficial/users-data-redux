import React from "react";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { update } from "../redux/userSlice";
import "./Buttons.css"


const Buttons = () => {

    const [loading, setLoading] = useState(true)

    const users = useSelector((state) => state.users)
    const dispatch = useDispatch()

    const getData = async () => {
        const res = await fetch(`https://reqres.in/api/users`)
        const parsedData = await res.json()
        dispatch(update(parsedData.data))
        setLoading(false)
    }

    useEffect(() => {
        getData()
    }, [])

if (loading) return (
    <div className="d-flex justify-content-center">
    <div className="spinner-border" role="status">
        <span className="sr-only"></span>
    </div>
    </div>
)

console.log("State data: ")
console.log(users)
return (
    <>
    <div className="header">
    <h3>Click on a button to see User Details</h3>
    </div>

    <div className="container buttons">
        
        {
            users.value.map(user => (
                <div>
                    <Link to={`/${user.id}`}>
                        <button className="btn btn-lg btn-primary">{user.id}</button>
                    </Link>
                </div>
            ))
 
        }
    </div>
    </>
)

}

export default Buttons;