import type { AppProps } from 'next/app'
import TopBar from '../components/topBar'
import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
 return (
  <div className="">
   <TopBar />
   <Component {...pageProps} />
  </div>
 )
}

export default MyApp
