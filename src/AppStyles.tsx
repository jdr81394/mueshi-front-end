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

