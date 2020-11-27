import React, { useEffect } from 'react';
//Components
import SocialButtons from '../../src/components/SocialButtons'

//Styled-components
import {
    Container,
    Profile,
    Subtitle,
    Title,
} from '../../src/styles/pages/home'

import { Parallax } from '../../src/components/Parallax';
import Content, { Direction } from '../../src/components/Content'
import { BoxArticles, ItemArticles } from '../../src/components/ItemArticles';
import { BoxProjects, ItemProject } from '../../src/components/ItemProjects';
interface Articles {
    _id?: string,
    user?: string,
    title: string,
    content?: string,
    date?: string,
    description: string,
    image: string,
}
interface Props {
    posts: Array<Articles>
}

export default function Home({ posts }: Props) {

    const posts_teste: Array<Articles> = [
        {
            title: "Desenvolvimento híbrido ou nativo?...",
            description: "Olá pessoas, esse é meu primeiro artigo e eu queria conversar um pouco e expor minha opinião sobre aplicativos híbridos (de código único) ou nativo.",
            image: "https://miro.medium.com/max/480/1*NN9IFj8v5objxGBY72xcIg.gif"
        },
        {
            title: "Temas dinâmicos com React...",
            description: "Olá senhores, voltei aqui mais uma vez, dessa vez pra falar com vocês um pouco sobre os temas no React.",
            image: "https://miro.medium.com/max/349/1*ITQVgSSUuNEF2Fl9xMBp8A.gif"
        }
    ]

    const projects = [{
        title: "Whatsapp Clone",
        description: "Um clone do aplicativo de mensagens mais famoso do mundo, desenvolvido com Java na IDE do Android Studio, com integração ao Realtime Database da ferramenta Firebase do Google",
        image: "https://arc-anglerfish-eu-central-1-prod-prisa.s3.amazonaws.com/public/VASJ5OBPXGE2JGCB5S2VMQGWYM.jpg"
    }, {
        title: "Nubank Clone",
        description: "Um clone da interface de um dos bancos mais populares do momento, desenvolvido com React Native + Styled Components e outras libs",
        image: "https://contxto.com/wp-content/uploads/2019/09/Nubank_pre-paid_recharges-1200x1005.jpg"
    }, {
        title: "Uber Clone",
        description: "Um clone da interface do aplicativo de mobilidade urbana, o famoso Uber, Desenvolvido com React Native + Styled Components em integração com a API do Google Maps",
        image: "https://oestadoonline.com.br/wp-content/uploads/2020/02/motorista-uber.jpg"
    }, {
        title: "Organizze Clone",
        description: "Um clone de um ótimo aplicativo de organização financeira, foi desenvolvido com Java na IDE do Android Studio com integração ao Realtime Database da ferramenta Firebase do Google",
        image: "https://barkus.com.br/site/wp-content/uploads/2018/06/image2-1-1024x768.jpg"
    }]

    useEffect(() => {
        // addEventListenerScroll()
    });

    return (
        <Container>
            <Parallax background="/static/assets/background_main.jpg">
                <SocialButtons />
                <Profile src="/static/assets/profile.jpeg" />
                <Title>Lucas Nascimento</Title>
                <Subtitle>Mobile / Web Developer</Subtitle>
                <cite>
                    <span>Photo by <a href="https://unsplash.com/@cammarb?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Camila Martinez</a> on <a href="https://unsplash.com/s/photos/developer?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span>
                </cite>
            </Parallax>
            <Content direction={Direction.ROW}>
                <div className="content--image">
                    <img src="/static/assets/hello.gif" alt="" />
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
            </Content>
            <Parallax background="/static/assets/background-projects.jpg">
                <Title>Artigos / Posts</Title>
                <cite>
                    <span>Photo by <a href="https://unsplash.com/@arianismmm?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Arian Darvishi</a> on <a href="https://unsplash.com/s/photos/developer?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span>
                </cite>
            </Parallax>
            <Content direction={Direction.ROW}>
                <div >

                    {
                        posts_teste ? (
                            posts_teste.map(item => (
                                <ItemArticles background={item.image}>
                                    <BoxArticles>
                                        <h1>{item.title}</h1>
                                        <p>
                                            {item.description}
                                        </p>
                                    </BoxArticles>
                                </ItemArticles>
                            ))
                        ) : (
                                <Subtitle>Sem artigos no momento  :(</Subtitle>
                            )
                    }
                </div>
            </Content>
            <Parallax background="/static/assets/background-pj.jpg">
                <Title>Projetos</Title>
                <cite>
                    <span>Photo by <a href="https://unsplash.com/@jefflssantos?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Jefferson Santos</a> on <a href="https://unsplash.com/s/photos/developer?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span>
                </cite>
            </Parallax>
            <Content >
                <div>
                    {
                        projects.map((item, index) => {
                            if (index <= 3) {
                                return (
                                    <ItemProject background={item.image}>
                                        <BoxProjects>
                                            <h1>{item.title}</h1>
                                            <p>
                                                {item.description}
                                            </p>
                                        </BoxProjects>
                                    </ItemProject>
                                )
                            }

                        })
                    }
                </div>
            </Content>
        </Container>
    )
}
