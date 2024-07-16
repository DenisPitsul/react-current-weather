import React from "react";
import styles from "./CurrentWeather.module.css";
import { FaTemperatureLow } from "react-icons/fa";
import { FaWind } from "react-icons/fa6";

function CurrentWeather({
  windSpeed,
  windSpeedUnit,
  temperature,
  temperatureUnit,
}) {
  return (
    <>
      <h2 className={styles.title}>Current Weather</h2>
      <div className={styles.dataWrapper}>
        <div className={styles.data}>
          <FaWind className={styles.icon} />
          <p className={styles.dataText}>
            {windSpeed} {windSpeedUnit}
          </p>
        </div>
        <div className={styles.data}>
          <FaTemperatureLow className={styles.icon} />
          <p className={styles.dataText}>
            {temperature} {temperatureUnit}
          </p>
        </div>
      </div>
    </>
  );
}

export default CurrentWeather;
