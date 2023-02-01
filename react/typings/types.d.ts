type PosicionHorizontalContador = "izquierda" | "centro" | "derecha";
type TipoLayoutBanner = "top" | "home" | "slider";

type Banner = {
  urlImagenDesktopTablet: string
  urlImagenPhone: string
  linkDeRedireccion: string
  textoCountdown: string
  alineacionHorizontalCountdown: PosicionHorizontalContador
  colorPlantillaCountdown: string
  colorTiempoCountdown: string
  fechaInicio: string
  fechaFinal: string
  isActive: boolean
  imagenOfertaApagadaDesktopTablet?: string
  imagenOfertaApagadaMobile?: string
}

type CountdownProps = {
  textoCountdown: string,
  alineacionHorizontalCountdown: string
  colorPlantillaCountdown: string
  colorTiempoCountdown: string
  fechaInicio: string
  fechaFinal: string
  layoutBanner: TipoLayoutBanner
  setTiempoFinalizado: React.Dispatch<React.SetStateAction<boolean>>
}
