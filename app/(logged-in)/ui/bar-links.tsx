'use client'
import clsx from "clsx"
import Link from "next/link"
import { usePathname } from "next/navigation";

export default function BarLinks(
    { menuItems } : {
        menuItems: { text: string, icon: string, link: string }[]
    }
) {
    const pathname = usePathname();
    return (
        <>
            {menuItems.map(item => (
                <Link 
                key={item.text}
                href={item.link}>
                    <div 
                        className={clsx(
                            "rounded-lg h-9 ms-5 px-3 flex items-center justify-center",
                            { 'text-halborn-500': pathname == item.link },
                            { 'text-halborn-500/75 hover:text-halborn-500': pathname != item.link}
                        )}>
                        <i className={item.icon}></i>
                        <span className="ms-2">{item.text}</span>
                    </div>
                </Link>
            ))}
        </>
    )
}