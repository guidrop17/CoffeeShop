import styled from "styled-components";

export const CountContent = styled.div(({ theme }) => ({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '8px',
    background: theme.color["base-button"],
    borderRadius: '6px',
    gap:'0.5rem'
}))

export const ButtonCount = styled.button(({ theme }) => ({
    background: 'transparent',
    color: theme.color["purple"],
    border: '0',
    fontSize: theme.textSizes["title-title-s"],

    ":hover": {
        color: theme.color["purple-dark"]
    }
}))

export const Count = styled.input.attrs({ type: 'number'})`
    text-align: center;
    justify-content: center;
    align-Itens: center;
    max-width: 20px;
    font-weight: 400;
    font-size: 1rem;

    -webkit-appearance: textfield;
    -moz-appearance: textfield;
    appearance: textfield;
    background: transparent;
    ::-webkit-inner-spin-button, 
    ::-webkit-outer-spin-button { 
        -webkit-appearance: none;
    }
    outline:none;
    border: 0px;
    height: 20px;
    border-right: 0 px solid black;

    label, input, button {
        font-size: inherit;
        padding: 0.2em;
        -moz-box-sizing: content-box;
        -webkit-box-sizing: content-box;
        box-sizing: content-box;
    }
`
