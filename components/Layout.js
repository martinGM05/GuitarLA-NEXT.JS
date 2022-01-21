import Head from "next/head"
import Header from "./Header"
import Footer from "./Footer"

const Layout = ({children, pagina}) => {
    return (
        <div>
            <Head>
                <title>Guitar LA - {pagina}</title>
                <meta name="description" content="Guitar LA es una tienda de guitarra online" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@500&display=swap" rel="stylesheet" />
            </Head>

            <Header />

            {children}

            <Footer />
        </div>
    )
}

export default Layout
