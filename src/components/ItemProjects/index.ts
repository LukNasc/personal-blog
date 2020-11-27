import styled from 'styled-components';

interface IPropsItem {
    background: string
}

export const ItemProject = styled.div<IPropsItem>`
    display: inline-block;
    width: 324px;
    height: 500px;
    background-image: url(${props => props.background});
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 10px;
    cursor: pointer;
    transition: all ease 0.2s;
    transform: scale(0.9);
    &:hover{
        transform: scale(1);
    }
`;

export const BoxProjects = styled.div`
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
