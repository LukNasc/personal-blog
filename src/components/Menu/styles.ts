import styled from 'styled-components';

export const Container = styled.div`
    display:flex;
    justify-content: center;
    align-items:center;
    position: fixed;
    height: 100vh;
    width:100%;
    z-index: 10;
    background: rgba(0,0,0,0.6);
    color: #fff;
`;

export const Content = styled.ul`
    display:flex;
    flex-direction: column;
    justify-content:center;
    align-items:center;
    width: 500px;
    height: 200px;
    list-style:none;
    padding: 0;
    text-align:center;
`;    
export const Item = styled.li`
    display:flex;
    flex-direction: row;
    align-items:center;
    justify-content:center;
    padding: 10px;
    margin: 5px;
    font-size: 20px;
    cursor:pointer;
    width: 100%;
    border: 1px solid #fff;
    position: relative;
`;

export const Icon = styled.img`
    margin-right: 10px;
    width: 30px;
    width: 30px;
    position: absolute;
    left: 10px;
    top: 14px;
    bottom: 0%;
`;