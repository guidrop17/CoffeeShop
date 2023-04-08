import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle(({ theme }) => ({
    "*": {
        margin: "0",
        padding: "0",
        boxSizing: "border-box",
    },

    ":focus": {
        outline: "0",
        boxShadow: "0",
    },

    "body": {
        background: theme.background,
        fontFamily: 'Baloo 2',
    },
    
    // "body": {
    //     background: theme.background,
    //     fontFamily: 'Roboto, sans-serif',
        
    // },
    
    "h1, h2, h3": {
        fontFamily: 'Baloo 2',
    },
}))