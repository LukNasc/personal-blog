import React from 'react';
import { Container, Content, Item, Icon } from './styles';

import logo from '../../assets/menu-icon.svg'

function Menu() {
    return (
        <Container>
            <Content>
                <Item><Icon src={logo}/> Primeiro Item</Item>
                <Item><Icon src={logo}/> Segundo Item</Item>
                <Item><Icon src={logo}/> Terceiro Item</Item>
                <Item><Icon src={logo}/> Quarto Item</Item>
            </Content>
        </Container>
    )
}

export default Menu;