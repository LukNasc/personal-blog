import React from 'react';

import { useRouter } from 'next/router'
import Link from 'next/link'
import { GetStaticPaths, GetStaticProps } from 'next'


import Constants from '../../util/Constants'
import { Container, Content, H1 } from './style'


interface Props {
    data: {
        title: string,
        banner: Blob,
        content: string
    }

}

export default function Article({ data }: Props) {

    const { isFallback } = useRouter();

    if (isFallback) {
        return <p>Carregando...</p>
    }

    return (
        <Container>
            <a href="../Home" >Voltar</a>
            <Content>
                <H1>{data.title}</H1>
            </Content>
        </Container>
    )
}

export const getStaticPaths: GetStaticPaths = async () => {
    const response = await fetch(`${Constants.API.base_url}/articles/list`)
    const data = await response.json();
    const paths = data.map(art => ({ params: { _id: art._id } }))
    return {
        paths,
        fallback: true
    }
}

export const getStaticProps: GetStaticProps = async (context) => {
    const { _id } = context.params;
    const response = await fetch(`${Constants.API.base_url}/articles/getArticleById?_id=${_id}`);
    const data = await response.json();
    return {
        props: {
            data
        },
        revalidate: 10
    }
}