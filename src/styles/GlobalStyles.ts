import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
body {
    background-color: ${({ theme }) => theme.colors.whiteBackground};
    box-sizing: border-box;
    color: black;
    display: flex;
    flex-direction: column;
    height: 100vh;
    justify-content: space-between;
    margin: 0;
    padding: 0;
}   
`;

export default GlobalStyles;
