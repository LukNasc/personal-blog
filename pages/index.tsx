import { GetStaticProps } from 'next'
import Head from 'next/head'

import Constants from '../src/util/Constants'

//Paginas
import Home from './Home'

//Styles
import { GlobalStyle } from '../src/styles/globals'

export default function Main({ posts }) {
  return (
    <div className="container">
      <Head>
        <title>Lucas Nascimento</title>
        <link href="https://fonts.googleapis.com/css2?family=Inconsolata:wght@200;300;900&display=swap" rel="stylesheet"></link>
      </Head>
      <GlobalStyle />
      <Home posts={posts} />
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await fetch(`${Constants.API.base_url}/articles/list`);
  return {
    props: {
      posts: await response.json()
    },
    revalidate: 10
  }
}
