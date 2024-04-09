import { getSession, useSession } from 'next-auth/react'
import type { NextRequest } from 'next/server'

export { default } from "next-auth/middleware"

//export async function middleware(request: NextRequest) {
//const session = await getSession({ req: request })

// if (currentUser && !request.nextUrl.pathname.startsWith('/dashboard')) {
//     return Response.redirect(new URL('/dashboard', request.url))
// }

// if (!currentUser && !request.nextUrl.pathname.startsWith('/login')) {
//     return Response.redirect(new URL('/login', request.url))
// }
//}

export const config = {
    matcher: [
        "/profile/",
    ],
}