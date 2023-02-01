import React, { useState } from 'react';
import { useDevice } from 'vtex.device-detector';
import { useCssHandles } from 'vtex.css-handles';
import { CSS_HANDLES } from "../../typings/cssHandles";
import Countdown from "../Countdown";
import { BannerSchema } from "../../schema/bannerSchema";
import '../TopBanner/styles.css';

const HomeBanner = ({
  urlImagenDesktopTablet = "https://panamericana.vteximg.com.br/arquivos/bx1-contra-reloj-conair-16-diciembre-2022-desktop.png?v=638067944436300000",
  urlImagenPhone = "https://panamericana.vteximg.com.br/arquivos/bx1-contra-reloj-conair-16-diciembre-2022-mobile.png?v=638067944438300000",
  linkDeRedireccion = "#",
  textoCountdown = 'TERMINA EN',
  alineacionHorizontalCountdown = 'derecha',
  colorPlantillaCountdown = '#ffffff',
  colorTiempoCountdown = '#8166aa',
  fechaInicio = "2023-01-15T10:00:00Z",
  fechaFinal = "2023-01-30T09:48:00",
  isActive = true,
}: Banner) => {

  //LAYOUT BANNER
  const layoutBanner:TipoLayoutBanner = 'home';

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
          src={device === 'phone' ? urlImagenPhone : urlImagenDesktopTablet}
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

  return null;
}

HomeBanner.schema = BannerSchema;

export default HomeBanner;
