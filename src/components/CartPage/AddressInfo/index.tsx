import { MapPinLine } from "phosphor-react"
import * as S from "./styles"
import { useForm, SubmitHandler } from "react-hook-form";
import { TitleContainer } from "../TitleContainer";
import { Container } from "../Container";

interface AddressProps {
    cep: string;
    street: string;
    number: string;
    complement?: string;
    district: string;
    city: string;
    state: string;
}

export const AddressInfo = () => {
    const { register, watch, formState: { errors } } = useForm<AddressProps>();
    const onSubmit: SubmitHandler<AddressProps> = data => console.log(data);

    console.log(watch("cep"))

    return (
        <Container>
            <TitleContainer 
            icon={<MapPinLine color='#C47F17' size={22} />} 
            title="Endereço de Entrega"
            subTitle="Informe o endereço onde deseja receber seu pedido" 
            />
            <S.FormAddress>
                <S.InputAddress 
                    placeholder="CEP" 
                    start={{width: "sm"}} 
                    end={{width: "sm"}} 
                    {...register("cep", { required: true, maxLength: 8})}
                />
                <S.InputAddress 
                    placeholder="Rua" 
                    start={{width: "sm"}} 
                    end={{width: "lg"}} 
                    {...register("street", { required: true })}/>
                <S.InputAddress 
                    placeholder="Numero" 
                    start={{width: "sm"}} 
                    end={{width: "sm"}} 
                    {...register("number", { required: true })}
                />
                <S.InputAddress 
                    placeholder="Complemento" 
                    start={{width: "md"}} 
                    end={{width: "lg"}} 
                    {...register("complement")}
                    />
                <S.InputAddress 
                    placeholder="Bairro" 
                    start={{width: "sm"}} 
                    end={{width: "sm"}} 
                    {...register("district", { required: true })}
                />
                <S.InputAddress 
                    placeholder="Cidade" 
                    start={{width: "md"}} 
                    end={{width: "md"}} 
                    {...register("city", { required: true })}
                />
                <S.InputAddress 
                    placeholder="UF" 
                    start={{width: "lg"}} 
                    end={{width: "lg"}} 
                    {...register("state", { required: true })}
                />
            </S.FormAddress>
        </Container>
    )
}