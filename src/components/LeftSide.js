import React from "react";
import styled from "styled-components";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const LeftSide = (props) => {
  return (
    <Container>
      <Calendar />
    </Container>
  );
};

const Container = styled.div`
  width: 300px;
  @media (max-width: 768px) {
    width: 100%;
    margin: 10px 0 20px 30px;
  }
`;
export default LeftSide;
