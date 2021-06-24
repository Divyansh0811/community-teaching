import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import styled from "styled-components";
import Header from "./Header";
import LeftSide from "./LeftSide";
import Main from "./Main";
import RightSide from "./RightSide";
import axios from "axios"
const Home = (props) => {
  const user = useSelector(selectUser);
  const [isAdmin, setisAdmin] = useState(false)

   const checkAdmin = async () => {
      const admin = await axios.post('https://thawing-beyond-70742.herokuapp.com/admin',{ email:user.email}) 
      console.log(admin)
      if(admin.data === true){
        setisAdmin(true)
      }
    }

  useEffect(() => {
    checkAdmin(user.email)

  }, [])

  return (
    <Container>
      <Header isAdmin={isAdmin}/>
      <Section>

         <h5>
         <a>Have a Doubt? -</a>
         </h5>
         <p> Ask your doubt and get it solved.</p>
      </Section>
      <Layout>
        <LeftSide />
        <Main />
        <RightSide />
      </Layout>
    </Container>
  );
};

const Container = styled.div`
  padding-top: 70px;
  max-width: 100%;
`;
const Section = styled.div`
  min-height: 50px;
  padding: 15px 0px 0 0;
  box-sizing: content-box;
  text-align: center;
  text-decoration: underline;
  display: flex;
  justify-content: center;
  h5 {
    color: #0a66c2;
    font-size: 14px;
  }
  a {
    font-weight: 700;
  }
  p {
    font-size: 14px;
    color: #434649;
    font-weight: 600;
  }
  @media (max-width: 768px) {
    flex-direction: column;
    padding: 0 5px;
  }
`;

const Layout = styled.div`
  display: flex;

  /* row-gap: 25px; */
  /* grid-template-rows: auto; */
  margin: 0px 25px 0px 25px;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    padding: 0 5px;
  }
`;

export default Home;
