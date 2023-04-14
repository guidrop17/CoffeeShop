import { CurrencyDollar } from "phosphor-react"
import { Container } from "../Container"
import { TitleContainer } from "../TitleContainer"
import { PaymentMethod } from "./PaymentMethod"
import { PaymentMethodData } from "./Constants"
import { Content } from "./styles"

export const PaymentInfo = () => {
    return (
        <Container>
            <TitleContainer
            icon={<CurrencyDollar color='#8047F8' size={22}/>}
            title="Pagamento"
            subTitle="O pagamento é feito na entrega. Escolha a forma que deseja pagar"
            />
            <Content>
                {PaymentMethodData.map(({icon, title}) => { 
                    return (
                    <PaymentMethod key={title} icon={icon} title={title}/>
                    )
                })}
            </Content>
        </Container>
    )
}