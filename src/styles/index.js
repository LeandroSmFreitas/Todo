import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

    :root{
        --black: #282D33;
        --greySubtitle: #ACA7A7;
        --white: #F7F6F4;
        --fontTitle: 'Roboto Mono';
        --subTitle: "Poppins";
        --color-subContainerRight: #20413e;
        }

    body {
        margin: 0;
        padding: 0;
        background: var(--white);
        font-size: 16px;
        h1{
            color: var(--white);
            font-family: var(--fontTitle);
            font-size: 1.5rem;
        }
    }
    
    a{
        text-decoration: none;
    }
`

export default GlobalStyles