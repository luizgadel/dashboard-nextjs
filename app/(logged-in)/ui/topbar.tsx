import DropdownMenu from "./dropdown-menu";
import BarLinks from "./bar-links";
import Link from "next/link";

export default function Topbar() {
    const menuItems = [
        { text: 'Home', icon: 'bi-house', link: '/home'},
        { text: 'Users', icon: 'bi-people', link: '/users'}
    ]
    return (
        <div className='flex grow justify-between items-center h-16 ps-14 bg-black border-b border-halborn-500'>
            <div className="flex w-1/2  md:w-5/12 lg:w-1/3 xl:w-1/4 justify-between">
                <Link 
                    key={'luizi'}
                    href={'/'}>
                    <div className="
                        rounded-lg h-9 px-2
                        flex items-center justify-center 
                        text-xl text-halborn-500 font-bold
                    ">
                        LUIZI
                    </div>
                </Link>
                <div className="flex">
                    <BarLinks menuItems={menuItems} />
                </div>
            </div>
            <div className="me-16">
                <DropdownMenu />
            </div>
        </div>
    )
}