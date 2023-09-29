import styled, { css, keyframes } from "styled-components";

const riseFromDepth = keyframes`
0% {
    opacity: 0;
    /* styles at the start of the animation */
    box-shadow: 0px 0px 0px rgba(0, 0, 0, 0.0);
}

25% {
    opacity: 1;

}

50% {
    transform: scale(1.05);
    /* styles in the middle of the animation */
    box-shadow: 0px 4px 6px 8px rgba(0, 0, 0, 0.5);
}

100% {
    /* styles at the end of the animation */
    box-shadow: 0px 4px 6px 4px rgba(0, 0, 0, 0.5);
    transform: scale(1);
}

`

const expandListing = keyframes`
    0% {
        opacity: 1;
        transform: scale(1);
    }
    25% {
        
    }
    100% {
        opacity: 0;
        transform: scale(10);
    }
`;

const moveToCenter = keyframes`
    0% {
        ${(props) => { console.log("props:  ", props) }}
    }
    100% {
        transform: scale(2);
    }
`;


interface isExpanded {
    isExpanded: boolean
}

export const OuterListingContainer = styled.div<isExpanded>`
font-style: italic;
transition: transform 1.3s;
/* margin: 0px 1px 15px 1px; */
margin: 0px 1% 5%;
background-color: #ffffff;
box-shadow: 0px 4px 6px 4px rgba(0, 0, 0, 0.5);
border-radius: 8px;
height: 275px;
animation: ${riseFromDepth} 1.5s ease-out forwards;
animation: ${(props) => props.isExpanded ? css`${expandListing} 1.0s ease-in forwards;` : ''}


&:hover {
    transform: scale(1.05);
cursor: pointer;
}

@media (max-width: 1450px) {
        border-radius: 100px 100px 8px 8px;
}
@media(max-width: 850px) {
        margin: 0px 5 % 5 %;
    
}

@media(max-width: 684px) {
        width: 500px;
        border-radius: 300px 8px 8px 300px;
}

`

export const ListingImage = styled.img`
border-radius: 200px;

@media(max-width: 500px) {
        height: 250px;
        width: 250px;
        margin-top: 15px;

    
}


@media(max-width: 440px) {
        height: 200px;
        width: 200px;
        margin-top: 40px;

}
`





export const ProductTextDescription = styled.div`


@media(max-width: 684px) {

        display: flex;
        flex-direction: column;
        flex-basis: 100 %;
        justify-content: center;
    
`

export const Description = styled.div`


@media(max-width: 684px) {

    display: inline;

`






