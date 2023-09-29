import styled, { keyframes } from "styled-components";

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

export const FullPage = styled.div`
    animation: ${fadeIn} 1s linear;
    opacity: 1;

`

export const TopHalf = styled.div`
     display: flex;
     padding: 25px;
     font-style: italic;
    margin: 10px 1% 5%;
    background-color: #ffffff;
    box-shadow: 0px 4px 6px 4px rgba(0, 0, 0, 0.5);
    border-radius: 8px;

     @media (max-width: 750px) {
        flex-direction: column;
    }
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
    width: 65%;
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




export const TextArea = styled.textarea`
    @media (max-width: 750px) {
        display: none;
    }
`

export const Photo = styled.img`
    border-radius: 100000px;
     width: 50%;
     height: 50%;
     @media (max-width: 750px) {
        margin: auto
    }
`

export const BottomHalf = styled.div``

