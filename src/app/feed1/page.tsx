import Link from "next/link";

export default function Feed(){
    return(
        <>
           <h1>Feed Page1</h1>
           <div>
             <Link href={"/feed1/feed2"}>F2</Link> <br/>
             <Link href={"/feed3"}>F3</Link>
           </div>
        </>
    )
}