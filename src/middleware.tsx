import { NextRequest,NextResponse } from "next/server";
export default function Middleware(request:NextRequest){
   // return NextResponse.redirect(new URL('/',request.url));
   if(request.nextUrl.pathname === "/about"){
    return NextResponse.rewrite(new URL("/profile",request.nextUrl))
   }
}
// export const config={
//    matcher:"/about"
// }