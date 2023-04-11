// import { Context } from '../../context/Context';
import { Coffees } from '../../data/data'
import { CoffeCard } from '../CoffeeCard'
import * as S from './styles'

export const Products = ()  => {
    return (
        <S.Products>
            <S.Title>Nossos cafés</S.Title>
            <S.Container>
                {Coffees.map((coffee) => {
                    return (
                        <CoffeCard key={coffee.id} coffee={coffee}/>
                    )
                })}
            </S.Container>
        </S.Products>
    )
}