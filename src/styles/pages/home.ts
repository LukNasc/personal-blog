import React from 'react';
import styled from 'styled-components';

//Util
import Constants from '../../util/Constants';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content:center;
    align-items:center;
    width: 100%;

`;
export const Title = styled.h1`
    font-size: 48px;
    font-weight:bold;
    transition: ${Constants.TIME_TRANSITION}s;
    background: #fff;
    padding: 10px;
    border-radius: 5px;

`;

export const Subtitle = styled.p`
    font-size: 20px;
    margin-top: -20px;
    font-weight: 200;
    background: #fff;
    padding: 5px;
    border-radius: 5px;

`


export const Profile = styled.img`
    width: 150px;
    height: 150px;
    border-radius: 100%;
    transition: ${Constants.TIME_TRANSITION}s;
`;

export const Bolder = styled.b`
    font-weight: 900;
    font-size: 18px;
`;
