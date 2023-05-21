import React, { useState , useEffect} from "react";
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
        const response = await axios.get('https://jsonplaceholder.typicode.com/users', {
            username,
            password,
          });
      
      
      // 로그인 성공 처리
      console.log("로그인 성공:", response.data);
      
      // 로그인 후 처리 로직 작성
    } catch (error) {
      // 로그인 실패 처리
      console.error("로그인 실패:", error.response.data.error);
      setError(error.response.data.error);
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