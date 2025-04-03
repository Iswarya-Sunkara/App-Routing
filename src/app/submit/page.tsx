"use client"
import { useRouter } from "next/navigation"
export default function Submit(){
    const router = useRouter()
    const handler=()=>{
        console.log("submit the product")
        router.push("/");
    }
    return(
        <>
          <h1>Submit Product</h1>
          <button onClick={handler}>Submit</button>
        </>
    )
}