import Header from "@/component/Header";
import { SectionHeading } from "@/component/Utils";
import Image from "next/image";
import Link from "next/link";
import { ServiceBox, ItemButton } from "@/component/Utils";
import { IoStar, IoCaretBack, IoCaretForward } from "react-icons/io5";
import Footer from "@/component/Footer";
export default function Home() {
  return (
    <>
      <Header position="absolute" />
      <main>
        <section className="h-screen flex items-center">
          <div className="grid grid-cols-2 px-16">
            <div className="flex flex-col justify-center gap">
              <div className="bg-orange-200 w-fit rounded-full p-3">
                <h2 className="text-primary">More than Faster</h2>
              </div>
              <h1 className="text-6xl my-3 font-bold text-primary">
                be The Fastest <br />
                In Delivering <br />
                Your Food
              </h1>
              <p className="w-2/3">Our Job is to filling your tummy with with delicious food and with fast free delivery  </p>
              <div className="mt-3 flex gap-2">
                <Link className="px-5 hover:scale-95 transition duration-200 py-3 rounded-full bg-yellow-500 border border-yellow-700 text-primary font-bold shadow-lg" href={''}>Get Started</Link>
                <Link className="px-5 hover:scale-95 transition duration-200 py-3 rounded-full bg-slate-200 border border-slate-400 shadow-lg text-primary font-bold" href={''}>Watch Video</Link>
              </div>
              <div className="flex mt-4 items-center gap-8">
                <div className="flex w-20 relative">
                  <Image className="border shadow rounded-full bg-white" src={'/images/hero.png'} height={50} width={50} alt="image"/>
                  <Image className="border shadow rounded-full bg-white absolute left-6 top-0 z-10" src={'/images/hero.png'} height={50} width={50} alt="image"/>
                  <Image className="border shadow rounded-full bg-white absolute left-12 top-0 z-20" src={'/images/hero.png'} height={50} width={50} alt="image"/>
                </div>
                <div className="font-bold">
                  <h2 className="">Happy Customers</h2>
                  <span className="flex items-center">
                    <IoStar className="text-yellow-600" />
                    4.6 <span className="font-light">(10.8k Review)</span>
                  </span>
                </div>
              </div>

            </div>
            <div className="">
              <Image className="m-auto" width={600} height={600} src={'/images/hero.png'} alt="image" />
            </div>
          </div>
        </section>



        {/* Services  */}

        <section className="pb-8">
          <SectionHeading pretitle="WHAT WE SERVE" title="Your Favorite Food Delivery Partner" />
          <div className="flex justify-center mx-auto gap-5 my-5">
            <ServiceBox image="/images/cooking.png" heading="Easy To Order" description="Our Job is to filling your tummy with with delicious food and with fast free delivery" />
            <ServiceBox image="/images/cart.png" heading="Fastest Delivery" description="Our Job is to filling your tummy with with delicious food and with fast free delivery" />
            <ServiceBox image="/images/shef.png" heading="Best Quality" description="Our Job is to filling your tummy with with delicious food and with fast free delivery" />
          </div>
        </section>


        <section>
          <div className="px-16 my-5 flex justify-between items-center">
            <div className="">
              <h4 className="font-semibold text-primary">OUR MENU</h4>
              <h1 className="text-4xl font-bold">Menu That Always <br /> Makes You Fall In Love</h1>
            </div>
            <div className="flex gap-4">
              <button className="bg-yellow-500 p-2 rounded-full border text-3xl text-primary"><IoCaretBack /></button>
              <button className="bg-yellow-500 p-2 rounded-full border text-3xl text-primary"><IoCaretForward /></button>
            </div>
          </div>
          <div className="flex gap-5 mx-16">
            <div className="w-1/4 border p-5 bg-white rounded-lg shadow-lg">
              <ul className="flex flex-col">
                <ItemButton name="Burger" href="#burger" />
                <ItemButton name="Pizza" href="#pizza" />
                <ItemButton name="Pasta" href="#pasta" />
                <ItemButton name="Salad" href="#salad" />
                <ItemButton name="Dessert" href="#dessert" />
              </ul>
            </div>
            <div className="flex-1 border p-5 bg-white rounded-lg shadow-lg">

            </div>
          </div>
        </section>


        <section className="my-24">
          <div className="grid grid-cols-2 px-16 py-5 bg-gray-50">
            <div className="p-5">
              <Image className="m-auto" src={'/images/chef.jpg'} width={450} height={450} alt="Chef Image" />
            </div>
            <div className="p-5 flex items-center">
              <div className="">
                <h3 className="text-primary font-bold">WHAT THEY SAY</h3>
                <h1 className="font-bold text-4xl my-3">What Customers Says About Us</h1>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas odio enim, recusandae, ipsa molestias ducimus reprehenderit sequi pariatur voluptate mollitia quaerat optio velit magni perferendis consequuntur harum excepturi voluptates atque veritatis, rem earum a sapiente!</p>
                <div className="my-5">
                  <div className="flex gap-3">
                    <Image className="rounded-full border" src={'/images/hero.png'} height={50} width={50} alt="image" />
                    <span>
                      <h1 className="font-bold">Sujal Vishwkarma</h1>
                      <p className="text-xs">Food Enthusiast</p>
                    </span>
                  </div>
                  <p className="flex items-center gap-2 font-bold">
                    <span className="flex text-yellow-500"><IoStar /><IoStar /><IoStar /><IoStar /><IoStar /></span> 5.0</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="bg-amber-100 p-5 rounded-2xl mx-16 grid grid-cols-2">
            <div className="p-5">
              <h3 className="text-primary font-bold">DOWNLOAD APP</h3>
              <div className="flex gap-8">
                <div className="flex-1">
                  <h1 className="font-bold my-2 text-5xl">Get Started With Fastest Today!</h1>
                  <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae possimus a nisi deserunt tempore commodi maxime quisquam debitis quae earum! Distinctio tempore iure voluptate vel molestiae perferendis ab animi quam!</p>
                </div>
                <div className="bg-yellow-500 rounded-xl flex flex-col items-center justify-center w-32 h-40">
                  <Image className="border rounded-full" src={'/images/success.png'} height={100} width={100} alt="image" />
                  <h1 className="font-bold my-2 text-sm">Order Confirmed</h1>
                </div>
              </div>
              <Link href={''} className="p-3 rounded-full border border-yellow-500 flex w-fit bg-yellow-400 text-primary">Get The App</Link>
              <div className="ml-[50%]">
                <div className="bg-white w-fit p-2 rounded-3xl items-center gap-2 flex border-slate-400">
                  <Image src={'/images/hero.png'} height={50} width={50} alt="image"/>
                  <div>
                    <h4>Sujal Vishwkarma</h4>
                    <h6>Designation</h6>
                  </div>
                  <span className="w-10 rounded-full h-10 bg-yellow-600"></span>
                </div>
              </div>
            </div>
            <div className="bg-white"></div>
          </div>
        </section>
      </main>
      <Footer/>
    </>
  );
}
