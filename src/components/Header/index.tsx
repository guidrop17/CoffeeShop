import * as S from "./styles"
import Logo from "../../assets/Logo.svg"
import Cart from "../../assets/Cart.svg"
import { MapPin } from "phosphor-react";

export const Header = () => {
    const handleLocalization = () => {
        return navigator.geolocation.getCurrentPosition(location => {
          const { latitude, longitude } = location.coords;
          const apiKey = 'SUA_CHAVE_DE_API_AQUI';
          const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${apiKey}`;
      
          fetch(url)
            .then(response => response.json())
            .then(data => {
              const address = data.results[0].formatted_address;
              console.log(address);
              return address;
            })
            .catch(error => console.error(error));
        });
      };

    return(
        <S.HeaderContainer>
            <S.Logo src={Logo}/>
            <S.ContainerActions>
                <S.LocalizationInfo 
                onClick={handleLocalization}
                >
                    <MapPin weight="fill" size={22}/>
                    Localização
                </S.LocalizationInfo>
                <S.IconCard src={Cart}/>
            </S.ContainerActions>
        </S.HeaderContainer>
    )
}