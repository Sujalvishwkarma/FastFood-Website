import Image from "next/image"
import Link from "next/link"
import { IoLogoFacebook, IoLogoInstagram, IoLogoTwitter } from "react-icons/io5"
import { AboutLinks, CompanyLinks, SupportLink, FooterLink } from "@/data/Menu"
export default function Footer(props) {
    return (
        <>
            <footer>
                <div className="px-16 pt-5 mt-10 flex border-t border-slate-800">
                    <div className=" p-5 w-1/4">
                        <div className="flex items-center">
                            <Image src={'/images/burger-icon.jpg'} height={50} width={50} />
                            <h1 className="font-bold text-primary text-xl">Fast Food</h1>
                        </div>
                        <p className="text-sm">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil exercitationem, commodi pariatur dicta ut non vero tenetur. Obcaecati, vitae aperiam!</p>
                        <div className="flex gap-3 my-3">
                            <Link className="text-white bg-yellow-600 rounded-full p-2 text-xl" href=""><IoLogoFacebook /></Link>
                            <Link className="text-white bg-yellow-600 rounded-full p-2 text-xl" href=""><IoLogoInstagram /></Link>
                            <Link className="text-white bg-yellow-600 rounded-full p-2 text-xl" href=""><IoLogoTwitter /></Link>
                        </div>
                    </div>
                    <div className=" grid grid-cols-3 p-5 flex-1">
                        <div className="">
                            <h4 className="font-bold underline text-xl">About</h4>
                            <ul>
                                {AboutLinks.map((item, index) => (
                                    <FooterLink name={item.name} href={item.href} />
                                ))}
                            </ul>
                        </div>
                        <div className="">
                            <h4 className="font-bold underline text-xl">Company</h4>
                            <ul>
                                {CompanyLinks.map((item, index) => (
                                    <FooterLink name={item.name} href={item.href} />
                                ))}
                            </ul>
                        </div>
                        <div className="">
                            <h4 className="font-bold underline text-xl">Support</h4>
                            <ul>
                                {SupportLink.map((item, index) => (
                                    <FooterLink name={item.name} href={item.href} />
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className=" w-1/4 p-5">
                        <h3 className="text-xl font-bold underline">Get into Touch</h3>
                        <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio dolore facere autem laborum itaque eligendi rem et. Nihil, quod sint!</p>
                        <form className="flex gap-1 my-3">
                            <input type="email" placeholder="email address" className="p-3 bg-slate-100 border rounded-3xl w-full border-slate-600 text-slate-800" />
                            <button className="p-2 text-sm bg-slate-700 rounded-full text-white">Subscribe</button>
                        </form>
                    </div>
                </div>
                <div className="text-center mb-5">
                    <h5>Developed By <Link className="font-bold" href={'https://sujal-vishwkarma.web.app/'}>Sujal Vishwkarma</Link> | Inspired By <Link className="underline" href={'https://www.instagram.com/ui_matias/'}>UI Matias</Link> - Sep-2024</h5>
                </div>
            </footer>
        </>
    )
}