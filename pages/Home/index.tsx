import React, { useEffect } from 'react';
//Components
import SocialButtons from '../../components/SocialButtons'

import Api from '../../server';
import 'isomorphic-fetch';

//Styled-components
import {
    Background,
    Banner,
    BoxTitle,
    Container,
    Content,
    ContentTitle,
    Profile,
    Subtitle,
    Title,
    Bolder
} from './styles'

//Imagem de perfil
import profile from '../../assets/profile.png'
import Link from 'next/link';

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

    function addEventListenerScroll() {
        window.addEventListener('scroll', () => {
            //Pegando referencia dos elementos
            const element = document.querySelector(".banner");
            const profile = document.querySelector(".profile");
            const socialButtons = document.querySelector(".social-buttons");
            const subtitle = document.querySelector(".subtitle");
            const title = document.querySelector(".title");
            const content = document.querySelector(".content");

            //Lógica para diminuir e aumentar banner, junto com os elementos filhos
            if (window.pageYOffset) {
                //Caso o usuário role a página para baixo
                element.setAttribute("style", `display:flex;height:90px;position:fixed;top:0;justify-content:center;align-itens:center`)
                profile.setAttribute("style", "height: 80px; width: 80px;");
                socialButtons.setAttribute("style", "bottom: 0");
                subtitle.setAttribute("style", "visibility: hidden;");
                title.setAttribute("style", "font-size: 40px;");
                content.setAttribute("style", "padding-top: 150px");
            } else {
                //Caso o usuário esteja no topo da página
                element.removeAttribute("style");
                profile.removeAttribute("style");
                socialButtons.removeAttribute("style");
                subtitle.removeAttribute("style");
                title.removeAttribute("style");
                content.removeAttribute("style");
            }
        });
    }

    return (
        <Container>
            <Banner className="banner">
                <Background>
                    <div />
                </Background>
                <SocialButtons className="social-buttons"></SocialButtons>
                <ContentTitle>
                    <Profile src={profile} className="profile" />
                    <BoxTitle>
                        <Title className="title">Lucas Nascimento</Title>
                        <Subtitle className="subtitle">Desenvolvedor Mobile / FullStack</Subtitle>
                    </BoxTitle>
                </ContentTitle>
            </Banner>
            <Content className="content">
                <h2 id="sobre"># Sobre</h2>
                <p>
                    Olá tudo bem ? acho que ja deve ter visto logo de inicio mas me chamo Lucas Nascimento,
                    tenho 19 anos e sou estudante de <Bolder>Sistemas de Informação</Bolder> no Centro Universitário Estácio em Fortaleza/CE.
                    Apesar de estudar, trabalhar e fazer quase tudo em Fortaleza, não é exatamente essa a cidade em que eu moro,
                    eu moro na região metropolitana de Fortaleza em uma cidade chamada Caucaia.
                    Pois bem, sou <Bolder>desenvolvedor Mobile e Web</Bolder>, desenvolvo aplicativos nativos para <Bolder>Android </Bolder>
                    e também desenvolvo apps com <Bolder>React Native</Bolder>,
                    que é uma tecnologia bem parecida com a que eu uso no desenvolvimento web front-end o <Bolder>ReactJS</Bolder>.
                    Também desenvolvo com <Bolder>NojeJS</Bolder> para construir aplicações no back-end, ou seja no lado do servidor.
                    Enfim, caso queira entrar em contato, minhas redes sociais estão ai em cima e caso queira algo mais formal,
                    pode enviar um e-mail no seguinte endereço: <br />
                    <Bolder>E-mail: joblucasnascimento@gmail.com</Bolder>
                </p>
                <h2 id="artigos"># Artigos</h2>
                {
                    posts ? (
                        posts.map(item => <Link key={item._id} href={`/Articles/${item._id}`}><h3># {item.title}</h3></Link>)
                    ) : (
                            <Subtitle>Sem artigos no momento  :(</Subtitle>
                        )

                }
                <h2 id="projetos"># Projetos</h2>
                <Subtitle>Sem projetos no momento :(</Subtitle>
            </Content>
        </Container>
    )
}
