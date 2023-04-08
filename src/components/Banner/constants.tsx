import * as S from "./styles"
import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react"


export const Benefits = [
    {
        icon: (<S.YellowDarkIcon><ShoppingCart weight="fill" size={32}/></S.YellowDarkIcon>),
        body: 'Compra simples e segura'
    },
    {
        icon: (<S.GrayIcon><Package weight="fill" size={32}/></S.GrayIcon>),
        body: 'Embalagem mantém o café intacto'
    },
    {
        icon: (<S.YellowIcon><Timer weight="fill" size={32}/></S.YellowIcon>),
        body: 'Entrega rápida e rastreada'
    },
    {
        icon: (<S.PurpleIcon><Coffee weight="fill" size={32}/></S.PurpleIcon>),
        body: 'O café chega fresquinho até você'
    }
]