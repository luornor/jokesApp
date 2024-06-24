"use client";
import React from "react";
import { useGetAllJokesQuery } from "../redux/AlljokesApi";
import { useState,useEffect } from "react";


export default function Alljokes() {
    const [jokes, setJokes] = useState([]);
    

    const { data, error, isLoading } = useGetAllJokesQuery();
    useEffect(() => {
        if (data) {
            console.log(data)
            setJokes(data.jokes);
        }
    },[data]);

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;


    return (
        <div className="items-center ">
            <h1 className="text-xl ">Here are some jokes</h1>
        {jokes.map((joke) => (
        <div className="justify-center">
        <ul >
            {joke.type === "single" ? (
                <li>{joke.joke}</li>
            ) : (
                <>
                    <li>{joke.setup}</li>
                    <li>{joke.delivery}</li>
                </>
            )}
        </ul>
        </div>
        ))}
    <div>
    </div>
    </div>
    );
}