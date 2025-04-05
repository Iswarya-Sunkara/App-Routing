import Link from "next/link";

export default function InnerFeed(){
    return(
        <>
          <h1>inner Feed Page</h1>
          <Link href={"/feed5"}>F5</Link>
        </>
    )
}