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
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPUAAADNCAMAAABXRsaXAAAAjVBMVEX29vYAAAD9/f36+vr///+7u7vw8PD19fXW1tbs7Ozy8vLc3Nzm5uatra18fHzo6Oizs7PHx8cjIyNqamqmpqbNzc2dnZ1dXV0xMTGXl5eKiooKCgpMTExRUVFwcHBHR0c6OjoqKioVFRV4eHiDg4PAwMA/Pz9kZGRaWlqYmJgkJCQTExM1NTUcHBwtLS31gI0+AAAKRUlEQVR4nO1deX+iMBClmXhSr4oX1qOtVnvY7//xloCtJiQQIJes77/97a7kkTGZ483oeXfccccdd9xxxx133PFfAhAgBLZXYRSAu8PZ/DkY4P+Gd7TLk/7yIcah0foviAN6/Hh5uGC5a0PNLR1Qc7h6YLGdPtaXd3R6jdYpygmOQ6+Olg6A/PBJwDlGf1I3Swfc6T1nUY4x//DrwzvawtE4l3KC1bAWZ3r0ZW7vXiU5x1iPbt3SAT8GmyKUY7yEN2zpgL39oTDlBM+95i1aemSl7V1JygnGI+/Gdjyy7Om2EmeCU9jGN0MccKtxrEw5wXvQuQVLj0MLRZQTHPZdxzechBZzpZwJvlwOUCLL5oQWavA9ddLSiQMmCi3U4DjsOkY8Ci0WL1o5EyxdClAAN3vFHbBymH84EYoD8vayoYUarGxbOiDczg6a9cBmgBIFzSVCCzV4WUQBinnigLqlQws12PQ6ZjecWPbuZJVzjPHenKUDHky/bRM+4zVsm6igRNdUY2abK4VN8Kj3TL+uWriEw15fti0KLQw4YOWw3Gmx9MiytYUWarCdKrZ0Elq82WYlgVlDndtGQgsLDlg5qAlQADUlqhYuYb6oGKBEr81waKEGFQIUUrUIC1UtXMJbqQAF0MBaaKEGcYBSjDJYDi3U4LknbelxPc72epVBLkAhVYt320tViqe8AIVULdwKLdRgI66gqK9auIQoQOFseGTZC1eCZj143TG1QiL1czu0UIPt9ErMCJ1bCC3UYOb/0u6qL8g5jDNttLC9EKM4oJg1vq2YqjLOrOvlleQiYY30VmBdw3fCGtq2F2IUvfMhjoa2V2IQIfq7sF3Pf6rCZxRzU96Z/1Fvh/SBm1+pd/BBcmkCjWZEvJaBJsmbZnYTAR4Edbu+vyRy5ET2GjpQm1aFWUNSfaxfO2YKVGgpQRw3e7d+mZ3YNILcjtPtZjeG0qJbcpndZo44Iz0oRRx3G7dWD/hUIaYn4pvqun5jGKtS4AHCfmibjRQKlHhkgHu2CeWjcDkvD9B0UHlEo1zpNhPIcQNf6WjphY5tWln4rirJEMDl3LG+/oAW+62edty4zGYaxzIAe4DvMCA02X1ZYfqHgqFFUSBGoPIe554AeRZzEMudr1clncoc/xXIrOUgDnvtYxgQE4Es8NUbIa23huVZGyPDZYDOrJy6zF8jb2/O0l9D38ggIZjQzw1Q+p/gjhlLVxZa5II1cFF6VbsQ8blnsFcTaL1wmN7qX+I6+9k+zbYysSf4Y2ZeWVOH13pkeCoYmlLPn+HMfx15L75qS18NzbedY3pYwDD3+ZGlSw+FycePnXbULu2Dd2SWQCxdhexDpmqhBcy9dcg28Mt/I5ZesYJyVNjFURDM17onvwwy2Ku8pW+tjhRAdF446wRPQ27UVRon2+MjEGWmn6LLWgQAKNwg5MCoEDp39HbNWnJtxWqF0mNhoquiVYqRzGePqDVd31vwM95LTioitUIZS38KfcmqBeB2eIl4VYM5zK6fQ0KxAsvMt/TxiCfh5n3W2QVsa2NN2SYVZMKfSUpb+kSsTZYe7QWo9duJM9HGmnKrV9df69Zlk4pYOq8q/rLwZSmjqyb/vbYzj8oI9q9ZX59zpEAuFxGRdmbG0qUnYkSWTXXiNDSxhkdqfdc+CvNXD1vZlneSXr1YunRzIaBUTbmAy1QITJh5/UUCP2Wo0UUryQA3hySo+ZYdxclPzwW6WDeox1x7ZlzN7at0y3tk6SNZB4xYNk/4OC3qM0mCvriWVIfMhLMOsn+yLe8geRDgrmgynjCtUxF0zmx+HXDBnr+UB5Ut77HMU1hi2Wlijanzg8qjMMbPoK8ifCDdk1mNOG+69vpZ+JRU8YvBvOJ4bHJm5yjexpLBfmFQh8jimjUKspf0QKbPla04xrdbrjxCNsVRFF0qzqRuCsZDF+CtTAqIdE/+SHz4sybWTeopVKZQVrTxU3A8Nn+cPBdbPawZ/2tEsZZXHcoPdyBn9lpa+PNihDUV2aFCvZ1Svjax7M8CH/qlhTUAzSy4fgoumAnMU4ORHFtRlbIOjxRa7CqunSFcXF66EsbQJRXpXe6HVWSdfvXhZbfLdXeuOWd6+dz5QP1mY17Hz/Bvt3FJERJJOtEd7+UrgsXy1DJg8oSpB+GXkkuN7tmggxHEwJVGDqlPFwK/qW38u9m4ku5qFox8358Mq3WQKU8Xgqh38/f9QqX1qsFINWskukV+w7uuUX58qE4XslmxC86pBRiYpCdAfjG9IGtxc3Ji4uLXYhCq04UZXnbygjnJQvPgiMAqAYudw8RBc6JBf6GatbgZe52wFiQLjUJ1uhCJY58kg5GRLDSHvmrW4lxG4qdkHHfmsFZt4WLXOHnBeclCIzioZi2OIz/iR0kkC/XjqNrCxf0tiRvoRAPMRrWXIj6im8lrcaHDa6vaD2+JQqpNklhALszbmCuPPkTO2dkLdGJ40pNi0kKP8/Usd0IuzB/+Up444yaQLq4vcqEXfdlUzZrfhvt3ajph4Sf1OjvuMf6XNnPiDH/XkBDnDAC7CFOyy9eGoKWAjRlmp/blKU40J6vOpZxp0w+htAoZEbgxKD/MYjD7+SOv0DCCvp7qHnNnUxokD1nvwFZf+ohZs+UP6jGC4og5hJrK12wMTdcaLLvi35pE8alokpWrWp10qEsdnpIjMMJNqznxoSaxmYfZtmo2J2kxPRzo0pp5mBX2pbJzyBbtqTbSHrCZhVXqq4R8K4M0ehpJpwp4nNwFNM37aF8TfaQ5iQVePAtgOvo6SnXIlmadLm9w5S94VEQkVhmB3pZ7TqKff0cCmJtueHzUaN0EnMSBqKsG+2Zmh/w0tHdwcpJEwv4SQCP9o0OWgWdgOkz6dM7oOYh46/1Vhaegpcsdo3ik3exM9T2gib508WZohLPnddMOyCZnggYe6Pk1xre2qY5snsrolPe+4xZUxZNDjiZ/3JwbWkhkqgB39+qIz3pmJ4dwNRhySRvA3mRRfUjOZ7/RNP2L5sCry0u3PAPCnX1Ynvn3uifb0K4U3OpGoebf6EvebAdvRS/yz8NiNAAbP1sfAfMqWYUbQokYuuk3pv1Vvu59uV2Hw3YHsCXGBFxBTjmFFwBCGHX8SSNY7Naz5/ft/OXpdDo9ff5s3zfHcT+cDkf+ALBNvgkQb3PGVVwFIoNHiLwA8oVtdVstL/4zAUi26OoGVwr9rjnisQ1+AvTkxIbog0CF1LG9Lr0QVO+0zaNxAwLxoPJWC7cgkGDoKZQ7A66Tol6I7hgEv7yoa4KDIwB+emBWb9YCtc17rVmLFJUahG0OQai/0KP7cQS5fZq1BPoQsK61m5KnD68nhEroWrsp7K9d/OGt1hG2qIaxqjPrpoA0PeSsZshoNK7xaZYhEq2xm5LRfKptzq195HYs1hIZemBdU0AdABYMw3zQNw/TAaC8CQO1BLfck6DG2ZT/08IzOnjqHGALOxJ79d1qjyi/GxzsH2tNOqk2c2B7WXfccUcu/gH9Drx0lhvvwgAAAABJRU5ErkJggg=="
              alt="logo"
            />
          </a>
        </Logo>

        <Nav>
          <NavListWrap>
            <NavList className="active">
              <a href="/">
                <img src="/images/nav-home.svg" alt="home" />
                <span>Home</span>
              </a>
            </NavList>

            <NavList>
              <a
                href="
          https://teaching-lecture-room.herokuapp.com/"
                target="_blank"
              >
                <img src="/images/nav-network.svg" alt="lecture" />
                <span>Lectures</span>
              </a>
            </NavList>

            <NavList>
              <a href="https://ema-project.netlify.app/" target="_blank">
                <img
                  src="data:image/png;base64,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"
                  class="event"
                />
                <span>Events</span>
              </a>
            </NavList>

            <NavList>
              <a href="/books" target="_blank">
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
      width: 70px;
      height: 60px;
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
      width: 25px;
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
