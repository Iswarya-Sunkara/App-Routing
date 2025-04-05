import { Suspense } from "react";
import Firstblog from "./firstblog/page";
import Secondblod from "./secondblog/page";
export default async function Blog(){
    await new Promise((resolve) => setTimeout(resolve, 2000));
    return(
        <>
          <h1>my blog</h1>
          <Suspense fallback={<p>1st blog details....</p>}>
            <Firstblog />
          </Suspense>
          <Suspense fallback={<p>2nd blog details....</p>}>
            <Secondblod />
          </Suspense>
        </>
    )
}