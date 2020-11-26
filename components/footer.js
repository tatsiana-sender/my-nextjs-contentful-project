import Link from 'next/link'

export default function Footer() {
    return (
        <footer>
            <div>
                2020 © Constructex. All Rights Reserved | 
                <Link href="/">
                    <a> Edmonton Web Design &amp; Development </a> 
                </Link> 
                by SOS Media Corp	                                 	
            </div>
            <div>
                <Link href="/">
                    <a>Privacy Policy </a>
                </Link>
                |
                <Link href="/">
                    <a> Terms &amp; Conditions</a>
                </Link>
            </div> 
        </footer>
    )
}