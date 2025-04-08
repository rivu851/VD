import React, { useState } from "react";

const WeatherApp = () => {
  const apiKey = "d1913710720b5095ce7b6763b3f46e71";
  const apiUrl = "http://api.openweathermap.org/data/2.5/weather?units=metric&q=";

  const [city1, setCity1] = useState("");
  const [city2, setCity2] = useState("");
  const [weather1, setWeather1] = useState(null);
  const [weather2, setWeather2] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [mode, setMode] = useState("single");

  const fetchWeather = async (city) => {
    try {
      const response = await fetch(`${apiUrl}${city}&appid=${apiKey}`);
      if (!response.ok) throw new Error("City not found");
      return await response.json();
    } catch (err) {
      setError(err.message);
      return null;
    }
  };

  const checkWeather = async () => {
    if (!city1) return setError("Please enter a city name");
    setLoading(true);
    const data = await fetchWeather(city1);
    setWeather1(data);
    setError("");
    setLoading(false);
  };

  const compareWeather = async () => {
    if (!city1 || !city2) return setError("Please enter both city names");
    setLoading(true);
    const data1 = await fetchWeather(city1);
    const data2 = await fetchWeather(city2);
    setWeather1(data1);
    setWeather2(data2);
    setError("");
    setLoading(false);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-cover bg-center text-white p-4" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=1948&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}>
      <h2 className="text-4xl font-bold my-6 text-center">Check Weather</h2>

      <div className="mb-6 flex space-x-4">
        <button onClick={() => setMode("single")} className={`px-5 py-3 rounded-lg text-lg ${mode === "single" ? "bg-blue-500 shadow-lg" : "bg-gray-700"}`}>
          🌍 Single City
        </button>
        <button onClick={() => setMode("compare")} className={`px-5 py-3 rounded-lg text-lg ${mode === "compare" ? "bg-blue-500 shadow-lg" : "bg-gray-700"}`}>
          🌎 Compare Cities
        </button>
      </div>

      {mode === "single" ? (
        <div className="w-full max-w-md bg-gray-900 bg-opacity-80 p-6 rounded-lg shadow-lg">
          <input type="text" placeholder="Enter city name" value={city1} onChange={(e) => setCity1(e.target.value)} className="w-full px-4 py-2 rounded-lg text-black mb-4" />
          <button onClick={checkWeather} className="w-full bg-blue-600 px-4 py-2 rounded-lg text-lg">Check Weather</button>
          {error && <p className="text-red-400 mt-2">⚠ {error}</p>}
          {loading && <p className="text-yellow-400 mt-2">⏳ Loading...</p>}
          {weather1 && !loading && (
            <div className="bg-gray-800 p-6 rounded-lg text-center mt-4 shadow-md">
              <h3 className="text-3xl font-semibold">{weather1.name}</h3>
              <img src={`https://openweathermap.org/img/wn/${weather1.weather[0].icon}@2x.png`} alt="weather icon" className="mx-auto w-24 h-24" />
              <p className="text-2xl">🌡 {Math.floor(weather1.main.temp)}°C</p>
              <p>💧 Humidity: {weather1.main.humidity}%</p>
              <p>🌬 Wind: {weather1.wind.speed} km/h</p>
            </div>
          )}
        </div>
      ) : (
        <div className="w-full max-w-lg bg-gray-900 bg-opacity-80 p-6 rounded-lg shadow-lg">
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 mb-4">
            <input type="text" placeholder="Enter City 1" value={city1} onChange={(e) => setCity1(e.target.value)} className="flex-1 px-4 py-2 rounded-lg text-black" />
            <input type="text" placeholder="Enter City 2" value={city2} onChange={(e) => setCity2(e.target.value)} className="flex-1 px-4 py-2 rounded-lg text-black" />
          </div>
          <button onClick={compareWeather} className="w-full bg-blue-600 px-4 py-2 rounded-lg text-lg">Compare</button>
          {error && <p className="text-red-400 mt-2">⚠ {error}</p>}
          {loading && <p className="text-yellow-400 mt-2">⏳ Loading...</p>}
          {weather1 && weather2 && !loading && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              {[weather1, weather2].map((w, i) => (
                <div key={i} className="bg-gray-800 p-6 rounded-lg text-center shadow-md">
                  <h3 className="text-3xl font-semibold">{w.name}</h3>
                  <img src={`https://openweathermap.org/img/wn/${w.weather[0].icon}@2x.png`} alt="weather icon" className="mx-auto w-24 h-24" />
                  <p className="text-2xl">🌡 {Math.floor(w.main.temp)}°C</p>
                  <p>💧 Humidity: {w.main.humidity}%</p>
                  <p>🌬 Wind: {w.wind.speed} km/h</p>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default WeatherApp;
