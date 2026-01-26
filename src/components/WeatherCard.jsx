export default function WeatherCard({ weather }) {
  return (
    <div className="weather-card">
      <h2 className="city">{weather.name}</h2>

      <div className="temp">
        {Math.round(weather.main.temp)}°C
      </div>

      <div className="details">
        <div className="detail-item">
          <span>💧</span>
          <div>
            <small>Humidity</small>
            <strong>{weather.main.humidity}%</strong>
          </div>
        </div>

        <div className="detail-item">
          <span>🌬️</span>
          <div>
            <small>Wind</small>
            <strong>{weather.wind.speed} m/s</strong>
          </div>
        </div>

        <div className="detail-item">
          <span>☁️</span>
          <div>
            <small>Condition</small>
            <strong>
              {weather.weather[0].description}
            </strong>
          </div>
        </div>
      </div>
    </div>
  );
}
