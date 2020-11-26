import styled from 'styled-components';

interface IProps {
    background: string
}

export const Parallax = styled.div<IProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  /* The image used */
  background-image: url(${props => props.background});

  /* Set a specific height */
  height: 500px;
  width: 100%;  
  /* Create the parallax scrolling effect */
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;


`