import * as S from "./styles"
import Logo from "../../assets/Logo.svg"


export const Header = () => {
    return(
        <S.HeaderContainer>
            <S.Logo src={Logo}/>
        </S.HeaderContainer>
    )
}