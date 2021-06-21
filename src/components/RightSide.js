import styled from "styled-components";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import FetchQuote from "./quotesFetcher";
const Rightside = (props) => {
  return (
    <Container>
      <FetchQuote />
      <Calendar />
    </Container>
  );
};

const Container = styled.div`
  font-family: "Merriweather", serif;
  margin-left: 20px;
  width: 23%;
  @media (max-width: 768px) {
    width: 100%;
    margin: 10px 30px 20px 3px;
  }
`;

export default Rightside;
