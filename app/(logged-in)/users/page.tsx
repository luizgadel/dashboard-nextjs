import { getAllUsers } from "@/app/lib/data";
import UserTable from "../ui/user-table";

export default async function UsersPage() {
    const registeredUsers: { id: number, name: string, email: string }[] = await getAllUsers()

    return (
        <>
            <UserTable users={registeredUsers}/>
        </>
    )
}