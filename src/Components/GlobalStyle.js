import { createGlobalStyle } from "styled-components";

const Globalstyle = createGlobalStyle`
    *{
        margin:0;
        padding: 0;
        box-sizing: border-box;
    }
    #root {
        width: 100%;
        max-height: 100vh;
        min-height: 100vh;
        overflow: hidden;
    }
`;

export default Globalstyle;
