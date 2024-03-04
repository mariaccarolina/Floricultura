import React from "react";
import styled from "styled-components"

const MainStyle = styled.main`
    display: flex;
    align-items: center ;
    justify-content: center;
    height: 80vh;
`
const Img = styled.img`
    width: 80vw;
    height: 60vh;
`
function Main() {
    return(
        <MainStyle>
           <Img src="https://st4.depositphotos.com/13193658/24437/i/450/depositphotos_244372836-stock-photo-beautiful-smiling-female-flower-shop.jpg" alt="buque de flores" />
        </MainStyle>
    )
}
export default Main