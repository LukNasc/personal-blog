import React from 'react';

import ListModel from '../../../models/list'

import { Container } from './styles'

interface Props {
    articles: Array<ListModel>
}

const List = ({ articles }: Props) => {
    return (
        <Container>
            {
                articles.length === 0 ? (<p>Nenhum artigo no momento :(</p>) :
                    (
                        articles.map(item => (
                            <h1>
                                {item.title}
                            </h1>
                        ))
                    )
            }
        </Container>
    )
}

export default List;