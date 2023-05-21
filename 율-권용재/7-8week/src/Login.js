import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";

const LoginContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
`;

const LoginForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Input = styled.input`
    margin-bottom: 10px;
    padding: 10px;
`;

const Button = styled.button`
    padding: 10px 20px;
    background-color: #f1f1f1;
    border: none;
    cursor: pointer;
`;


export default function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);

    const handleLogin = async (e) => {
    e.preventDefault();
    
    try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/users');
            const users = response.data;
            const foundUser = users.find(user => user.username === username && user.email === password);

            if (foundUser) {
            // 로그인 성공 처리
                console.log("로그인 성공:", foundUser);
                alert("로그인 성공");
                setError("로그인 성공");
            // 로그인 후 처리 로직 작성
            } else {
            // 로그인 실패 처리
                console.error("로그인 실패: 잘못된 아이디 또는 비밀번호");
                alert("로그인 실패")
                setError("잘못된 아이디 또는 비밀번호입니다.");
            }
    } catch (error) {
      // API 요청 실패 처리
        console.error("API 요청 실패:", error);
        setError("로그인에 실패했습니다. 나중에 다시 시도해주세요.");
        }
    };

    return (
    <LoginContainer>
        <h1>로그인</h1>
        <LoginForm onSubmit={handleLogin}>
        <Input
            type="text"
            placeholder="아이디"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
        />
        <Input
            type="password"
            placeholder="비밀번호"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
        />
        {error && <p>{error}</p>}
        <Button type="submit">로그인</Button>
        </LoginForm>
    </LoginContainer>
    );
}