import Link from "next/link";

export default function Navigation (){
    return(
         <ul className="flex gap-4 p-2 justify-center items-center">
            <li>
                <Link href="/">Home</Link>
            </li>
            <li>
                <Link href="/services">Services</Link>
            </li>
            <li>
                <Link href="/projects">Projects</Link>
            </li>
            <li>
                <Link href="/contact">Contact</Link>
            </li>
        </ul>
    )
}