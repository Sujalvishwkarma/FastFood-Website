import Image from "next/image"
import Link from "next/link"
export function SectionHeading(props) {
    return (
        <>
            <div className="text-center mb-10">
                <h4 className="font-semibold text-primary">{props.pretitle}</h4>
                <h1 className="text-4xl font-bold">{props.title}</h1>
                <p>{props.description}</p>
            </div>
        </>
    )
}

export function ServiceBox(props) {
    return (
        <div className="w-1/4 p-5 border shadow-lg rounded-lg">
            <div className="w-full flex justify-center">
                <Image src={props.image} width={200} height={200} alt="image" />
            </div>
            <div className="text-center">
                <h1 className="font-bold text-2xl">{props.heading}</h1>
                <h5>{props.description}</h5>
            </div>
        </div>
    )
}

export function ItemButton(props) {
    return (
        <li className="flex my-2"><Link className="w-1/2 rounded-full text-center py-3 mx-auto bg-yellow-500 border border-yellow-600 font-bold text-primary" href={props.href}>{props.name}</Link></li>
    )
}