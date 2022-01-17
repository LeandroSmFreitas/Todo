import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

    :root{
        --color-back-home: #292929;
        --black: #000;
        --greySubtitle: #ACA7A7;
        --white: #fafafa;
        --fontTitle: 'Roboto Mono';
        --subTitle: "Poppins"
        }

    body {
        margin: 0;
        padding: 0;
        background: var(--white);
        font-size: 16px;
    }
    
    a{
        text-decoration: none;
    }
`

export default GlobalStyles