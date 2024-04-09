"use client"
import { useSession } from "next-auth/react"
import { useState } from "react"

export default function Profile() {

    const [user, updateUser] = useState(useSession())

    return (
        <div className="h-screen">
            {user.status === "loading" ? (
                ""
            ) : (
                <div>
                    <img className=" rounded-full" src={user.data?.user?.image as string} />
                    <h1>
                        Hey  {user.data?.user?.name}


                    </h1>
                </div>
            )}

        </div>
    )
}