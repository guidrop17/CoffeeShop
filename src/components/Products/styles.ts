import styled from "styled-components";

export const Products = styled.section(({}) => ({
    padding: '2rem 10rem 0 10rem',
    gap: '2.125rem',
}))

export const Title = styled.h2(({ theme }) => ({
    width: '193px',
    height: '42px',
    left: 'calc(50% - 193px/2 - 463.5px)',
    top: '32px',

    fontFamily: theme.fonts.title,
    fontWeight: '800',
    fontSize: theme.textSizes["title-title-l"],
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