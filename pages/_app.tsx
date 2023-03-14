import Layout from '@/components/Layout/layout'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Roboto, Roboto_Condensed } from 'next/font/google'
import { Provider } from 'react-redux'
import reduxStore from '../redux/store'

const roboto = Roboto({
  subsets: ["latin"],
  variable: '--font-roboto',
  weight: ['100', '300', '400', '500', '700', '900']
})
const roboto_Condensed = Roboto_Condensed({
  subsets: ["latin"],
  variable: '--font-roboto_Condensed',
  weight: ['300', '400', '700']
})


export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${roboto.variable} ${roboto_Condensed.variable}`}>
      <Provider store={reduxStore}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      </Provider>
    </main>
  )
}
