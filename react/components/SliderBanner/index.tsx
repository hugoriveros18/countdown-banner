import React, { useState } from 'react';
import { useDevice } from 'vtex.device-detector';
import { useCssHandles } from 'vtex.css-handles';
import { CSS_HANDLES } from "../../typings/cssHandles";
import Countdown from "../Countdown";
import { SliderBannerSchema } from "../../schema/bannerSchema";
import '../TopBanner/styles.css';

const SliderBanner = ({
  urlImagenDesktopTablet = "https://panamericana.vteximg.com.br/arquivos/bp-contrareloj-parlante-coby-15-diciembre-2022-desktop.png?v=638067154782570000",
  urlImagenPhone = "https://panamericana.vteximg.com.br/arquivos/bp-contrareloj-parlante-coby-15-diciembre-2022-mobile.png?v=638067154781000000",
  linkDeRedireccion = "/combo-de-audifonos-con-bluetooth-sony-smartwach-rectangular-havit-654408/p?utmi_pc=home-banner-principal-smartwatch-havit-mas-audifonos-sony&utmi_p=smartwatch-havit-mas-audifonos-sony-31-enero-2023",
  textoCountdown = 'TERMINA EN',
  alineacionHorizontalCountdown = 'derecha',
  colorPlantillaCountdown = '#ffffff',
  colorTiempoCountdown = '#272642',
  fechaInicio = "2023-01-15T10:00:00Z",
  fechaFinal = "2023-01-30T09:48:00",
  isActive = true,
  imagenOfertaApagadaDesktopTablet = 'https://panamericana.vtexassets.com/assets/vtex.file-manager-graphql/images/6ccb73d9-6c78-4298-87f7-f18bbaa09051___814baaecf95633b23ddfb277c16827f9.png',
  imagenOfertaApagadaMobile = 'https://panamericana.vtexassets.com/assets/vtex.file-manager-graphql/images/9018618d-9b4f-405c-ad03-ce7485e2d331___edfd6527dbc7d00d248c2a860c4ffe71.png'
}: Banner) => {

  //LAYOUT BANNER
  const layoutBanner:TipoLayoutBanner = 'slider';

  //DETECTOR DE DISPOSITIVO
  const { device } = useDevice();

  //CSS HANDLES
  const handles = useCssHandles(CSS_HANDLES);

  //ESTADOS
  const [tiempoFinalizado, setTimepoFinalizado] = useState<boolean>(false);

  //JSX
  if (isActive && !tiempoFinalizado) {
    return (
      <a
        href={linkDeRedireccion}
        className={`${handles['banner__general-container']}`}
      >
        <img
          alt="Oferta por tiempo limitado"
          src={(device === 'desktop') ? urlImagenDesktopTablet : urlImagenPhone}
        />
        <Countdown
          textoCountdown={textoCountdown}
          alineacionHorizontalCountdown={alineacionHorizontalCountdown}
          colorPlantillaCountdown={colorPlantillaCountdown}
          colorTiempoCountdown={colorTiempoCountdown}
          fechaInicio={fechaInicio}
          fechaFinal={fechaFinal}
          layoutBanner={layoutBanner}
          setTiempoFinalizado={setTimepoFinalizado}
        />
      </a>
    )
  };

  if(device == 'desktop') {
    return (
      <a href={linkDeRedireccion}>
        <img alt='' src={`${imagenOfertaApagadaDesktopTablet}`}/>
      </a>
    );
  }

  return (
    <a href={linkDeRedireccion}>
      <img alt='' src={`${imagenOfertaApagadaMobile}`}/>
    </a>
  );
}

SliderBanner.schema = SliderBannerSchema;

export default SliderBanner;
