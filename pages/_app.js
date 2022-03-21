import Header from '../components/Header'
import { useRouter } from 'next/router'
import Head from 'next/head'
import '../styles/globals.css'
import Footer from '../components/Footer'
import NextNProgress from 'nextjs-progressbar'
import BackToTop from '../components/BackToTop'

function MyApp({ Component, pageProps }) {
  const router=useRouter()
  return <>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossOrigin="anonymous"></link>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossOrigin="anonymous"></script>
  <Head>
    <link rel="icon" href="/favicon.ico" />
  </Head>
  <NextNProgress/>
  {router.pathname !== "/_error" && <Header />}
  <Component {...pageProps} />
  {router.pathname !== "/_error" && <Footer />}
  <BackToTop/>
  </>
}

export default MyApp
