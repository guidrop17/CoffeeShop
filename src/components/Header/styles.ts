import styled from 'styled-components'

export const HeaderContainer = styled.header(() => ({
    justifyContent: 'space-between',
    display: 'flex',
    padding: '2rem 10rem',
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
}))

export const Logo = styled.img(() => ({}))

export const ContainerActions = styled.div(() => ({
    display: 'flex',
    gap: '0.75rem',
}))

export const LocalizationInfo = styled.button.attrs({ type: "submit"})(({ theme }) => ({
    padding: '0.5rem 0.5rem',
    background: theme['purple-light'],
    color: theme['purple-dark'],
    border: 'none',
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    borderRadius: '6px',
}))

export const IconCard = styled.img(() => ({}))