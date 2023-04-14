import styled from "styled-components"
import Background from "../../../assets/Background.png"

export const BannerContainer = styled.section(() => ({
    display: "flex",
    padding: '5.875rem 10rem 6.75rem 10rem',
    justifyContent: "center",
    gap: '3.5rem',
    background:`url(${Background})`,
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
    color: theme.color["base-title"]
}))

export const BannerSubTitle = styled.p(({ theme }) => ({
    fontSize: '1.25rem',
    lineHeight: '130%',
    color: theme.color["base-subtitle"]
}))

export const BannerImage = styled.img(({ theme }) => ({
    position: "absolute",
    zIndex: '-1',
    opacity: '0.2',
    width: '416px',
    height: '300px',

    [theme.mediaScreen.lg]: {
        display: 'flex',
        position: "relative",
        zIndex: '1',
        opacity: '1',
        width: '476px',
        height: '360px',        
    }
}))

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