import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import logo from "../assets/images/Group 8.png";

function Home() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [photo, setPhoto] = useState("");
  const navigate = useNavigate();

  function handleSubscription(e) {
    e.preventDefault();
    const URL =
      "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up";
    const body = { email: email, name: name, image: photo, password: password };

    const promise = axios.post(URL, body);
    promise.then((res) => {
      alert("Cadastro realizado!");
      navigate("/");
    });
    promise.catch((err) => alert(err.response.data.message));
  }

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
            placeholder="email"
          />
          <input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            type="password"
            placeholder="senha"
          />
          <input
            onChange={(e) => setName(e.target.value)}
            value={name}
            type="text"
            placeholder="nome"
          />
          <input
            onChange={(e) => setPhoto(e.target.value)}
            value={photo}
            type="url"
            placeholder="foto"
          />
          <button type="submit" onClick={handleSubscription}>
            Entrar
          </button>
        </form>
      </InputsContainer>
      <Link to="/">
        <p>Já tem uma conta? Faça login!</p>
      </Link>
    </Container>
  );
}

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

export default Home;
