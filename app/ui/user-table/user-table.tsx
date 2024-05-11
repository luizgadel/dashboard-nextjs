'use client';
type User = {
    id: number,
    name: string,
    email: string
}

export default function UsersTable() {
    function getUserName(u: User) {
        return u.name;
    }

    function getUserEmail(u: { id: number, name: string, email: string }) {
        return u.email;
    }

    function EditButton({ user }: { user: User }) {
        return (    
            <button className="h-9 rounded-lg px-2
            text-halborn-300 hover:text-halborn-500" onClick={
                () => console.log(`show the edit modal for ${user.name}`)
            }>
                <i className="bi-pencil"></i>
                <span className="ms-2">Edit</span>
            </button>
        )
    }

    const columnNames = [
        { name: "Name", action: (u: User) => { return getUserName(u) }}, 
        { name: "Email", action: (u: User) => { return getUserEmail(u) }}
    ]
    const users: { id: number, name: string, email: string }[] = [
        { id: 1, name: 'Luiz Gadelha', email: 'luizgadelha@hotmail.com'},
        { id: 2, name: 'Lucca Marinho', email: 'luccamarinho@gmail.com'},
        { id: 3, name: 'Eduarda da Silva', email: 'dudasilva@yahoo.com'},
        { id: 4, name: 'Miguel Brandão', email: 'miguelbr@live.com'},
        { id: 5, name: 'Artur Maximus', email: 'max.artur@bol.com.br'}
    ]
    return (
        <div className="flex flex-row border border-halborn-500 rounded mt-3">
            {columnNames.map((cn) => (
                <div key={cn.name} className="flex grow flex-col">
                    <div className="h-12 ps-3 pt-3">
                        <span>
                            {cn.name}
                        </span>
                    </div>
                    {users.map(u => (
                        <div key={u.email} className="h-12 ps-3 flex items-center border-t border-halborn-500">
                            <span>
                                {cn.action(u)}
                            </span>
                        </div>
                    ))}
                </div>
            ))}
            <div className="flex grow-[0.2] flex-col ">
                <div className="h-12 px-3 flex justify-center items-center">
                    <span>
                        Actions
                    </span>
                </div>
                {users.map(u => (
                    <div className="h-12 flex justify-center items-center py-auto border-t border-halborn-500">
                        <EditButton user={u}/>
                    </div>
                ))}
            </div>
        </div>
    )
}