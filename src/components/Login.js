import React from "react";
import styled from "styled-components";
import { auth, provider } from "./firebase";

const Login = (props) => {
  const googleSignIn = () => {
    auth.signInWithPopup(provider).catch((e) => alert(e.message));
  };
  return (
    <Container>
      <Logo>
        <img src="https://lh3.googleusercontent.com/proxy/OHeAoKrpW2BpDQh53uyBOjYvtDhLYBJD1DulOTDThlsXJBnQpzSnkMMN-nsORtv60W5EtmOiPSJE_XAyID_2ZBs1e_WUrujaPn6iqTVHaCvCvRzmQmoiHn343jrHm30TxO4Kcw" />
      </Logo>
      <MainInfo>Welcome To RAIT</MainInfo>
      <Form>
        <Google onClick={googleSignIn}>
          <img src="/images/google.svg" alt="" />
          Sign in with Google
        </Google>
      </Form>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
    url("/images/slide-1.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  overflow: hidden;
  ::-webkit-scrollbar {
    display: none;
  }
`;

const MainInfo = styled.div`
  font-family: "Open Sans", sans-serif;
  color: white;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-family: "Merriweather", serif;
  margin-top: 120px;
  font-size: 50px;
  font-weight: bold;
`;

const Logo = styled.div`
  img {
    margin: 10px;
    width: 240px;
  }
`;
const Form = styled.div`
  width: 408px;
  margin: 40px auto;
  @media (max-width: 768px) {
    margin: 20px auto;
    width: auto;
  }
`;

const Google = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  height: 56px;
  width: 100%;
  border-radius: 30px;
  box-shadow: inset 0 0 0 1px rgb(0 0 0 / 60%), inset 0 0 0 2px rgb(0 0 0 / 0%),
    inset 0 0 0 1px rgb(0 0 0 / 0);
  border: none;
  vertical-align: middle;
  transition-duration: 167ms;
  font-size: 20px;
  color: rgba(0, 0, 0, 0.6);
  z-index: 0;
  &:hover {
    background-color: rgba(207, 207, 207, 0.25);
    color: rgba(0, 0, 0, 0.75);
    box-shadow: inset 0 0 0 2px rgb(0 0 0 / 60%),
      inset 0 0 0 3px rgb(0 0 0 / 0%), inset 0 0 0 2px rgb(0 0 0 / 0);
  }
  img {
    margin-right: 25px;
  }
`;

export default Login;
