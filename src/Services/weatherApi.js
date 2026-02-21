const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
const BASE_URL = import.meta.env.BASE_URL;

export async function fetchWeather(city) {
  const res = await fetch(
    `${BASE_URL}?q=${city}&appid=${API_KEY}&units=metric`
  );

  if (!res.ok) {
    throw new Error("City not found");
  }

  return res.json();
}
