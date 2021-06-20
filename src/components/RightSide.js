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
  width: 300px;
  font-family: "Merriweather", serif;
  margin-left: 350px;
  @media (max-width: 768px) {
    width: 100%;
    margin: 10px 0 20px 30px;
  }
`;

export default Rightside;
