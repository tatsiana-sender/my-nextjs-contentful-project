import homeStyles from '../styles/Home.module.css'
import Link from 'next/link'

export default function MainHome() {
    return (
        <section className={homeStyles.hero}>
            <h1 className={homeStyles.hero__title}>Lorem ipsum dolor sit amet</h1>
            <div className={homeStyles.hero__text}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
            </div>
            <Link href="/">
                <a className={homeStyles.btn}>Get Started</a>
            </Link>
        </section>
    )
}