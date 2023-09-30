import styled, { keyframes, css } from "styled-components";


const fadeOut = keyframes`
0% {
    opacity: 1;
}

100% {
    opacity: 0;
}
    `


export const AppComponent = styled.div<{ fadeAway: boolean }>`
text - align: center;
animation: ${({ fadeAway }) =>
        fadeAway ?
            css`${fadeOut} 1s ease-in-out forwards;` :
            ""
    }


`

export const BottomNavbar = styled.nav`


  background-color: #ccc;
  color: black;
  font-family: Arial, Helvetica, sans-serif;
  padding: 10px 0;
  margin: 13% 1% 1.5%;
  /* background-color: #ffffff; */
  box-shadow: 0px -4px 6px 4px rgba(0, 0, 0, 0.5);
  border-radius: 4px;
  display: flex;
  justify-content: end;
  align-items: center;


`


