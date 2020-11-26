import Link from "next/link";

export default function Header () {
    return (  
        <header>
            <div className="logo">
                <Link href="/">
                    <a>
                        <img src="/images/logo.png" alt="Logotype of Constructex Company" />
                    </a>
                </Link>
            </div>

            <nav className="menu">
                <ul>
                    <li>
                        <Link href="/">
                            <a>Home</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/">
                            <a>About</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/">
                            <a>Services</a>
                        </Link>
                    </li>
                </ul>
            </nav>   
        </header> 
    )
}