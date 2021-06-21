import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { auth } from "./firebase";
import { selectUser } from "../features/userSlice";
const Header = () => {
  const user = useSelector(selectUser);
  return (
    <Container>
      <Content>
        <Logo>
          <a href="/">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/4/45/Rait_new_logo_png.png"
              alt="logo"
            />
          </a>
        </Logo>
        <Search>
          <div>
            <input placeholder="Search" />
          </div>
          <SearchIcons>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              data-supported-dps="16x16"
              fill="currentColor"
              width="20"
              height="20"
              focusable="false"
            >
              <path d="M14.56 12.44L11.3 9.18a5.51 5.51 0 10-2.12 2.12l3.26 3.26a1.5 1.5 0 102.12-2.12zM3 6.5A3.5 3.5 0 116.5 10 3.5 3.5 0 013 6.5z"></path>
            </svg>
          </SearchIcons>
        </Search>
        <Nav>
          <NavListWrap>
            <NavList className="active">
              <a href="/">
                <img src="/images/nav-home.svg" alt="" />
                <span>Home</span>
              </a>
            </NavList>
            const user = useSelector(selectUser); return (
            <Container>
              <Content>
                <Logo>
                  <a href="/home">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/4/45/Rait_new_logo_png.png"
                      alt="logo"
                    />
                  </a>
                </Logo>
                <Search>
                  <div>
                    <input placeholder="Search" />
                  </div>
                  <SearchIcons>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 16"
                      data-supported-dps="16x16"
                      fill="currentColor"
                      width="20"
                      height="20"
                      focusable="false"
                    >
                      <path d="M14.56 12.44L11.3 9.18a5.51 5.51 0 10-2.12 2.12l3.26 3.26a1.5 1.5 0 102.12-2.12zM3 6.5A3.5 3.5 0 116.5 10 3.5 3.5 0 013 6.5z"></path>
                    </svg>
                  </SearchIcons>
                </Search>
                <Nav>
                  <NavListWrap>
                    <NavList className="active">
                      <a href="/home">
                        <img src="/images/nav-home.svg" alt="home" />
                        <span>Home</span>
                      </a>
                    </NavList>

                    <NavList>
                      <a
                        href="
          https://teaching-lecture-room.herokuapp.com/"
                      >
                        <img src="/images/nav-network.svg" alt="lecture" />
                        <span>Live lecture</span>
                      </a>
                    </NavList>

                    <NavList>
                      <a href="https://ema-project.netlify.app/">
                        <img
                          src="data:image/png;base64,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"
                          class="event"
                        />
                        <span>Events</span>
                      </a>
                    </NavList>

                    <NavList>
                      <a>
                        <img src="/images/nav-book.svg" alt="book" />
                        <span>Books</span>
                      </a>
                    </NavList>

                    <NavList>
                      <a href="/whiteboard" target="_blank">
                        <img src="/images/whiteboard.png" alt="" />
                        <span>Whiteboard</span>
                      </a>
                    </NavList>
                    <User>
                      <a>
                        <img src={user.photo} alt="" />
                        <span>Me</span>
                        <img src="/images/down-icon.svg" class="down" />
                      </a>
                      <SignOut onClick={() => auth.signOut()}>
                        <a>Sign Out</a>
                      </SignOut>
                    </User>
                    <Work>
                      <a>
                        <img src="/images/nav-work.svg" alt="" />
                        <span>
                          Notices
                          <img src="/images/down-icon.svg" alt="" />
                        </span>
                      </a>
                    </Work>
                  </NavListWrap>
                </Nav>
              </Content>
            </Container>
            );
            <NavList>
              <a href="/whiteboard">
                <img src="/images/whiteboard.png" alt="board" />
                <span>Whiteboard</span>
              </a>
            </NavList>
            <User>
              <a>
                <img src={user.photo} alt="me" />
                <span>Me</span>
                <img src="/images/down-icon.svg" class="down" />
              </a>
              <SignOut onClick={() => auth.signOut()}>
                <a>Sign Out</a>
              </SignOut>
            </User>
            <Work>
              <a>
                <img src="/images/nav-work.svg" alt="notice" />
                <span>
                  Notices
                  <img src="/images/down-icon.svg" alt="notice down" />
                </span>
              </a>
            </Work>
          </NavListWrap>
        </Nav>
      </Content>
    </Container>
  );
};

const Container = styled.div`
  background-color: white;
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
  left: 0;
  padding: 0;
  position: fixed;
  top: 0;
  width: 400vw;
  z-index: 100;
`;
const Content = styled.div`
  display: flex;
  align-items: center;
  margin: 0 auto;
  margin-left: 120px;
  min-height: 60px;
  max-width: 1128px;
  @media (max-width: 768px) {
    margin-left: 40px;
  }
`;

const Logo = styled.div`
  a {
    margin-right: 8px;

    img {
      width: 130px;
    }
  }
  @media (max-width: 768px) {
    a {
      margin-left: -29px;
    }
  }
`;

const Search = styled.div`
  opacity: 1;
  flex-grow: 1;
  position: relative;
  & > div {
    max-width: 280px;
    input {
      border: none;
      box-shadow: none;
      background-color: #eef3f8;
      border-radius: 2px;
      width: 220px;
      padding: 0 8px 0 48px;
      line-height: 1.75;
      font-weight: 400;
      font-size: 14px;
      text-decoration: none;
      height: 38px;
      border-radius: 2px;
      border-color: #dce6f1;
      vertical-align: text-top;
    }
  }
`;
const SearchIcons = styled.div`
  margin-left: 4px;
  position: absolute;
  width: 100px;
  z-index: 1;
  top: 8px;
  left: 8px;
`;

const Nav = styled.nav`
  margin-left: auto;
  display: block;
  @media (max-width: 768px) {
    position: fixed;
    left: 0;
    bottom: 0;
    background-color: white;
    width: 100%;
  }
`;

const NavListWrap = styled.nav`
  background-color: white;
  display: flex;
  flex-wrap: nowrap;
  list-style-type: none;
  .active {
    span:after {
      content: "";
      transform: scaleX(1);
      border-bottom: 2px solid var(--white, #fff);
      bottom: -10px;
      left: 0;
      width: 100%;
      position: absolute;
      transition: transform 0.2s ease-in-out;
      border-color: rgba(0, 0, 0, 0.9);
      @media (max-width: 768px) {
        bottom: 0px;
      }
    }
  }
`;
const NavList = styled.nav`
  display: flex;
  align-items: center;
  a {
    align-items: center;
    background: transparent;
    display: flex;
    flex-direction: column;
    font-size: 12px;
    justify-content: center;
    line-height: 1.5;
    min-height: 42px;
    min-width: 80px;
    position: relative;
    cursor: pointer;
    text-decoration: none;
    .event {
      width: 30px;
    }
    span {
      color: rgba(0, 0, 0, 0.6);
      display: flex;
      align-items: center;
    }
    @media (max-width: 768px) {
      /* min-width: 70px; */
      background-color: #fff;
      border-top: 0.1px solid rgba(0, 0, 0, 0.2);
      min-width: 50px;
      min-height: 65px;
    }
  }
  &:hover,
  &:active {
    a {
      span {
        color: rgba(0, 0, 0, 0.9);
      }
    }
  }
`;

const SignOut = styled.div`
  position: absolute;
  top: 45px;
  background: white;
  border-radius: 0 0 5px 5px;
  width: 100px;
  height: 40px;
  font-size: 16px;
  text-decoration: none;
  transition-duration: 167ms;
  text-align: centre;
  display: none;
`;

const User = styled(NavList)`
  a > svg {
    width: 24px;
    border-radius: 50%;
  }
  a > img {
    margin: 2px 0px 0px 0px;
    width: 24px;
    height: 24px;
    border-radius: 50%;

    span {
      display: flex;
      align-items: center;
    }
    @media (max-width: 768px) {
      margin-top: -2px;
    }
  }
  &:hover {
    ${SignOut} {
      align-items: center;
      justify-content: center;
      display: flex;
      @media (max-width: 768px) {
        top: 100px;
      }
    }
  }
  .down {
    margin-bottom: -6px;
    margin-top: -4px;
  }
`;
const Work = styled(User)`
  border-left: 1px solid rgba(0, 0, 0, 0.08);
`;

export default Header;
