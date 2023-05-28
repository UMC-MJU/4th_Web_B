import React, { useEffect, useState } from 'react';
import kakaoImage from "../src/kakao.png";
import "./App.css";


const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://developers.kakao.com/sdk/js/kakao.js';
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      window.Kakao.init('1ed16fa175f450957d9aa1e1aedf9a14');

      // 로그인 상태 확인
      const isKakaoLoggedIn = window.Kakao.Auth.getAccessToken() !== null;
      setIsLoggedIn(isKakaoLoggedIn);
    };
  }, []);

  const handleKakaoLogin = () => {
    window.Kakao.Auth.login({
      success: (authObj) => {
        console.log('로그인 성공:', authObj);
        setIsLoggedIn(true);
      },
      fail: (error) => {
        console.error('로그인 실패:', error);
      },
    });
  };

  const handleKakaoLogout = () => {
    window.Kakao.Auth.logout(() => {
      console.log('로그아웃 성공');
      setIsLoggedIn(false);
    });
  };

  return (
    <div>
      {!isLoggedIn ? (
        <button onClick={handleKakaoLogin} className="kakao-login-button">
          <img src={kakaoImage} alt="카카오톡 로그인" className="kakao-icon" />
          카카오톡 로그인
        </button>
      ) : (
        <button onClick={handleKakaoLogout} className="kakao-logout-button">
          로그아웃
        </button>
      )}
    </div>
  );
};

export default App;