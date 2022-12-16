import axios from "axios";
import React, { useState } from "react";
import styled from "styled-components";
import checkImage from "../assets/images/Vector.png";

function Habit({ token, tHabits, checkedIds, setCheckedIds, dones, setDones }) {
  function handleCheckBox(id) {
    // console.log(id);
    let body = {};
    let filtercheckeds = [];
    let config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    if (checkedIds.includes(id)) {
      const url_post_checked = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/uncheck`;
      const promise = axios.post(url_post_checked, body, config);
      promise.then((res) => {
        filtercheckeds = checkedIds.filter((s) => s !== id);
        setCheckedIds([...filtercheckeds]);
        const doness = filtercheckeds.length;
        setDones(doness);
      });
      promise.catch((err) => console.log(err.response.data));
    } else {
      const url_post_unchecked = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/check`;
      const promise = axios.post(url_post_unchecked, body, config);
      promise.then((res) => {
        const auxArr = [...checkedIds, id];
        setCheckedIds(auxArr);
        const doness = auxArr.length;
        setDones(doness);
      });
      promise.catch((err) => console.log(err.response.data));
    }
  }

  return (
    <Container>
      <ContainerTexts>
        <h2>{tHabits.name}</h2>
        <CurrentSequence
          colorSequences={tHabits.currentSequence === tHabits.highestSequence}
        >
          sequencia atual: {tHabits.currentSequence}{" "}
        </CurrentSequence>
        <HighestSequence
          colorSequences2={tHabits.currentSequence === tHabits.highestSequence}
        >
          Seu recorde: {tHabits.highestSequence}
        </HighestSequence>
      </ContainerTexts>

      <ButtonStyle
        colorBoxCheck={checkedIds.includes(tHabits.id)}
        onClick={() => handleCheckBox(tHabits.id)}
      >
        <img src={checkImage} alt="" />
      </ButtonStyle>
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

const ButtonStyle = styled.button`
  width: 69px;
  height: 69px;
  /* background: #8fc549; */
  /* background: #ebebeb; */
  background-color: ${(props) => (props.colorBoxCheck ? "#8fc549" : "#ebebeb")};
  border: 1px solid #e7e7e7;
  border-radius: 5px;
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
`;
const CurrentSequence = styled.p`
  font-family: "Lexend Deca";
  font-style: normal;
  font-weight: 400;
  font-size: 12.976px;
  line-height: 16px;
  color: ${(props) => (props.colorSequences ? "#8fc549" : "#666666")};
`;

const HighestSequence = styled.p`
  font-family: "Lexend Deca";
  font-style: normal;
  font-weight: 400;
  font-size: 12.976px;
  line-height: 16px;
  color: ${(props) => (props.colorSequences2 ? "#8fc549" : "#666666")};
`;

// const ButtonStyle
