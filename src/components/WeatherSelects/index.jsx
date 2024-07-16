import React from "react";
import styles from "./WeatherSelects.module.css";

function WeatherSelects({
  temperatuteUnit,
  onTemperatureUnitSelect,
  windSpeedUnit,
  onWingSpeedUnitSelect,
}) {
  return (
    <>
      <div className={styles.selectWrapper}>
        <p className={styles.title}>Wind speed unit:</p>
        <select
          className={styles.select}
          value={windSpeedUnit}
          onChange={(e) => onWingSpeedUnitSelect(e.target.value)}
        >
          <option value="">Km/h</option>
          <option value="ms">M/s</option>
        </select>
      </div>
      <div className={styles.selectWrapper}>
        <p className={styles.title}>Temperature unit:</p>
        <select
          className={styles.select}
          value={temperatuteUnit}
          onChange={(e) => onTemperatureUnitSelect(e.target.value)}
        >
          <option value="">&deg;C</option>
          <option value="fahrenheit">&deg;F</option>
        </select>
      </div>
    </>
  );
}

export default WeatherSelects;
