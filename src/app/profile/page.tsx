"use client"
import { redirect } from "next/navigation"
export default function page(){
    const handler = () =>{
        redirect("/about")
    }
    return(
        <>
           <h1>profile page</h1>
           <button onClick={handler}>details</button>
        </>
    )
}