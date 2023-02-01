import React, { useEffect, useState } from "react";
import { useCssHandles } from 'vtex.css-handles';
import { useFormatedTime } from "../../hooks/useFormatedTime";
import { CSS_HANDLES } from "../../typings/cssHandles";
import './styles.css';

const Countdown = ({
  textoCountdown,
  alineacionHorizontalCountdown,
  colorPlantillaCountdown,
  colorTiempoCountdown,
  fechaInicio,
  fechaFinal,
  layoutBanner,
  setTiempoFinalizado}:CountdownProps) => {

  //RESUMEN COUNTDOWN
  const resumenCountdown = useFormatedTime(fechaInicio, fechaFinal);

  //CSS HANDLES
  const handles = useCssHandles(CSS_HANDLES);

  //ESTADOS
  const [isDiasActive,setIsDiasActive] = useState<boolean>(true);

  //COUNTDOWN TIME STYLE
  const countdownTimeStyle = {
    color: colorTiempoCountdown,
    backgroundColor: colorPlantillaCountdown
  }

  //COUNTDOWN GENERAL STYLES
  const countdownPositionTop = (alienacionHorizontal:string) => {
    switch(alienacionHorizontal) {
      case 'izquierda':
        return handles['alineacion-izquierda'];
      case 'centro':
        return handles['alineacion-centro'];
      case 'derecha':
        return handles['alineacion-derecha'];
    }
    return ''
  }

  const countdownPositionHomeSlider = (alienacionHorizontal:string) => {
    switch(alienacionHorizontal) {
      case 'izquierda':
        return handles[`alineacion-izquierda-abajo-${layoutBanner}`];
      case 'centro':
        return handles[`alineacion-centro-abajo-${layoutBanner}`];
      case 'derecha':
        return handles[`alineacion-derecha-abajo-${layoutBanner}`];
    }
    return ''
  }

  const countdownDiasInactiveMargin = (isDiasActive:boolean,alineacionHorizontalCountdown:string) => {
    if(!isDiasActive) {
      if(alineacionHorizontalCountdown === 'derecha') {
        return {
          marginRight: '20px'
        }
      } else if(alineacionHorizontalCountdown === 'izquierda') {
        return {
          marginLeft: '20px'
        }
      }
    }
    return {};
  }

  //EFECTOS
  useEffect(() => {
    if(resumenCountdown.tiempoFinalizado) {
      setTiempoFinalizado(true);
    }
  },[resumenCountdown.tiempoFinalizado])

  useEffect(() => {
    if(resumenCountdown.tiempoRestante.dias === '00') {
      setIsDiasActive(false);
    }
  },[resumenCountdown.tiempoRestante.dias])

  //JSX
  return(
    <div
      className={`
      ${handles[`countdown__general-container-${layoutBanner}`]}
      ${layoutBanner === 'top' ? countdownPositionTop(alineacionHorizontalCountdown) : countdownPositionHomeSlider(alineacionHorizontalCountdown)}

      `}
      style={countdownDiasInactiveMargin(isDiasActive,alineacionHorizontalCountdown)}
    >

      <div className={`${handles[`countdown__title-${layoutBanner}`]}`}>
        <h2
          className={`${handles[`countdown__title-text-${layoutBanner}`]}`}
          style={{color: colorPlantillaCountdown}}
        >
          {textoCountdown}
        </h2>
      </div>

      <div
        className={`${handles[`countdown__time-container-${layoutBanner}`]}`}
        style={isDiasActive ? {gridTemplateColumns: 'repeat(4, 1fr)'} : {gridTemplateColumns: 'repeat(3, 1fr)'}}
      >

        {
          isDiasActive &&
          <div className={`${handles[`time-container__box-${layoutBanner}`]}`}>
            <div className={`${handles[`time-container__box-time-${layoutBanner}`]}`}>
              <p style={countdownTimeStyle}>{resumenCountdown.tiempoRestante.dias}</p>
            </div>
            <div className={`${handles[`time-container__box-text-${layoutBanner}`]}`}>
              <p style={{color: colorPlantillaCountdown}}>DIAS</p>
            </div>
          </div>
        }

        <div className={`${handles[`time-container__box-${layoutBanner}`]}`}>
          <div className={`${handles[`time-container__box-time-${layoutBanner}`]}`}>
            <p style={countdownTimeStyle}>{resumenCountdown.tiempoRestante.horas}</p>
          </div>
          <div className={`${handles[`time-container__box-text-${layoutBanner}`]}`}>
            <p style={{color: colorPlantillaCountdown}}>HORAS</p>
          </div>
        </div>
        <div className={`${handles[`time-container__box-${layoutBanner}`]}`}>
          <div className={`${handles[`time-container__box-time-${layoutBanner}`]}`}>
            <p style={countdownTimeStyle}>{resumenCountdown.tiempoRestante.minutos}</p>
          </div>
          <div className={`${handles[`time-container__box-text-${layoutBanner}`]}`}>
            <p style={{color: colorPlantillaCountdown}}>MINUTOS</p>
          </div>
        </div>
        <div className={`${handles[`time-container__box-${layoutBanner}`]}`}>
          <div className={`${handles[`time-container__box-time-${layoutBanner}`]}`}>
            <p style={countdownTimeStyle}>{resumenCountdown.tiempoRestante.segundos}</p>
          </div>
          <div className={`${handles[`time-container__box-text-${layoutBanner}`]}`}>
            <p style={{color: colorPlantillaCountdown}}>SEGUNDOS</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Countdown;
