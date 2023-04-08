import { ShoppingCart } from 'phosphor-react';
import { useContext, useState } from 'react';
import { Context } from '../../context/Context';
import { ProductsConstants } from './constants'
import * as S from './styles'

export const Products = () => {
    const {items} = useContext(Context)
    const [amount, setAmount] = useState(0)

    const handleAddAmount = () => {
        setAmount(amount + 1)
    }
    const handleSubstractAmount = () => {
        if (amount === 0){
            return
        }else{
            setAmount(amount - 1)
        }
    }
    return (
        <S.Products>
            <S.Title>Nossos cafés</S.Title>
            <S.Container>
                {ProductsConstants.map(({name, category, description, value, img }) =>{
                    return (
                        <S.Card>
                            <S.Image>
                                <img src={img}/>
                            </S.Image>
                            <S.Category>
                                <S.Tag>
                                    {category}
                                </S.Tag>
                            </S.Category>                             
                            <S.ProductsTitle>
                                {name}
                            </S.ProductsTitle>
                            <S.Description>
                                {description}
                            </S.Description>
                            <S.CountContainer>
                                <S.Price><span>R$</span>{value}</S.Price>
                                <div>
                                    <S.CountContent>
                                        <S.ButtonCount onClick={handleSubstractAmount}>-</S.ButtonCount>
                                        <S.Count min="1" max="99" value={amount}/>
                                        <S.ButtonCount onClick={handleAddAmount}>+</S.ButtonCount>
                                    </S.CountContent>
                                    <S.BuyContainer>
                                        <ShoppingCart weight="fill" size={22} />
                                    </S.BuyContainer>
                                </div>
                            </S.CountContainer> 
                        </S.Card>
                        )
                    }
                )}
            </S.Container>
        </S.Products>
    )
}