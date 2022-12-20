import React from "react";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useGlobalContext } from "../context";

function Footer() {
  const { percentageDones, token } = useGlobalContext();

  if (token) {
    return (
      <FooterStyle data-test="menu">
        <Link data-test="habit-link" to="/habitos">
          <p>Hábitos</p>
        </Link>

        <Link data-test="today-link" to="/hoje">
          <div>
            <CircularProgressbar
              value={percentageDones}
              text="Hoje"
              background
              backgroundPadding={6}
              styles={buildStyles({
                backgroundColor: "#3e98c7",
                textColor: "#fff",
                pathColor: "#fff",
                trailColor: "transparent",
                textSize: "20px",
              })}
            />
          </div>
        </Link>

        <Link data-test="history-link" to="/historico">
          <p>Histórico</p>
        </Link>
      </FooterStyle>
    );
  }
}

export default Footer;

const FooterStyle = styled.div`
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 375px;
  height: 70px;
  position: fixed;
  bottom: 0;
  z-index: 2;
  background: #ffffff;
  p {
    font-family: "Lexend Deca";
    font-style: normal;
    font-weight: 400;
    font-size: 17.976px;
    line-height: 22px;
    text-align: center;
    color: #52b6ff;
  }
  div {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 91px;
    height: 91px;
    z-index: 5;
    margin-bottom: 50px;
  }
`;
