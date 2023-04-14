import styled from "styled-components";

export const Products = styled.section(({}) => ({
    padding: '2rem 10rem 0 10rem',
    gap: '2.125rem',
}))

export const Title = styled.h2(({ theme }) => ({
    fontFamily: theme.fonts.title,
    fontWeight: '800',
    fontSize: theme.textSizes["title-title-l"],
    lineHeight: '130%',
    justifyContent: 'center',
    
    display: 'flex',
    alignItems: 'center',

    [theme.mediaScreen.md]: {
        gridTemplateColumns: '1fr 1fr',
    },
    [theme.mediaScreen.lg]: {
        justifyContent: 'start',
        gridTemplateColumns: '1fr 1fr 1fr 1fr',
    }
}))

export const Container = styled.div(({ theme }) => ({
    display: "grid",
    gridTemplateColumns: '1fr',
    flexDirection: 'column',
    justifyContent: 'center',
    paddingTop: '3.375rem',
    gap: '2.125rem',

    [theme.mediaScreen.md]: {
        gridTemplateColumns: '1fr 1fr',
    },
    [theme.mediaScreen.lg]: {
        gridTemplateColumns: '1fr 1fr 1fr',
    },
    [theme.mediaScreen.xl]: {
        gridTemplateColumns: '1fr 1fr 1fr 1fr',
    }
}))