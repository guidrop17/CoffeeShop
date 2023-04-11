import styled from "styled-components"

export const BannerContainer = styled.section(() => ({
    display: "flex",
    padding: '5.875rem 10rem 6.75rem 10rem',
    justifyContent: "center",
    gap: '3.5rem',
}))

export const BannerContentText = styled.div(({}) => ({
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
}))

export const BannerTitle = styled.h1(({ theme }) => ({
    fontSize: '3rem',
    lineHeight: '130%',
    fontFamily: theme.fonts.title,
}))

export const BannerSubTitle = styled.p(() => ({
    fontSize: '1.25rem',
    lineHeight: '130%',
}))

export const BannerImage = styled.img(() => ({}))

export const BannerContainerBenefits = styled.div(({}) => ({
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    flexDirection: 'column',
    gap: '1.25rem',
    marginTop: '4.125rem'
}))

export const BannerContentBenefits = styled.div(({}) => ({
    display: 'flex',
    gap: '0.75rem',
    justifyContent: 'left',
    alignItems: 'center',
}))

export const BaseIcon = styled.div(({ theme }) => ({
    color: theme.color.white,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '8px',
    gap: '8px',

    width: '32px',
    height: '32px',
    borderRadius: '1000px',
}))

export const YellowDarkIcon = styled(BaseIcon)(({ theme }) =>({
    background: theme.color["yellow-dark"]
}))

export const YellowIcon = styled(BaseIcon)(({ theme }) =>({
    background: theme.color.yellow
}))

export const GrayIcon = styled(BaseIcon)(({ theme }) =>({
    background: theme.color["base-text"]
}))

export const PurpleIcon = styled(BaseIcon)(({ theme }) =>({
    background: theme.color.purple
}))