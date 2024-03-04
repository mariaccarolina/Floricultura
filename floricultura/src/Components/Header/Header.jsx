import React from "react";
import styled from "styled-components"

const  HeaderStyle = styled.header`
    background-color: #c1c1ec;
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 20vh;
`
const Img = styled.img`
    width: 15vw;
    height: 15vh;
`
const Ul = styled.ul`
    display: flex;
    justify-content: space-around;
    list-style: none;
    width: 60vw;
    color: #f22268;
    cursor: pointer;
    font-size: 1.3rem;
`
const Li = styled.li`
   &:hover {
    color: white;
    text-shadow: 2px 1px 1px black;
   }
`

function Header() {
    return (
        <HeaderStyle>
          <Img src="https://www.zarla.com/images/zarla-jardim-paraso-1x1-2400x2400-20210607-3q9h33gdmprqtp8yd7ty.png?crop=1:1,smart&width=250&dpr=2" alt="" />
          <nav>
            <Ul>
                <Li>Inicio</Li>
                <Li>Arranjos de flores</Li>
                <Li>Buquês de flores</Li>
                <Li>Contatos</Li>
            </Ul>
          </nav>
        </HeaderStyle>
    )
}
export default Header