import * as S from "./styles"
import CoffeeHome from "../../assets/CoffeeHome.svg"
import Background from "../../assets/Background.png"
import { Benefits } from "./constants"


export const Banner = () => {
    return (
        <S.BannerContainer>
            <S.BannerContentText>
                <S.BannerTitle>
                    Encontre o café perfeito para qualquer hora do dia
                </S.BannerTitle>
                <S.BannerSubTitle>
                    Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora
                </S.BannerSubTitle>
                <S.BannerContainerBenefits>
                    {Benefits.map(({ icon, body }) => {
                        return(
                        <S.BannerContentBenefits>
                            {icon}{body}
                        </S.BannerContentBenefits>
                        )
                    })}
                </S.BannerContainerBenefits>
            </S.BannerContentText>
            <S.BannerImage src={CoffeeHome}/>
        </S.BannerContainer>
    )
}