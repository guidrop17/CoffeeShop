import { ReactNode, useState } from 'react'
import * as S from './styles'

interface IPaymentMethod {
    icon: ReactNode
    title: string
}

export const PaymentMethod = ({icon, title}: IPaymentMethod) => {
    return (
        <S.Container>
            <input type='radio'/>
            <label>{icon}{title}</label>
        </S.Container>
    )
}



