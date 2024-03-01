import React from "react";
import styled from "styled-components"

const  HeaderStyle = styled.header`
    background-color: #c1c1ec;
`
const Img = styled.img`
    width: 15vw;

`
function Header() {
    return (
        <HeaderStyle>
          <Img src="https://www.zarla.com/images/zarla-jardim-paraso-1x1-2400x2400-20210607-3q9h33gdmprqtp8yd7ty.png?crop=1:1,smart&width=250&dpr=2" alt="" />
          <nav>
            <ul>
                <li>Inicio</li>
                <li>Arranjos de flores</li>
                <li>Buquês de flores</li>
                <li>Contatos</li>
            </ul>
          </nav>
        </HeaderStyle>
    )
}
export default Header