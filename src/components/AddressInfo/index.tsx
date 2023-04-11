import { MapPinLine } from "phosphor-react"
import * as S from "./styles"

export const AddressInfo = () => {
    return (
        <S.AddressContainer>
            <MapPinLine/>
            <S.TitleContent>
                <S.Title>
                    Endereço de Entrega
                </S.Title>
                <S.SubTitle>
                    Informe o endereço onde deseja receber seu pedido
                </S.SubTitle>
            </S.TitleContent>
        </S.AddressContainer>
    )
}