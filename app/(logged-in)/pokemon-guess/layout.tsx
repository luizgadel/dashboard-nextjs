import NavBar from "../ui/pokemon-guess/navbar";

export default function Layout({ children }: { children: React.ReactNode}) {
    return (
        <div className="flex flex-row w-full h-min-screen">
            <NavBar />
            {children}
        </div>
    )
}