import React from "react";
import styled from "styled-components";
import { auth, provider } from "./firebase";

const Login = (props) => {
  const googleSignIn = () => {
    auth.signInWithPopup(provider).catch((e) => alert(e.message));
  };
  return (
    <Container>
      {/* <Logo>
        <img src="https://upload.wikimedia.org/wikipedia/commons/4/45/Rait_new_logo_png.png" />
      </Logo> */}
      <MainInfo>
        Welcome
        <h3 class="changeData"></h3>
      </MainInfo>
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
`;

const MainInfo = styled.div`
  font-family: "PT Serif", serif;
  color: #f0f0f0;
  align-items: center;
  justify-content: center;
  text-align: center;
  /* font-family: "Merriweather", serif; */
  margin-top: 260px;
  font-size: 40px;
  font-weight: bold;
  .changeData:after {
    content: "";
    animation: changetext 10s infinite linear;
  }
  @keyframes changetext {
    0% {
      content: "Ask/Solve a doubt";
    }
    20% {
      content: "Live Lectures";
    }
    35% {
      content: "Whiteboard";
    }
    60% {
      content: "Books";
    }
    80% {
      content: "Events";
    }
    100% {
      content: "Live Test, Quiz";
    }
  }
  @media (max-width: 768px) {
    margin-top: 400px;
  }
`;

const Logo = styled.div`
  img {
    margin: 10px;
    width: 240px;
  }
`;
const Form = styled.div`
  width: 408px;
  margin: 20px auto;
  @media (max-width: 768px) {
    margin: 20px auto;
    width: 330px;
  }
`;

const Google = styled.button`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #d3d3d3;
  height: 56px;
  width: 100%;
  border-radius: 30px;
  box-shadow: inset 0 0 0 1px rgb(0 0 0 / 60%), inset 0 0 0 2px rgb(0 0 0 / 0%),
    inset 0 0 0 1px rgb(0 0 0 / 0);
  border: none;
  vertical-align: middle;
  transition-duration: 167ms;
  font-size: 20px;
  color: rgba(0, 0, 0, 0.9);
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
