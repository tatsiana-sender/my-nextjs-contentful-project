import Header from './header'
import Footer from './footer'
import Head from 'next/head'
import styles from './layout.module.css'

export default function Layout ({children, home}) {
    return (        
        <div className={styles.layout}>
            <Head>
                <title>Constructex</title>             
            </Head>
            <Header />
            {children}
            <Footer />
        </div>
    )
}