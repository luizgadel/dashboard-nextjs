import DropdownMenu from "../dropdown-menu/dropdown-menu";
import BarLinks from "../bar-links/bar-links";
import Link from "next/link";

export default function Topbar() {
    const menuItems = [
        { text: 'Home', icon: 'bi-house', link: '/'},
        { text: 'Users', icon: 'bi-people', link: '/users'}
    ]
    return (
        <div className='flex grow h-16 bg-black justify-between items-center'>
            <div className="flex">
                <Link 
                    key={'luizi'}
                    href={'/'}>
                    <div className="
                        rounded-lg h-9 w-24 md:me-16 lg:me-32 2xl:me-48
                        flex items-center justify-center 
                        text-xl text-halborn-500 font-bold
                    ">
                        LUIZI
                    </div>
                </Link>
                <BarLinks menuItems={menuItems} />
            </div>
            <div className="me-4">
                <DropdownMenu />
            </div>
        </div>
    )
}