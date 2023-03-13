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

    "header": {
        background: theme.background,
        fontFamily: 'Baloo 2, sans-serif',
    },

    "body": {
        background: theme.background,
        fontFamily: 'Roboto, sans-serif',
    },
}))