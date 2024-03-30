import { withAuth } from "next-auth/middleware"
import { NextResponse } from "next/server"

export default withAuth(
    function middleware(req){
        console.log(req.nextUrl.pathname)
        console.log(req.nextauth.token.role)
        if(req.nextUrl.pathname.startsWith("/CreateUser") && req.nextauth.token.role!="admin"){
            return NextResponse.rewrite(new URL("/Denied", req.url))
        }
    },
    //This callback is used in the context of authentication middleware to determine whether a user has the necessary credentials to access a certain route or resource.
    {callbacks:{
        authorized:({token}) => !!token
    }}

)

export const config = {matcher:["/CreateUser"] }
