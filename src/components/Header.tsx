'use client';
import { faPlus } from "@fortawesome/free-solid-svg-icons/faPlus";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { signIn } from "next-auth/react";
import Link from "next/link";

export default function Header() {
    return (
        <header className="border-b p-4 flex items-center justify-between">
            <Link
                className="text-blue-600 font-bold text-2xl"
                href="/">
                Marketplace
            </Link>
            <nav className="flex gap-4 *:rounded *:py-1">
                <button className=" border border-blue-600 text-blue-600 inline-flex gap-1 items-center px-2 mr-4">
                    <FontAwesomeIcon icon={faPlus} className="h-4" />
                    <span>Post a add</span>
                </button>
                <span className="border-r"></span>
                <button className="border-0 text-gray-600">Sign up</button>
                <button
                    onClick={() => signIn('google')}
                    className="bg-blue-600 text-white border-0 px-6">
                    Login
                </button>
            </nav>
        </header>
    )
}