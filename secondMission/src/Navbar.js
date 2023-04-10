import React from "react";
import { FaAirbnb, FaGlobe, FaLightbulb, FaUser } from 'react-icons/fa';

function NavBar() {
  function toggleDarkMode() {
    // 다크 모드 전환 함수
  }

  return (
    <div className="nav-bar">
      {/* 상단 바 로고 */}
      <div className="nav-bar__column">
        <a href="https://www.airbnb.co.kr/" target="_blank">
          <img src="https://cdn-icons-png.flaticon.com/512/2111/2111320.png" className="img-logo" alt="Airbnb 로고" />
          <span>Airbnb</span>
        </a>
      </div>

      {/* 상단 바 검색 */}
      <div className="nav-bar__column">
        <div id="search-form">
          <span>어디든지</span>
          <span>언제든 일주일</span>
          <span>게스트 추가</span>
          <button type="submit" id="search-button">
            <FaAirbnb />
          </button>
          {/* <input type="search" id="search-box" /> */}
        </div>
      </div>

      {/* 상단 바 기능 */}
      <div className="nav-bar__column">
        <a href="https://www.airbnb.co.kr/host/homes" target="_blank">
          당신의 공간을 에어비앤비하세요
        </a>
        <FaGlobe />
        <div id="nav-bar__info">
          <button onClick={toggleDarkMode}>
            <FaLightbulb />
          </button>
          <FaUser />
        </div>
      </div>

      
     
    </div>
  );
}

export default NavBar;


