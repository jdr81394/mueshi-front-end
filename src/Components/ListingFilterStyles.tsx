import styled from 'styled-components';

interface StyledButtonProps {
    showYourLists: boolean
}

const StyledButton = styled.button <StyledButtonProps> `
    max-width: 200px; 
    width: 50%;
    height: 50%;
    display: inline-block;
    padding: 12px 24px;
    font-size: 16px;
    text-align: center;
    text-decoration: none;
    background:  ${(props) => {
        return props.showYourLists ? 'linear-gradient(to bottom, #3498db, #2980b9);' : 'linear-gradient(to bottom, #f0f0f0, #888888);'
    }}
    border-radius: 4px;
    border: ${(props) => {
        return props.showYourLists ? '1px solid #2980b9;' : "2px solid #f0f0f0;"
    }}
    color: #fff;
    cursor: pointer;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: background 0.3s, transform 0.2s;
    transition: box-shadow 0.3s, transform 0.2s;
    transform: ${(props) => {
        return props.showYourLists ? 'scale(1);' : 'scale(0.85);'
    }}

    // &:hover {
    //     background: linear-gradient(to bottom, #2980b9, #3498db);
    //     transform: translateY(-2px);
    //     box-shadow: 0 6px 8px rgba(0, 0, 0, 0.15);
    // }

    // &:active {
    //     transform: scale(0.85);
    //     box-shadow: 0 10px 5px rgba(0, 0, 0, 0.1);
    // }
`



export default StyledButton;