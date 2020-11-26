import styled from 'styled-components';

import Colors from '../../util/Colors';
import Constants from '../../util/Constants';

interface ButtonProps {
  variant: string
}

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content:space-evenly;
  width: 400px;
  position: absolute;
  align-items:center;
  background: transparent;
  color: #fff;
  top:0;
  bottom:90%;
  right: 0;
  padding: 10px;
  z-index: 10;
  transition: ${Constants.TIME_TRANSITION}s;

`;

export const Button = styled.button`
  width: 85px;
  height: 24px;
  background: ${(props: ButtonProps) => (Colors.ThemeButton.find(item => props.variant.toUpperCase() === item.variant).color) };
  outline: none;
  border: 1px solid #858585;
  border-radius: 10px;
  cursor:pointer;
  color: #fff;
`;

export const Title = styled.h1`
  flex: 1;
  font-size: 20px;
  font-weight: bolder;
  text-align: center;
`;
