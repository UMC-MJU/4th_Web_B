import { useState } from "react";
import "../index.scss";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Weather = () => {
  const [location, setLocation] = useState("");
  const [result, setResult] = useState({});
  const navigate = useNavigate();
  const API_KEY = "21e81c801242a3bea22fe5698b9366e6";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}`;
  const searchWeather = async (e) => {
    if (e.key === "Enter") {
      try {
        const data = await axios({
          method: "get",
          url: url,
        });
        console.log(data);
        setResult(data);
      } catch (err) {
        alert(err);
      }
    }
  };
  return (
    <div className="weather">
      <div className="contentWrap">
        <button onClick={() => navigate("/")}>뒤로가기</button>
        <h2>궁금한 나라의 날씨를 알아보세요!</h2>
        <input
          placeholder="도시를 입력하세요"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          type="text"
          onKeyDown={searchWeather}
        />
        {Object.keys(result).length !== 0 && (
          <div className="resultWrap">
            <div className="city">도시: {result.data.name}</div>
            <div className="temperature">
              온도: {Math.round((result.data.main.temp - 273.15) * 10) / 10}
            </div>
            <div className="sky">대기: {result.data.weather[0].main}</div>
          </div>
        )}
      </div>
    </div>
  );
};
export default Weather;
