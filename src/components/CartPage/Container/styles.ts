import styled from "styled-components";

export const ContainerCart = styled.div(({ theme }) => ({
    background: theme.color["base-card"],
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
    padding: '40px',
    gap: '32px',
    maxWidth: '640px',
}))