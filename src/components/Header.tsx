import Link from "next/link";

export default function Header() {
    return (
        <header className="border-b p-4 flex items-center justify-between">
            <Link
                className="text-blue-600 font-bold text-2xl"
                href="/">
                Marketplace
            </Link>
            <nav className="flex gap-4 *:border *:rounded *:px-2 *:py-1">
                <button className="border-blue-600 text-blue-600">
                    Post a add
                </button>
                <button className="">Login</button>
                <button className="">Register</button>
            </nav>
        </header>
    )
}