import React from 'react';
import styled from 'styled-components';

//Banner Background
import backgroundBanner from '../../assets/background-banner.jpeg';

//Util
import Constants from '../../util/Constants';

interface PropsBoxTitle {
    background: string,
}

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content:center;
    align-items:center;
    width: 100%;

`;

export const Banner = styled.div`
    display: flex;
    position: relative;
    justify-content:center;
    align-items:center;
    width: 100%;
    height: 450px;
    position: relative;
    background: #000;
    transition: ${Constants.TIME_TRANSITION}s;
`;

export const Background = styled.div`
    width:100%;
    height:100%;
    background: url(${backgroundBanner});
    background-size: 100% 120%;
    filter: blur(3px);

    div {
        background: rgba(0,0,0,0.5);
        width: 100%;
        height: 100%;
    }
`

export const BoxTitle = styled.div`
    text-align: center;
    color: #fff;
    padding: 3px;
    margin-left: 100px;
    transition: ${Constants.TIME_TRANSITION}s;
`;

export const Title = styled.h1`
    font-size: 48px;
    font-weight:bold;
    transition: ${Constants.TIME_TRANSITION}s;
`;

export const Subtitle = styled.p`
    font-size: 20px;
    margin-top: -20px;
    font-weight: 200;
`

export const Content = styled.div`
    width: 70%;
    padding: 10px;
    transition: 0.1s;

`;

export const ContentTitle = styled.div`
    display:flex;
    flex-direction: row; 
    align-items:center;
    padding-top: 10px;
    position: absolute;
    bottom: 0;
    top: 0;
    left: 10%;

`;

export const Profile = styled.img`
    width: 280px;
    height: 280px;
    border-radius: 100%;
    transition: ${Constants.TIME_TRANSITION}s;
`;

export const Bolder = styled.b`
    font-weight: 900;
    font-size: 18px;
`;

export default Container;