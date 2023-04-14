import { ReactNode } from "react"
import {ContainerCart} from "./styles"

interface ISection {
    children: ReactNode
}

export const Container = ({children}: ISection) => {
    return (
        <ContainerCart>
            {children}
        </ContainerCart>
    )
}