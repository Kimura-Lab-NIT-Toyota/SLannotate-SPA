import Layout from  '@/components/views/layout'

export default function App({ Component, pageProps }) {
  //全ページで適用されるレイアウト、もっとうまく書けるはずだけど一旦動いているのでOK
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}