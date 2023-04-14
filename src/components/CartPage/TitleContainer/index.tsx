import { ReactNode } from "react"
import * as S from "./styles"

interface ITitleContainerProps {
    title: string
    subTitle: string
    icon: ReactNode
}

export const TitleContainer = ({title, icon, subTitle}: ITitleContainerProps) => {
    return (
        <S.InfoContainer>
                {icon}
                <S.TitleContent>
                    <S.Title>
                        {title}
                    </S.Title>
                    <S.SubTitle>
                        {subTitle}
                    </S.SubTitle>
                </S.TitleContent>
            </S.InfoContainer>
    )
}