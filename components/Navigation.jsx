import Link from "next/link"
import "../app/globals.css"


const Navigation = () =>{


    return(
        <header className="grid grid-cols-4">
            <div className="">
                ZEORX

            </div>
            <nav>
                <ul className=" flex gap-10">
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/about">About</Link></li>
                    <li><Link href="/clientcomp">ClientComp</Link></li>
                    <li><Link href="/serverComp">ServerComp</Link></li>
                    <li><Link href="/contact">Contact</Link></li>
                    <li><Link href="/service">Service</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Navigation