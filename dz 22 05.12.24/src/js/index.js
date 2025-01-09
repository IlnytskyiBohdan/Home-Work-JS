"use strict";

import { formatDate } from "./utils";
import "../scss/index.scss";

const refreshButton = document.getElementById("refresh-button");

function updateElement(id, text) {
  document.getElementById(id).textContent = text;
}

async function fetchWeather() {
  const apiKey = "ef3fd65bb0e55efce77d57cfb7914e44";
  const latitude = 46.4587459;
  const longitude = 30.7475831;

  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${apiKey}`
    );

    if (!response.ok) throw new Error(`API Error: ${response.statusText}`);

    const data = await response.json();

    const { formattedDate, formattedTime } = formatDate(data.dt, data.timezone);
    updateElement("date", formattedDate);
    updateElement("time", formattedTime);

    updateElement("temperature", `Temperature: ${Math.round(data.main.temp)} °C`);
    updateElement("temperature-feels-like", `Feels like: ${Math.round(data.main.feels_like)} °C`);
    updateElement("humidity", `Humidity: ${data.main.humidity}%`);
    updateElement("pressure", `Pressure: ${data.main.pressure} hPa`);
    updateElement("wind", `Wind: ${(data.wind.speed * 3.6).toFixed(1)} km/h`);
    updateElement("description", data.weather[0].description);

    const now = new Date();
    updateElement("time-update", now.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" }));
    updateElement("date-update", now.toLocaleDateString("en-US", { month: "short", day: "numeric" }));
  } catch (error) {
    console.error("Failed to fetch weather data:", error);
  }
}

refreshButton.addEventListener("click", fetchWeather);
fetchWeather();
