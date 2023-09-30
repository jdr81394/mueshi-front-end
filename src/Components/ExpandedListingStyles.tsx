import styled, { css, keyframes } from "styled-components";

interface CustomInput {
    isEdit: boolean
}


const fadeIn = keyframes`
    0% {
        opacity: 0
    }
     100% {
        opacity;1
     }
`
const fadeOut = keyframes`
    0% {
        opacity: 1;
    }
     100% {
        opacity: 0;
     }
`

export const Navbar = styled.nav`


  background-color: #ccc;
  color: black;
  font-family: Arial, Helvetica, sans-serif;
  padding: 10px 0;
  margin: 0px 1% 5%;
  /* background-color: #ffffff; */
  box-shadow: 0px 4px 6px 4px rgba(0, 0, 0, 0.5);
  border-radius: 4px;
  display: flex;
  justify-content: end;
  align-items: center;


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



export const FullPage = styled.div<{ fadeAway: boolean }>`
    animation: ${fadeIn} 1s linear;
    animation: ${({ fadeAway }) => fadeAway ? css`${fadeOut} 1s linear forwards;` : ""}
    opacity: 1;

`

export const TopHalf = styled.div`
     height: 350px;
     display: flex;
     padding: 25px;
     font-style: italic;
    margin: 1% auto;
    background-color: #ffffff;
    box-shadow: 0px 4px 6px 4px rgba(0, 0, 0, 0.5);
    border-radius: 8px;
     width: 80%;
     @media (max-width: 750px) {
        flex-direction: column;
    }
    max-width: 800px;
`

export const TextForm = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    @media (max-width: 750px) {

        margin: auto
    }
`

export const PriceInput = styled.input<CustomInput>`
    border: none;
    background: ${({ isEdit }) => isEdit ? "linear-gradient(to bottom, #f5f5f5, #e0e0e0);" : "none;"}
    font-size: 24px;
    font-weight: bold;
    color: #333; 
    padding: 0;
    margin: 25px auto;
    outline: none;
    width: 25%;
    text-align: center; 
    border-radius: 10px;

    @media (max-width: 750px) {
        margin: 10px auto;
    }

    // &:focus {
    //     border-bottom: 1px solid black;
    //   }
`

export const NameInput = styled.input<CustomInput>`
border-radius: 10px;

    border: none;
    background: ${({ isEdit }) => isEdit ? "linear-gradient(to bottom, #f5f5f5, #e0e0e0);" : "none;"}
    font-size: 24px;
    font-weight: bold;
    color: #333; 
    padding: 0;
    margin: 25px auto;
    outline: none;
    width: 65%;
    text-align: center; 
    @media (max-width: 750px) {
        margin: 10px auto;
    }


    // &:focus {
    // border-bottom: 1px solid black;
    // }
`

export const ButtonContainer = styled.div`
    width: 100%;
    margin-top: 25px;
    display: flex;
    flex-direction: row;

    @media (max-width: 750px) {
        margin: 10px auto;
    }
`
export const SaveButton = styled.button`
    margin: auto;
    width: 40%;
    display: inline-block;
    padding: 12px 24px;
    font-size: 16px;
    text-align: center;
    text-decoration: none;
background: linear-gradient(to bottom, #2ecc71, #27ae60);
    border-radius: 4px;
    border: 2px solid #2ecc71;
    color: #fff;
    cursor: pointer;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: background 0.3s, transform 0.2s;
    flex-basis: 40%;
    @media (max-width: 750px) {
        width: 100%;
    }
`

export const EditButton = styled.button`
    margin: auto;
    width: 40%;
    display: inline-block;
    padding: 12px 24px;
    font-size: 16px;
    text-align: center;
    text-decoration: none;
    background: linear-gradient(to bottom, #3498db, #2980b9);
    border-radius: 4px;
    border: 2px solid #3498db;
    color: #fff;
    cursor: pointer;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: background 0.3s, transform 0.2s;
    flex-basis: 40%;
    @media (max-width: 750px) {
        width: 100%;
    }
`

export const CancelButton = styled.button`
    margin: auto;
    width: 40%;
    display: inline-block;
    padding: 12px 24px;
    font-size: 16px;
    text-align: center;
    text-decoration: none;
    background: linear-gradient(to bottom, #95a5a6, #7f8c8d);

    border-radius: 4px;
    border: 2px solid #95a5a6;
    color: #fff;
    cursor: pointer;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: background 0.3s, transform 0.2s;
    flex-basis: 40%;

    @media (max-width: 750px) {
        width: 100%;
    }

`

export const DeleteButton = styled.button`
    margin: auto;
    width: 40%;
    display: inline-block;
    padding: 12px 24px;
    font-size: 16px;
    text-align: center;
    text-decoration: none;
    background: linear-gradient(to bottom, #e74c3c, #c0392b);
    border-radius: 4px;
    border: 2px solid #e74c3c;
    color: #fff;
    cursor: pointer;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: background 0.3s, transform 0.2s;
    flex-basis: 40%;

    @media (max-width: 750px) {
        width: 100%;
    }

`


export const AskingPriceContainer = styled.div`
    display: flex;
`

export const AskingPrice = styled.div`
position: relative;
    margin: auto;
    left: 100px;

    @media (max-width: 800px) {
        left: 90px;
    }

    @media (max-width: 410px) {
        left: 85px;
    }

    @media (max-width: 369px) {
        left: 65px;
    }

`;


export const TextArea = styled.textarea`
    @media (max-width: 750px) {
        display: none;
    }
`

export const Photo = styled.img`
    border-radius: 100000px;
     width: 300px;
     height: 300px;
     @media (max-width: 750px) {
        margin: auto;
        width: 175px;
        height: 175px;
    }
`

export const CurrentBidderText = styled.div`
    margin: 4% auto;
    font-size: 20px;
    font-style: italic;
    text-align: center;
    `

export const BidPanel = styled.div`
    padding: 25px;
    font-style: italic;
    margin: 4% auto;
    background-color: #ffffff;
    box-shadow: 0px 4px 6px 4px rgba(0, 0, 0, 0.5);
    border-radius: 8px;
    max-width: 800px;
    @media (max-width: 750px) {
        display: flex;
        flex-direction: column;
    }

`

export const BidPanelFlex = styled.div`
    display: flex;
    justify-content: space-evenly;
    @media (max-width: 750px) {
        flex-direction: row;
    }
`

export const BidPanelImage = styled.img`
    border-radius: 100000px;
    width: 300px;
    height: 300px;
    @media (max-width: 750px) {
        width: 150px;
        height: 150px;
    }
`

export const BidPanelText = styled.div`
    display: flex;
    justify-content: space-evenly;
    flex-direction: column;

    @media (max-width: 450px) {
        text-align: center;
    }
`

export const BidPanelButtonContainer = styled.div`
    display: flex;
    flex-direction: row;
   
`

export const BidPanelButtonContainerAcceptButton = styled.button`
    margin: 10px auto;
    width: 40%;
    display: inline-block;
    padding: 12px 24px;
    font-size: 16px;
    text-align: center;
    text-decoration: none;
background: linear-gradient(to bottom, #2ecc71, #27ae60);
    border-radius: 4px;
    border: 2px solid #2ecc71;
    color: #fff;
    cursor: pointer;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    max-width: 200px;
    `

export const VerticalDivider = styled.div`
width: 70%;
height: 1px;
background-color: #ccc;
margin: 4% auto;
`
export const BidPanelButtonContainerDeclineButton = styled.button`
    margin: 10px auto;
    width: 40%;
    display: inline-block;
    padding: 12px 24px;
    font-size: 16px;
    text-align: center;
    text-decoration: none;
    background: linear-gradient(to bottom, #e74c3c, #c0392b);
    border-radius: 4px;
    border: 2px solid #e74c3c;
    color: #fff;
    cursor: pointer;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    max-width: 200px;
`

export const BottomHalf = styled.div`
    padding: 0px 50px;
`

