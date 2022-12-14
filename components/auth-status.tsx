
import {getSession} from "next-auth/react"
import { Role } from "@prisma/client";

export default async function AuthStatus() {
  const session = await getSession()

  console.log(session)

  if (session && session?.user?.role === Role.ADMIN) {
    return (
      <div>
        <h1>Admin</h1>
        <p>Welcome to the Admin Portal!</p>
      </div>
    )
  } else {
    return (
      <div>
        <h1>You are not authorized to view this page!</h1>
      </div>
    )
  }
}