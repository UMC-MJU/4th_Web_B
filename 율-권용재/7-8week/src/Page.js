import "./Page.css"
import React, { useState, onClick, useEffect  } from "react";
import logo from "./logo.png";
import { Link } from 'react-router-dom';


export default function Page(){
    const [counter, setValue] = useState(0);
    const onClick = () => setValue((prev)=>prev + 1);
    
    const handleClick = () =>{
        window.location.href = './Header';
    }
    const loginClick = () =>{
        window.location.href = './Login';
    }

    return(
        <div className="showcase">
            <div className="showcase-top">
                <img className="logo"
                    src = {logo}  
                    alt = ""
                />
                <select class="lang-selector">
                    <option class="lang" value="ko">한국어</option>
                    <option class="lang" value="en">English</option>
                </select>
                <Link to = "/Login"> </Link>
                <button onClick={loginClick} className = "btn btn-rounded">로그인</button>
                <div>
                    <h1>{counter}</h1>
                    <button onClick = {onClick} className = "like">좋아요</button>
                </div>
            </div>
            <div className="showcase-content">
                <h1>영화와 시리즈를 무제한으로.</h1>
                <p> 다양한 디바이스에서 시청하세요. 언제든 해지하실 수 있습니다.</p>
                <p2>시청할 준비가 되셨나요? 멤버쉽을 등록하거나 재시작하려면 이메일 주소를 입력하세요.</p2>
                <div className="showcase-content-email">
                    <input type="email" id="email" name="email" class="email"placeholder="이메일 주소" required/>
                    <Link to = "/header"><button onClick={handleClick} className = "btn btn-xl">시작하기</button></Link>
                </div>
            </div>
        </div>
    )
}