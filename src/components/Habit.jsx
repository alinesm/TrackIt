import React from "react";
import styled from "styled-components";
import checkImage from "../assets/images/Vector.png";

function Habit() {
  return (
    <Container>
      <ContainerTexts>
        <h2>Ler 1 capitulo do livro</h2>
        <p>sequencia atual: </p>
        <p>Seu recorde: </p>
      </ContainerTexts>

      <ContainerCheck>
        <button>
          <img src={checkImage} alt="" />
        </button>
      </ContainerCheck>
    </Container>
  );
}

export default Habit;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  width: 340px;
  height: 94px;
  padding: 13px;

  background: #ffffff;
  border-radius: 5px;
  margin-bottom: 10px;
`;

const ContainerCheck = styled.div`
  button {
    width: 69px;
    height: 69px;
    background: #ebebeb;
    border: 1px solid #e7e7e7;
    border-radius: 5px;
  }
`;
const ContainerTexts = styled.div`
  h2 {
    font-family: "Lexend Deca";
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    margin-bottom: 7px;
    color: #666666;
  }
  p {
    font-family: "Lexend Deca";
    font-style: normal;
    font-weight: 400;
    font-size: 12.976px;
    line-height: 16px;

    color: #666666;
  }
`;
