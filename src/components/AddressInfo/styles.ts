import styled from "styled-components";

// export const Title = styled.h2(({ theme }) => ({
//     fontFamily: theme.fonts.title,
//     fontSize: theme.textSizes["title-title-xs"],
//     color: theme.color["base-subtitle"],
// }))

export const AddressContainer = styled.div(({ theme }) => ({
    background: theme.color["base-card"],
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    padding: '40px',
    // gap: '32px',
}))

export const TitleContent = styled.div(({ theme }) => ({
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: '8px',
}))

export const Title = styled.h3(({ theme }) => ({
    color: theme.color["base-text"],
    fontSize: theme.textSizes["text-regular-m"],
    display: 'flex',
}))

export const SubTitle = styled.p(({ theme }) => ({
    color: theme.color["base-subtitle"],
    fontSize: theme.textSizes["text-regular-s"],
    display: 'flex',
}))