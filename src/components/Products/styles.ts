import styled from "styled-components";

export const Products = styled.section(({}) => ({
    padding: '2rem 10rem 0 10rem',
    gap: '2.125rem',
}))

export const Title = styled.h2(({}) => ({
    width: '193px',
    height: '42px',
    left: 'calc(50% - 193px/2 - 463.5px)',
    top: '32px',

    fontFamily: 'Baloo2',
    fontWeight: '800',
    fontSize: '32px',
    lineHeight: '130%',
    
    display: 'flex',
    alignItems: 'center',
}))

export const Container = styled.div(({}) => ({
    display: "grid",
    gridTemplateColumns: '1fr 1fr 1fr 1fr ',
    flexDirection: 'column',
    paddingTop: '3.375rem',
    gap: '2.125rem',
}))

export const Card = styled.div(({ theme }) => ({
    padding:'0 1.5rem 1.25rem 1.5rem',
    width: '256px',
    height: '310px',
    background: theme["base-card"],
    borderRadius: '6px 36px',
}))

export const Image = styled.div(({}) => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
}))

export const ProductsTitle = styled.h3(({ theme }) => ({
    marginTop: '1rem',
    display: 'flex',
    justifyContent: 'center',
    textAlign: 'center',
    fontWeight: '700',
    fontSize: '1.25rem',
    lineHeight: '130%',
    alignItems: 'flex-end',
    color: theme["base-subtitle"]
}))

export const Description = styled.p(({ theme }) => ({
    marginTop: '0.5rem',
    fontFamily: 'Roboto',
    display: 'flex',
    justifyContent: 'center',
    textAlign: 'center',
    fontWeight: '400',
    fontSize: '14px',
    lineHeight: '130%',
    color: theme["base-label"]
}))

export const Category = styled.div(({}) => ({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '0px',
    gap: '4px',
}))

export const Tag = styled.p(({ theme }) => ({
    marginTop: '0.75rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '4px 8px',

    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: '12px',
    lineHeight: '130%',
    textTransform: 'uppercase',
    color: theme["yellow-dark"],
    
    background: theme["yellow-light"] ,
    borderRadius: '100px',
}))

export const BuyContainer = styled.div(({ theme }) => ({
    background: theme["purple-dark"],
    color: theme.white,
    borderRadius: '6px',
    padding: '8px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
}))

export const Price = styled.p(({ theme }) => ({
    fontWeight: '800',
    fontSize: '24px',
    lineHeight: '130%',
    color: theme["base-text"],

    'span': {
    fontWeight: '400',
    fontSize: '14px',
    lineHeight: '130%',
    color: theme["base-text"],
    }
}))

export const CountContent = styled.div(({ theme }) => ({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '8px',
    background: theme["base-button"],
    borderRadius: '6px',
    gap:'0.5rem'
}))

export const CountContainer = styled.div(({ theme }) => ({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '1.45rem',
    marginTop:'2rem',

    div: {
        gap: '0.5rem',
        display: 'flex',
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

export const ButtonCount = styled.button(({ theme }) => ({
    background: 'transparent',
    color: theme["purple-dark"],
    border: '0',
    fontSize: '1.25rem',
}))