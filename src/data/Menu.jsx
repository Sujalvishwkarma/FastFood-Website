import Link from "next/link"
import { IoCaretDown } from "react-icons/io5";
export const PrimaryNavbar = [
    {
        name: "Why FastFood?",
        href: ""
    },
    {
        name: "Services",
        href: ""
    },
    {
        name: "Menu",
        href: "",
        dropdownLink: [
            {
                name: "Burger",
                href: ""
            },
            {
                name: "Pizza",
                href: ""
            },
            {
                name: "Salad",
                href: ""
            },
            {
                name: "Sandwitch",
                href: ""
            },
        ]
    },
    {
        name: "Contact",
        href: ""
    },
    {
        name: "Food",
        href: ""
    }
]
export const AboutLinks = [
    {
        name: "About us",
        href: "",
    },
    {
        name: "Features",
        href: "",
    },
    {
        name: "News",
        href: "",
    },
    {
        name: "Menu",
        href: "",
    },
]
export const CompanyLinks = [
    {
        name: "Why FastFood ?",
        href: "",
    },
    {
        name: "Partner With Us",
        href: "",
    },
    {
        name: "FAQ",
        href: "",
    },
    {
        name: "Blog",
        href: "",
    },
]
export const SupportLink = [
    {
        name: "Account",
        href: "",
    },
    {
        name: "Support Center",
        href: "",
    },
    {
        name: "Feedback",
        href: "",
    },
    {
        name: "Contact Us",
        href: "",
    },
    {
        name: "Accesbility",
        href: "",
    },
]
export function PrimaryNavbarLink(props) {
    return (
        <li>
            <Link className="mx-3 after:absolute after:left-1/2 after:-bottom-2 after:rounded-full after:scale-0 hover:after:scale-100 after:transition duration-200 after:w-2 after:h-2 after:bg-primary font-semibold peer text-primary relative flex items-center gap-2" href={props.href}>{props.name}{props.dropdownlink && <IoCaretDown />}</Link>
            {props.dropdownlink && (
                <div className="absolute z-10 bg-white invisible peer-hover:visible peer-focus-within:visible hover:visible flex-col flex p-3 border shadow-xl rounded-md">
                    {props.dropdownlink.map((item, index) => (
                        <Link key={index} className="p-1 hover:font-bold hover:text-primary" href={item.href}>{item.name}</Link>
                    ))}
                </div>
            )}
        </li>
    )
}
export function FooterLink(props) {
    return (
        <li key={props.key}><Link className="hover:ml-3 hover:transition duration-300 hover:font-bold hover:text-primary" href={props.href}>{props.name}</Link></li>
    )
}