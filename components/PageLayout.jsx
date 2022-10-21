import Head from "next/head";
import Link from "next/link";
import styles from "../styles/PageLayout.module.css";


export default function PageLayout({ children, title }) {
    return (
        <>
            <Head>
                <title>{title ? title : "NewsApp"}</title>
                <meta
                    name='description'
                    content='NewsApp - the best app to read news.'
                />
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <header className={styles.navbar} >
                <div>
                    <Link href='/'> 📰 NewsApp</Link>
                </div>
                <div>
                    <Link href='/about'>About</Link>
                </div>
            </header>
            <main>{children}</main>
        </>
    );
}
