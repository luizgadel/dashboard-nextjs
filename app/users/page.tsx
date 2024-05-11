import UserTable from "../ui/user-table/user-table";

export default function Page() {
    return (
        <>
            <div className="flex flex-col grow h-screen bg-black text-halborn-500 px-16 py-32">
                <div className="flex justify-between">
                    <span className="font-bold text-2xl">Users</span>
                    <button >
                        <div className="
                            border border-halborn-300 text-halborn-300 rounded-lg h-9 px-2
                            flex items-center justify-center 
                            hover:border-halborn-500 hover:text-halborn-500"
                        >
                            <i className="bi-plus-lg"></i>
                            <span className="ms-2">Add</span>
                        </div>
                    </button>
                </div>
                <UserTable />
            </div>
        </>
    )
}