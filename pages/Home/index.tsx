import React, { useEffect } from 'react';
//Components
import SocialButtons from '../../src/components/SocialButtons'

import Api from '../../src/server';

//Styled-components
import {
    BoxTitle,
    Container,
    ContentTitle,
    Profile,
    Subtitle,
    Title,
    Bolder
} from '../../src/styles/pages/home'

import Link from 'next/link';
import { Parallax } from '../../src/components/Parallax';
import Content, { Direction } from '../../src/components/Content'
import List from '../../src/components/List';
import ListModel from '../../models/list';
interface Articles {
    _id: string,
    user: string,
    title: string,
    content: string,
    date: string
}
interface Props {
    posts: Array<Articles>
}

export default function Home({ posts }: Props) {

    useEffect(() => {
        // addEventListenerScroll()
    });

    const art: Array<ListModel> = [{
        title:"teste",
        description: "Description teste",
    }]

    return (
        <Container>
            <Parallax background="/static/assets/background.png">
                <Profile src="/static/assets/profile.jpeg" />
                <Title>Lucas Nascimento</Title>
                <Subtitle>Mobile / Web Developer</Subtitle>
            </Parallax>
            <Content direction={Direction.ROW}>
                <div className="content--image">
                    <img src="https://pplware.sapo.pt/wp-content/uploads/2017/03/sftp_00.jpg" alt="" />
                </div>
                <p>
                    Olá tudo bem ? acho que ja deve ter visto logo de inicio mas me chamo Lucas Nascimento,
                    tenho 19 anos e sou estudante de <span>Sistemas de Informação</span> no Centro Universitário Estácio em Fortaleza/CE.
                    Apesar de estudar, trabalhar e fazer quase tudo em Fortaleza, não é exatamente essa a cidade em que eu moro,
                    eu moro na região metropolitana de Fortaleza em uma cidade chamada Caucaia.
                    Pois bem, sou <span>desenvolvedor Mobile e Web</span>, desenvolvo aplicativos nativos para <span>Android </span>
                    e também desenvolvo apps com <span>React Native</span>,
                    que é uma tecnologia bem parecida com a que eu uso no desenvolvimento web front-end o <span>ReactJS</span>.
                    Também desenvolvo com <span>NojeJS</span> para construir aplicações no back-end, ou seja no lado do servidor.
                    Enfim, caso queira entrar em contato, minhas redes sociais estão ai em cima e caso queira algo mais formal,
                    pode enviar um e-mail no seguinte endereço: <br />
                    <span>E-mail: joblucasnascimento@gmail.com</span>
                </p>
                {/* <h2 id="artigos"># Artigos</h2>
                {
                    posts ? (
                        posts.map(item => <Link key={item._id} href={`/Articles/${item._id}`}><h3># {item.title}</h3></Link>)
                    ) : (
                            <Subtitle>Sem artigos no momento  :(</Subtitle>
                        )

                }
                <h2 id="projetos"># Projetos</h2>
                <Subtitle>Sem projetos no momento :(</Subtitle> */}
            </Content>
            <Parallax background="https://png.pngtree.com/thumb_back/fh260/back_our/20190619/ourmid/pngtree-tech-background-image-of-desktop-notebook-and-computer-image_133044.jpg">
                <Title>Artigos / Posts</Title>
            </Parallax>
            <Content>
                <List articles={art} />
            </Content>
        </Container>
    )
}
