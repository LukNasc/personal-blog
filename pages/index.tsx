import Head from 'next/head'


//Paginas
import Home from './Home'

//Styles
import { GlobalStyle } from './styles'

function Main() {
  return (
    <div className="container">
      <Head>
        <title>Lucas Nascimento</title>
        <link href="https://fonts.googleapis.com/css2?family=Inconsolata:wght@200;300;900&display=swap" rel="stylesheet"></link>
      </Head>
      <GlobalStyle />
      <Home />
    </div>
  )
}


export default Main;
