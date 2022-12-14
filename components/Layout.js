import Head from "next/head"
import Header from "./Header"
import Search from "./Search"

const Layout = ({ title, children, keywords, description }) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="keywords" content={keywords} />
        <meta name="description" content={description} />
      </Head>

      <Header />
      <Search />

      <main className="container mx-auto my-7">{children}</main>
    </div>
  )
}

export default Layout

Layout.defaultProps = {
  title: 'Welcome to DevSpace',
  keywords: 'Development, Coding, Programming',
  description: 'The best info and news'
}