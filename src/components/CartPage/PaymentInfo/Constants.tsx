import { Bank, CreditCard, Money } from "phosphor-react";


export const PaymentMethodData = [
    {
        icon: (<CreditCard/>),
        title: 'Cartão de crédito'
    },
    {
        icon: (<Bank/>),
        title: 'Cartão de débito'
    },
    {
        icon: (<Money/>),
        title: 'Dinheiro'
    }
]