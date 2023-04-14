import styled from "styled-components";

export const InfoContainer = styled.div(({ theme }) => ({
    display: 'flex',
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