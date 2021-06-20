import React, { useState, useEffect } from "react";
import styled from "styled-components";
function FetchQuote() {
  useEffect(() => {
    fetch("http://quotes.rest/qod.json?category=inspire")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setQuote(data.contents.quotes[0].quote);
        setAuthor(data.contents.quotes[0].author);
      });
  }, []);
  const [quote, setQuote] = useState("");
  const [loading, setLoading] = useState(true);
  const [author, setAuthor] = useState("");
  return (
    <>
      <Container>
        <QuoteTop> ‘‘ </QuoteTop>
        <Qoute>
          <h1>{quote}</h1>
          <p>- {author}</p>
        </Qoute>
      </Container>
    </>
  );
}
export default FetchQuote;

const Container = styled.div`
  width: 100%;
  box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 / 20%);
  background-color: rgba(0, 0, 0, 0.08);
  border: 1px solid rgba(0, 0, 0, 0.09);
  margin-bottom: 25px;
`;

const QuoteTop = styled.div`
  margin: 2px 2px 2px 2px;
  font-size: 30px;
  margin-left: 130px;
  @media (max-width: 768px) {
    margin-left: 140px;
  }
`;

const Qoute = styled.div`
  margin: 7px 7px 7px 7px;
  margin-top: -6px;
`;
