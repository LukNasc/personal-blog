import styled from 'styled-components';

interface IPropsItem {
    background: string;
}

export const BoxArticles = styled.div`
    background: rgba(0,0,0,0.7);
    width: inherit;
    height: auto;
    position: absolute;
    transition: all ease 0.2s;
    border-radius: 10px 10px 0 0;
    color: #fff;
    h1{
        margin: 10px;
        font-size: 18px;
    }
    p{
        font-size: 14px;
        margin: 10px;
        margin-top:0;
    }

`;

export const ItemArticles = styled.div<IPropsItem>`
    display: inline-block;
    width: 324px;
    height: 300px;
    background-image: url(${props => props.background});
    background-repeat: no-repeat;
    background-size: cover;
    transform: scale(0.9);
    transition: all ease 0.2s;
    cursor: pointer;
    position: relative;
    border-radius: 10px;
    box-shadow: 4px 4px 10px #AAA;

    &:hover{
        transform: scale(1);
    }
`;