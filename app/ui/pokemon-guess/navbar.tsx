import NavLinks from "./nav-links";

export default function NavBar() {
    return (
        <>
            <div className="flex flex-col w-64 min-h-screen bg-neutral-50 border border-gray-300">
                <div className="h-16 flex items-center">
                    <span className="mx-auto">Pokemon guess!</span>
                </div>
                <div className="flex grow flex-col px-3 border-t border-gray-300">
                    <NavLinks />
                </div>
            </div>   
        </>
    );
}