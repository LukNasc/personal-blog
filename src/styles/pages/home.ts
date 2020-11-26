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
    width: 150px;
    height: 150px;
    border-radius: 100%;
    transition: ${Constants.TIME_TRANSITION}s;
`;

export const Bolder = styled.b`
    font-weight: 900;
    font-size: 18px;
`;
