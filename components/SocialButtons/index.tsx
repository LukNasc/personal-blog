import React from 'react';
import { Container, Button, Title } from './styles';

function TopBar(props) {
    return (
        <Container {...props}>
            <a target="_blank" href="http://www.facebook.com/cookies164"><Button variant="facebook"> Facebook </Button></a>
            <a target="_blank" href="https://www.linkedin.com/in/lucasnascimento7170/"><Button variant="linkedin" >Linkedin</Button></a>
            <a target="_blank" href="https://github.com/LukNasc"><Button variant="github">Github </Button ></a>
            <a target="_blank" href="https://www.instagram.com/luscas.nasc/?hl=pt-br"><Button variant="instagram" >Instagram</Button ></a>
        </Container >
    )
}

export default TopBar;