import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { FaTrashAlt } from "react-icons/fa";
import axios from "axios";
import { useGlobalContext } from "../context";
const weekDay = [
  {
    id: 0,
    name: "D",
  },
  {
    id: 1,
    name: "S",
  },
  {
    id: 2,
    name: "T",
  },
  {
    id: 3,
    name: "Q",
  },
  {
    id: 4,
    name: "Q",
  },
  {
    id: 5,
    name: "S",
  },
  {
    id: 6,
    name: "S",
  },
];

function TodoHabit({ habitData, listHabits, setListHabits, setIsLoading }) {
  const { token } = useGlobalContext();

  function handleDelete(habitData) {
    const confirm = window.confirm("Tem certeza que quer deletar esse hábito?");

    if (confirm) {
      setIsLoading(true);
      const id = habitData.id;

      const URL = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}`;

      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      const promise = axios.delete(URL, config);

      promise.then((res) => {
        const filteredHabits = listHabits.filter((h) => h.id !== habitData.id);
        console.log("New Filtered Habits: ", filteredHabits);
        setListHabits([...filteredHabits]);
        setIsLoading(false);
      });
      promise.catch((err) => {
        alert("Erro ao deletar hábito");
        setIsLoading(false);
        console.log("erro", err);
      });
    }
  }

  return (
    <Container>
      <AuxContainer>
        <h2>{habitData.name}</h2>
        <FaTrashAlt color="#666666" onClick={() => handleDelete(habitData)} />
      </AuxContainer>
      <WeekdaysStyle>
        {weekDay.map((w) => (
          <ButtonStyle colorweek={habitData.days.includes(w.id)}>
            {w.name}
          </ButtonStyle>
        ))}
      </WeekdaysStyle>
    </Container>
  );
}

export default TodoHabit;

const WeekdaysStyle = styled.div``;

const Container = styled.div`
  margin-top: 21px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-sizing: border-box;
  width: 340px;
  height: 94px;
  padding: 13px;
  background: #ffffff;
  border-radius: 5px;
  margin-bottom: 10px;

  h2 {
    font-family: "Lexend Deca";
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    margin-bottom: 7px;
    color: #666666;
  }
`;

const AuxContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ButtonStyle = styled.button`
  margin-right: 4px;
  width: 30px;
  height: 30px;
  left: 36px;
  top: 218px;
  background: ${(props) => (props.colorweek ? "#CFCFCF" : "white")};
  border: 1px solid #d5d5d5;
  border-radius: 5px;
  font-family: "Lexend Deca";
  font-style: normal;
  font-weight: 400;
  font-size: 19.976px;
  line-height: 25px;
  color: ${(props) => (props.colorweek ? "white" : "#CFCFCF")};
`;
