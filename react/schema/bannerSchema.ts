const BannerSchema = {
  "title": "Banner Contrarreloj",
  "description": "Configuracion general de banner para ofertas contrarreloj",
  "type": "object",
  "properties": {
    "urlImagenDesktopTablet": {
      "title": "Imagen Desktop - Tablet",
      "type": "string",
      "widget": {
        "ui:widget": "image-uploader"
      }
    },
    "urlImagenPhone": {
      "title": "Imagen Mobile",
      "type": "string",
      "widget": {
        "ui:widget": "image-uploader"
      }
    },
    "linkDeRedireccion": {
      "title": "Url de Redireccionamiento",
      "type": "string"
    },
    "textoCountdown": {
      "title": "Titulo del Countdown",
      "type": "string"
    },
    "alineacionHorizontalCountdown": {
      "title": "Alineacion Horizontal Countdown",
      "type": "string",
      "enum": [
        "izquierda",
        "centro",
        "derecha"
      ]
    },
    "colorPlantillaCountdown": {
      "title": "Color General Plantilla Countdown",
      "type": "string",
      "widget": {
        "ui:widget": "color"
      }
    },
    "colorTiempoCountdown": {
      "title": "Color del Tiempo del Countdown",
      "type": "string",
      "widget": {
        "ui:widget": "color"
      }
    },
    "fechaInicio": {
      "title": "Fecha y Hora de Inicio Oferta",
      "type": "string",
      "widget": {
        "ui:widget": "date-time"
      }
    },
    "fechaFinal": {
      "title": "Fecha y Hora de Final Oferta",
      "type": "string",
      "widget": {
        "ui:widget": "date-time"
      }
    },
    "isActive": {
      "title": "¿Esta Activo el Banner?",
      "type": "boolean"
    }
  },
  "required": [
    "urlImagenDesktopTablet",
    "urlImagenPhone",
    "linkDeRedireccion",
    "textoCountdown",
    "alineacionHorizontalCountdown",
    "colorPlantillaCountdown",
    "colorTiempoCountdown",
    "fechaInicio",
    "fechaFinal",
    "isActive"
  ]
}

const SliderBannerSchema = {
  "title": "Slider Banner Contrarreloj",
  "description": "Configuracion general banner en slider para ofertas contrarreloj",
  "type": "object",
  "properties": {
    "urlImagenDesktopTablet": {
      "title": "Imagen Desktop",
      "type": "string",
      "widget": {
        "ui:widget": "image-uploader"
      }
    },
    "urlImagenPhone": {
      "title": "Imagen Mobile",
      "type": "string",
      "widget": {
        "ui:widget": "image-uploader"
      }
    },
    "linkDeRedireccion": {
      "title": "Url de Redireccionamiento",
      "type": "string"
    },
    "textoCountdown": {
      "title": "Titulo del Countdown",
      "type": "string"
    },
    "alineacionHorizontalCountdown": {
      "title": "Alineacion Horizontal Countdown",
      "type": "string",
      "enum": [
        "izquierda",
        "centro",
        "derecha"
      ]
    },
    "colorPlantillaCountdown": {
      "title": "Color General Plantilla Countdown",
      "type": "string",
      "widget": {
        "ui:widget": "color"
      }
    },
    "colorTiempoCountdown": {
      "title": "Color del Tiempo del Countdown",
      "type": "string",
      "widget": {
        "ui:widget": "color"
      }
    },
    "fechaInicio": {
      "title": "Fecha y Hora de Inicio Oferta",
      "type": "string",
      "widget": {
        "ui:widget": "date-time"
      }
    },
    "fechaFinal": {
      "title": "Fecha y Hora de Final Oferta",
      "type": "string",
      "widget": {
        "ui:widget": "date-time"
      }
    },
    "isActive": {
      "title": "¿Esta Activo el Banner?",
      "type": "boolean"
    },
    "imagenOfertaApagadaDesktopTablet": {
      "title": "Imagen Visualizada - Oferta Apagada (Desktop)",
      "type": "string",
      "widget": {
        "ui:widget": "image-uploader"
      }
    },
    "imagenOfertaApagadaMobile": {
      "title": "Imagen Visualizada - Oferta Apagada (Mobile)",
      "type": "string",
      "widget": {
        "ui:widget": "image-uploader"
      }
    },
  },
  "required": [
    "urlImagenDesktopTablet",
    "urlImagenPhone",
    "linkDeRedireccion",
    "textoCountdown",
    "alineacionHorizontalCountdown",
    "colorPlantillaCountdown",
    "colorTiempoCountdown",
    "fechaInicio",
    "fechaFinal",
    "isActive",
    "imagenOfertaApagadaDesktopTablet",
    "imagenOfertaApagadaMobile"
  ]
}

export { BannerSchema, SliderBannerSchema }
