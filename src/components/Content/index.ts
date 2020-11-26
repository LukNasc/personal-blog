import styled from 'styled-components';

export enum Direction {
    ROW = 'row',
    ROW_REVERSE = 'row-reverse',
    COLUMN = 'column',
    COLUMN_REVERSE = 'column-reverse'
}

interface IProps {
    direction?: Direction
}

const Content = styled.div<IProps>`
    display: flex;
    flex-direction: ${props => props.direction || 'column'};
    width: 90%;
    padding: 10px;
    transition: 0.1s;

    p{
        span{
            font-weight: bold;
            font-size: 18px;
        }
    }

    div.content--image{
        flex:1;
        width: 400px;
        height: 400px;
        border-radius: 10px;
        margin-right: 50px;
        img{
            width: inherit;
            height: inherit;
            border-radius: 10px;
        }
    }

    &:nth-child(n){
        flex:1;
    }
`;


export default Content;
