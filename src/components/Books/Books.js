import React from "react";
import styled from "styled-components";
const books = ({ image, name, link }) => {
  return (
    <BookContainer>
      <BookImage>
        <img src={image} />
      </BookImage>
      <BookName>
        <h2>Book: {name}</h2>
      </BookName>
      <DownloadButton>
        <button>
          <a href={link} target="_thapa">
            Get Book
          </a>
        </button>
      </DownloadButton>
    </BookContainer>
  );
};

const BookContainer = styled.div`
  width: 190px;
  height: 345px;
  justify-content: center;
  align-items: center;
  margin: 20px;
  background-color: rgba(0, 0, 0, 0.08);
  border-radius: 10px;
  margin-bottom: 20px;
`;
const BookImage = styled.div`
  img {
    width: 100%;
    height: 260px;
    border-radius: 10px;
  }
`;
const BookName = styled.div`
  font-family: "Merriweather", serif;
  margin-top: 10px;
  margin-left: 20px;
`;
const DownloadButton = styled.div`
  button {
    margin-top: 10px;
    width: 100px;
    margin-left: 45px;
    border-radius: 10px;
    cursor: pointer;
  }
  a {
    text-decoration: none;
    color: black;
  }
`;
export default books;
