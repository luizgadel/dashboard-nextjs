'use client';
import Link from "next/link";
import { ButtonData } from "@/app/lib/definitions";
import clsx from "clsx";

export default function Button({name, href, action, icon}: ButtonData) {
    function ButtonChild() {
        return (
            <>
                {icon != '' && <i className={icon}></i>}
                <span className={clsx({'ms-2': icon != ''})}>{href != undefined ?'Go to ':''}{name}</span>
            </>
        )
    }

    const classes = '\
        w-full\
        rounded-lg h-10 border bg-halborn-500 hover:bg-halborn-600 shadow-sm\
        flex px-3 items-center justify-center\
    ' 

    return (
        <>
            {href != undefined ? (
                <Link className={classes} href={href}>
                    <ButtonChild />
                </Link>
            ) : action != undefined ? (
                <button className={classes} onClick={action}>
                    <ButtonChild />
                </button>
            ) : (
                <>{name}</>
            )}
        </>
    )
}