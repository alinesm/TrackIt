import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import logo from "../assets/images/Group 8.png";
import { ThreeDots } from "react-loader-spinner";
import { useGlobalContext } from "../context";

function Home() {
  const { setToken, token } = useGlobalContext();

  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function handleError(err) {
    alert("Email ou senha incorretos");
    setIsLoading(false);
    console.log(err);
  }

  function handleLogin(e) {
    e.preventDefault();
    setIsLoading(true);
    const URL =
      "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login";
    const body = { email, password };

    const promise = axios.post(URL, body);
    promise.then((res) => {
      setToken(res.data.token);
      navigate("/hoje");
    });
    promise.catch((err) => handleError(err));
  }

  console.log(token);

  return (
    <Container>
      <HeaderStyle>
        <img src={logo} alt="" />
      </HeaderStyle>

      <InputsContainer>
        <form>
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="email"
            placeholder="email..."
            disabled={isLoading}
          />
          <input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            type="password"
            placeholder="senha..."
            disabled={isLoading}
          />
          <button type="submit" onClick={handleLogin}>
            {isLoading ? (
              <ThreeDots
                height="15"
                width="50"
                radius="6"
                color="#fff"
                ariaLabel="Loading"
              />
            ) : (
              "Entrar"
            )}{" "}
          </button>
        </form>
      </InputsContainer>
      <Link to="/cadastro">
        <p>Não tem uma conta? Cadastre-se!</p>
      </Link>
    </Container>
  );
}

export default Home;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  p {
    font-family: "Lexend Deca";
    font-style: normal;
    font-weight: 400;
    font-size: 13.976px;
    line-height: 17px;
    text-align: center;
    text-decoration-line: underline;
    color: #52b6ff;
  }
`;

const HeaderStyle = styled.div`
  img {
    margin-top: 80px;
  }
`;

const InputsContainer = styled.div`
  display: flex;
  margin-top: 36px;
  width: 303px;

  input {
    width: 100%;
    height: 45px;
    background: #ffffff;
    border: 1px solid #d5d5d5;
    border-radius: 5px;
    margin-bottom: 6px;
    padding-left: 11px;
    font-family: "Lexend Deca";
    font-style: normal;
    font-weight: 400;
    font-size: 19.976px;
    line-height: 25px;
    /* color: #dbdbdb; */
    &::placeholder {
      font-family: "Lexend Deca";
      font-style: normal;
      font-weight: 400;
      font-size: 19.976px;
      line-height: 25px;
      color: #dbdbdb;
    }
  }
  button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 102%;
    height: 45px;
    border: none;
    background: #52b6ff;
    border-radius: 4.63636px;
    font-family: "Lexend Deca";
    font-style: normal;
    font-weight: 400;
    font-size: 20.976px;
    line-height: 26px;
    text-align: center;
    color: #ffffff;
    margin-bottom: 25px;
  }
`;
