import { useState, useEffect } from "react";
import CurrentWeather from "./components/CurrentWeather";
import WeatherSelects from "./components/WeatherSelects";
import "./App.css";

const WEATHER_URL =
  "https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current=temperature_2m,wind_speed_10m&forecast_days=1";

function App() {
  const [temperatuteUnitValue, setTemperatureUnitValue] = useState("");
  const [windSpeedUnitValue, setWindSpeedUnitValue] = useState("");

  const [temperature, setTemperature] = useState("");
  const [windSpeed, setWindSpeed] = useState("");
  const [temperatuteUnit, setTemperatureUnit] = useState("");
  const [windSpeedUnit, setWindSpeedUnit] = useState("");

  useEffect(() => {
    const fullWeatherUrl = `${WEATHER_URL}${
      temperatuteUnitValue === "fahrenheit"
        ? "&temperature_unit=fahrenheit"
        : ""
    }${windSpeedUnitValue === "ms" ? "&wind_speed_unit=ms" : ""}`;

    fetch(fullWeatherUrl)
      .then((response) => response.json())
      .then(
        ({
          current: { temperature_2m, wind_speed_10m },
          current_units: {
            temperature_2m: temperature_2m_unit,
            wind_speed_10m: wind_speed_10m_unit,
          },
        }) => {
          setTemperature(temperature_2m);
          setTemperatureUnit(temperature_2m_unit);
          setWindSpeed(wind_speed_10m);
          setWindSpeedUnit(wind_speed_10m_unit);
        }
      );
  }, [temperatuteUnitValue, windSpeedUnitValue]);

  const onTemperatureUnitSelect = (value) => {
    setTemperatureUnitValue(value);
  };

  const onWingSpeedUnitSelect = (value) => {
    setWindSpeedUnitValue(value);
  };

  return (
    <main>
      <section className="weather">
        <div className="weatherItem">
          <WeatherSelects
            temperatuteUnit={temperatuteUnitValue}
            onTemperatureUnitSelect={onTemperatureUnitSelect}
            windSpeedUnit={windSpeedUnitValue}
            onWingSpeedUnitSelect={onWingSpeedUnitSelect}
          />
        </div>
        <div className="weatherItem">
          <CurrentWeather
            windSpeed={windSpeed}
            windSpeedUnit={windSpeedUnit}
            temperature={temperature}
            temperatureUnit={temperatuteUnit}
          />
        </div>
      </section>
    </main>
  );
}

export default App;
