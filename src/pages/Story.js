import React from "react";
import styled from "styled-components";

function Story() {
  return (
    <MainContainer>
      <ContentStyle>
        <h1>Histórico</h1>
        <p>Em breve você poderá ver o histórico dos seus hábitos aqui!</p>
      </ContentStyle>
    </MainContainer>
  );
}

export default Story;

const MainContainer = styled.div`
  width: 375px;
`;
const ContentStyle = styled.div`
  overflow-y: auto;
  overflow-x: hidden;
  padding: 110px 20px 50px 20px;
  height: calc(100vh - 80px);
  background-color: #e5e5e5;
  h1 {
    font-family: "Lexend Deca";
    font-style: normal;
    font-weight: 400;
    font-size: 22.976px;
    line-height: 29px;
    color: #126ba5;
    margin-bottom: 10px;
  }
  p {
    font-family: "Lexend Deca";
    font-style: normal;
    font-weight: 400;
    font-size: 17.976px;
    line-height: 22px;
    color: #666666;
  }
`;
