import React, { useEffect, useState } from 'react';

//Components
import SocialButtons from '../../components/SocialButtons'

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
    Title
} from './styles'

//Imagem de perfil
import profile from '../../assets/profile.png'

function Home() {
    const [title, setTitle] = useState("Lucas Nascimento");

    /***
     * Método para verificar se tal elemento está visível na página
     *  */
    function isVisibleInViewport(element: Element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        )
    }

    useEffect(() => {
        window.addEventListener('scroll', () => {

            //Pegando referencia dos elementos
            const element = document.querySelector(".banner");
            const profile = document.querySelector(".profile");
            const socialButtons = document.querySelector(".social-buttons");
            const subtitle = document.querySelector(".subtitle");
            const title = document.querySelector(".title");
            const content = document.querySelector(".content");

            //Lógica para diminuir e aumentar banner, junto com os elementos filhos
            if(window.pageYOffset){
                //Caso o usuário role a página para baixo
                element.setAttribute("style", `display:flex;height:90px;position:fixed;top:0;justify-content:center;align-itens:center`)
                profile.setAttribute("style", "height: 80px; width: 80px;");
                socialButtons.setAttribute("style", "bottom: 0");
                subtitle.setAttribute("style","visibility: hidden;");
                title.setAttribute("style","font-size: 40px;");
                content.setAttribute("style", "padding-top: 150px");
            }else {
                //Caso o usuário esteja no topo da página
                element.removeAttribute("style");
                profile.removeAttribute("style");
                socialButtons.removeAttribute("style");
                subtitle.removeAttribute("style");
                title.removeAttribute("style");
                content.removeAttribute("style");


            }
        });

    }, []);

    return (
        <Container>
            <Banner className="banner">
                <Background>
                    <div />
                </Background>
                <SocialButtons className="social-buttons"></SocialButtons>
                <ContentTitle>
                    <Profile src={profile} className="profile"/>
                    <BoxTitle>
                        <Title className="title">{title}</Title>
                        <Subtitle className="subtitle">Desenvolvedor Mobile / FullStack</Subtitle>
                    </BoxTitle>
                </ContentTitle>
            </Banner>
            <Content className="content">
                <h2 id="sobre"># Sobre</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse a viverra ligula. Duis pretium pulvinar enim, vel pellentesque odio. Pellentesque ac ornare enim. Morbi a dolor laoreet, porttitor leo sit amet, aliquam lectus. Donec et commodo libero. Nam euismod non nunc quis rutrum. Vivamus sed malesuada velit, et consequat nisl. Donec et odio non lorem fringilla varius. Quisque venenatis sem et tincidunt ornare. Ut tempor commodo porttitor. Aenean at auctor metus. Duis blandit mauris dolor, a tempor mi pharetra id. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed sed lectus sit amet nibh posuere molestie.
                    Sed ullamcorper nulla sit amet vestibulum sodales. Suspendisse id leo non nisl pretium dapibus. Donec sagittis dictum turpis vitae rutrum. Mauris pulvinar turpis orci, sit amet blandit arcu commodo id. Mauris nec libero in sapien tincidunt ornare. Cras vitae scelerisque ex. Maecenas elementum, sapien sed rhoncus dictum, nibh magna fringilla ligula, ut aliquet ipsum tellus a massa. Curabitur vel vehicula nisi, quis eleifend quam. Phasellus ullamcorper, orci id congue fermentum, arcu velit mollis ligula, ut imperdiet sem velit ac nulla. Nullam at cursus neque.
                </p>
                <h2 id="artigos"># Artigos</h2>
                <ul>
                    <li>
                        <a href="#">Titulo</a>
                        <p>
                            Descrição do artigo
                        </p>
                    </li>
                    <li>
                        <a href="#">Titulo</a>
                        <p>
                            Descrição do artigo
                        </p>
                    </li>
                    <li>
                        <a href="#">Titulo</a>
                        <p>
                            Descrição do artigo
                        </p>
                    </li>
                    <li>
                        <a href="#">Titulo</a>
                        <p>
                            Descrição do artigo
                        </p>
                    </li>
                    <li>
                        <a href="#">Titulo</a>
                        <p>
                            Descrição do artigo
                        </p>
                    </li>
                </ul>
                <h2 id="projetos"># Projetos</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse a viverra ligula. Duis pretium pulvinar enim, vel pellentesque odio. Pellentesque ac ornare enim. Morbi a dolor laoreet, porttitor leo sit amet, aliquam lectus. Donec et commodo libero. Nam euismod non nunc quis rutrum. Vivamus sed malesuada velit, et consequat nisl. Donec et odio non lorem fringilla varius. Quisque venenatis sem et tincidunt ornare. Ut tempor commodo porttitor. Aenean at auctor metus. Duis blandit mauris dolor, a tempor mi pharetra id. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed sed lectus sit amet nibh posuere molestie.
                    Sed ullamcorper nulla sit amet vestibulum sodales. Suspendisse id leo non nisl pretium dapibus. Donec sagittis dictum turpis vitae rutrum. Mauris pulvinar turpis orci, sit amet blandit arcu commodo id. Mauris nec libero in sapien tincidunt ornare. Cras vitae scelerisque ex. Maecenas elementum, sapien sed rhoncus dictum, nibh magna fringilla ligula, ut aliquet ipsum tellus a massa. Curabitur vel vehicula nisi, quis eleifend quam. Phasellus ullamcorper, orci id congue fermentum, arcu velit mollis ligula, ut imperdiet sem velit ac nulla. Nullam at cursus neque.
                </p>
            </Content>
        </Container>
    )
}

export default Home;