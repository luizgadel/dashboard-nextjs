'use client';

import { usePathname } from "next/navigation";
import Button from "../ui/button";
import clsx from "clsx";
import { ButtonData } from "@/app/lib/definitions";
import Breadcrumbs from "../ui/breadcrumbs";

export default function UsersLayout({ children }: { children: React.ReactNode}) {
    const pathname = usePathname();
    
    const addUser: ButtonData = {
        name: "Add",
        icon: "bi-plus-lg",
        href: "/users/create",
    }

    function getBreadcrumbArray(): ({label: string, href: string, active: boolean})[] {
        const baseHref = '/users'
        const pathPages = pathname.slice(1).split('/');
        const breadcrumbsArray = pathPages.map((p, index) => {
            switch(p) {
                case 'users': return { 
                    label: p.charAt(0).toUpperCase() + p.slice(1), 
                    href: baseHref, 
                    active: (index == pathPages.length - 1)
                }; 
                case 'create': 
                case 'edit': 
                default: return{ 
                    label: p.charAt(0).toUpperCase() + p.slice(1), 
                    href: baseHref + '/' + p, 
                    active: (index == pathPages.length - 1)
                }
            }
        })
        return breadcrumbsArray
    }

    const breadcrumbs = getBreadcrumbArray();
    const crumbsLength = breadcrumbs.length;

    return (
        <div className="flex flex-col grow px-16 py-32">
            <div className="flex">
                <div className="flex grow">
                    <Breadcrumbs breadcrumbs={breadcrumbs} />
                </div>
                <div className={clsx('visible', {'invisible': pathname != '/users'})}>
                    <Button {...addUser} />
                </div>
            </div>
            {children}
        </div>
    )
}