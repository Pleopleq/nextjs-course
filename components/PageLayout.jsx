import Head from "next/head"

export default function PageLayout({ children, title }) {
    return (
        <>
            <Head>
                <title>{title ? title : 'NewsApp'}</title>
                <meta name="description" content="NewsApp - the best app to read news." />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                {children}
            </main>
        </>
    )
}

//9ba6a305cfab4ae4b8adcad5a10b3ae3