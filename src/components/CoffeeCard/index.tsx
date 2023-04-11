import { ReactNode, useState } from "react"
import * as S from './styles'
import { CountAmount } from '../CountAmount';
import { ShoppingCart } from "phosphor-react";
import { AddItemInCartAction } from "../../reducers/actions";

export interface Coffee {
    id: number
    name: string
    category: string[]
    description: string
    price: number
    photo: string
}

interface ProductsProps {
    coffee: Coffee
}

export const CoffeCard = ({coffee}: ProductsProps) => {
    const [amount, setAmount] = useState(1)

    const handleAddAmount = () => {
        setAmount((state) => state + 1)
    }
    const handleSubstractAmount = () => {
        setAmount((state) => state - 1)
    }
    const handleAddToCart = () => {
        const coffeeToAdd = {
          ...coffee,
          quantity: 1,
        };
        AddItemInCartAction(coffeeToAdd);
      }
    return (
        <S.Card>
            <S.Image>
                <img src={coffee.photo}/>
            </S.Image>
            <S.Category>
                {coffee.category.map((tag) => {
                    return (
                        <S.Tag key={`${coffee.id}${coffee.category}`}> 
                            {tag}
                        </S.Tag>
                    )
                })}
            </S.Category>                             
            <S.ProductsTitle>
                {coffee.name}
            </S.ProductsTitle>
            <S.Description>
                {coffee.description}
            </S.Description>
            
            <S.CountContainer>
                <S.Price><span>R$</span>{coffee.price}</S.Price>
                <div>
                    <CountAmount
                    amount={amount}
                    onAdd={handleAddAmount}
                    onSubstract={handleSubstractAmount}
                    />
                    <S.BuyContainer onClick={handleAddToCart}>
                        <ShoppingCart weight="fill" size={22} />
                    </S.BuyContainer>
                </div>
            </S.CountContainer> 
        </S.Card>
        )
}