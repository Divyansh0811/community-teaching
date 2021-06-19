import React from "react";
import styled from "styled-components";
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';

const LeftSide = (props) => {
  return (
    <Container>
      <Calendar />
    </Container>
  );
};

const Container = styled.div``;
export default LeftSide;
