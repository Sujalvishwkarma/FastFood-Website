import Image from "next/image"
import Link from "next/link"
import { PrimaryNavbar, PrimaryNavbarLink } from "@/data/Menu"
export function Topbar() {
    return (
        <>
        </>
    )
}
export function Navbar() {
    return (
        <>
            <nav className="py-4 px-16 flex justify-between items-center">
                <div className="flex items-center">
                    <Image src={'/images/burger-icon.jpg'} width={50} height={50} alt="logo" />
                    <h1 className="text-xl font-bold text-primary">Fast Food</h1>
                </div>
                <ul className="flex">
                    {PrimaryNavbar.map((item, index) => (
                        <PrimaryNavbarLink key={index} name={item.name} href={item.href} dropdownlink={item.dropdownLink} />
                    ))}
                </ul>
                <Link className="px-8 hover:scale-95 transition duration-200 py-3 rounded-full bg-yellow-500 border border-yellow-700 text-primary font-bold shadow-lg" href={''}>Sign in</Link>
            </nav>
        </>
    )
}

export default function Header(props) {
    return (
        <div className={`${props.position == "absolute" && 'absolute w-full'}`}>
            <Topbar />
            <Navbar />
        </div>
    )
}