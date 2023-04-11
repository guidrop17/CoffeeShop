import styled from "styled-components"

export const Card = styled.div(({ theme }) => ({
    padding:'0 1.5rem 1.25rem 1.5rem',
    width: '256px',
    height: '310px',
    background: theme.color["base-card"],
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
    fontSize: theme.textSizes["title-title-s"],
    lineHeight: '130%',
    alignItems: 'flex-end',
    color: theme.color["base-subtitle"],
    fontFamily: theme.fonts.title
}))

export const Description = styled.p(({ theme }) => ({
    marginTop: '0.5rem',
    fontFamily: theme.fonts.regular,
    display: 'flex',
    justifyContent: 'center',
    textAlign: 'center',
    fontWeight: '400',
    fontSize: theme.textSizes["text-regular-s"],
    lineHeight: '130%',
    color: theme.color["base-label"]
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

    fontFamily: theme.fonts.regular,
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: theme.textSizes["text-bold-s"],
    lineHeight: '130%',
    textTransform: 'uppercase',
    color: theme.color["yellow-dark"],
    
    background: theme.color["yellow-light"] ,
    borderRadius: '100px',
}))

export const BuyContainer = styled.div(({ theme }) => ({
    background: theme.color["purple-dark"],
    color: theme.color.white,
    borderRadius: '6px',
    padding: '8px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
}))

export const Price = styled.p(({ theme }) => ({
    fontWeight: '800',
    fontSize: theme.textSizes["title-title-m"],
    lineHeight: '130%',
    color: theme.color["base-text"],
    fontFamily: theme.fonts.title,

    'span': {
    fontWeight: '400',
    fontSize: theme.textSizes["text-bold-s"],
    lineHeight: '130%',
    color: theme.color["base-text"],
    }
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