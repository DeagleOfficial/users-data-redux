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
        // .then(res => res.json())
        // .then(res => console.log(res.data))
        // .then(res => dispatch(update(res.data)))
        // .then(setLoading(false))

    }

    useEffect(() => {
        getData()
    }, [])

if (loading) return (
    <div class="d-flex justify-content-center">
    <div class="spinner-border" role="status">
        <span class="sr-only"></span>
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