'use client'

import { useState, useEffect } from "react"
import { Counter } from "./Counter"


const URL = "https://jsonplaceholder.typicode.com/posts"



const ClientComp = () => {

    const [postData, setPostData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch(URL);
                const data = await res.json();
                console.log(data);
                setPostData(data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        }
        fetchData();
    }, []);

    return (
        <>

            <button className="bg-green-500 m-5 p-5" onClick={() => alert("hii")}>


                click</button>

                <Counter/>


            <ul className="grid grid-cols-3 gap-5">
                {postData.map((curElem, index) => {
                    return <li key={index}>{curElem.body}</li>
                })}

            </ul>




        </>
    )
}

export default ClientComp