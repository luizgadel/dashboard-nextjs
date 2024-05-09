'use client';
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";


const navItems = [
    { text: "Guess the pokemon", icon: "bi-question-lg", link: "/pokemon-guess"}, 
    { text: "Dashboard", icon: "bi-graph-up", link: "/pokemon-guess/dashboard"}, 
]

export default function NavLinks() {
    const pathname = usePathname();
    return (
        <>
            {navItems.map(item => (
                <Link href={item.link}>
                    <div 
                        className={clsx(
                            "h-12 mt-3 flex rounded-md",
                            {
                                'bg-neutral-200 text-black/100': pathname == item.link,
                            },
                            {
                                'text-black/75 hover:text-black/100': pathname != item.link,
                            }
                        )}
                    >
                        <div className="ms-4 my-auto">
                            <i className={item.icon}></i>
                            <span className="ms-2">{item.text}</span>
                        </div>
                    </div>
                </Link>
            ))}
        </>
    )
}