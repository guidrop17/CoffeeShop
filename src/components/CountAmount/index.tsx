import { Minus, Plus } from 'phosphor-react'
import * as S from './styles'


interface CountAmountProps {
    amount: number
    onAdd: () => void
    onSubstract: () => void
}

export const CountAmount = ({amount, onAdd, onSubstract}:CountAmountProps) => {
    return (
        <S.CountContent>
            <S.ButtonCount  disabled={amount <= 1} onClick={onSubstract}>
                <Minus weight="fill" size={16}/>
            </S.ButtonCount>
            <S.Count min="1" max="99" value={amount}/>
            <S.ButtonCount onClick={onAdd}>
                <Plus weight="fill" size={16}/>
            </S.ButtonCount>
        </S.CountContent>
    )
}