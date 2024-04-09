"use client"
import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";

export default function Header() {

    const session = useSession()
    console.log(session)
    return (
        <header className="w-full flex justify-between bg-slate-600">
            Whata Cracking Idea {session?.data?.user?.name}
            <div className="[&>*]:p-4">
                <Link href="/">Home</Link><Link href="/search">Search</Link><button onClick={() => signIn()}>Login</button><button onClick={() => signOut()}>Logout</button><Link href="/api/auth/signOut">Logout</Link>
            </div>
        </header>
    )
}