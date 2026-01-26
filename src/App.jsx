import { useState } from "react";
import { fetchWeather } from "./Services/weatherApi";
import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";
import Loader from "./components/Loader";

export default function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = async () => {
    if (!city) return;

    try {
      setLoading(true);
      setError("");

      const data = await fetchWeather(city);
      setWeather(data);
    } catch (err) {
      setError(err.message);
      setWeather(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app-container">
  <h1 className="app-title">🌤️ Weather App</h1>

  <SearchBar
    city={city}
    setCity={setCity}
    onSearch={handleSearch}
  />

  {loading && <Loader />}
  {error && <p className="error-message">{error}</p>}
  {weather && <WeatherCard weather={weather} />}
</div>

    // <div style={{ padding: 20 }}>
    //   <h1>🌤️ Weather App</h1>

    //   <SearchBar
    //     city={city}
    //     setCity={setCity}
    //     onSearch={handleSearch}
    //   />

    //   {loading && <Loader />}
    //   {error && <p style={{ color: "red" }}>{error}</p>}
    //   {weather && <WeatherCard weather={weather} />}
    // </div>
  );
}

