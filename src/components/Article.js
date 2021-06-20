import React, { useState, useEffect } from "react";
import styled from "styled-components";
import db from "./firebase";
import { selectUser } from "../features/userSlice";
import {
  selectQuestionId,
  selectQuestionName,
  setQuestionInfo,
} from "../features/questionSlice";
import Modal from "react-modal";
import firebase from "firebase";
import { useDispatch, useSelector } from "react-redux";

function Article({ Id, question, imageUrl, timestamp, users }) {
  const [IsmodalOpen, setIsModalOpen] = useState(false);
  const questionId = useSelector(selectQuestionId);
  const [answer, setAnswer] = useState("");
  const [getAnswers, setGetAnswers] = useState([]);
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const QuestionName = useSelector(selectQuestionName);
  Modal.setAppElement("#root");
  useEffect(() => {
    if (questionId) {
      db.collection("questions")
        .doc(questionId)
        .collection("answer")
        .orderBy("timestamp", "desc")
        .onSnapshot((snapshot) =>
          setGetAnswers(
            snapshot.docs.map((doc) => ({ id: doc.id, answers: doc.data() }))
          )
        );
    }
  }, [questionId]);

  const handleAnswer = (e) => {
    e.preventDefault();

    if (questionId) {
      db.collection("questions").doc(questionId).collection("answer").add({
        user: user,
        answer: answer,
        questionId: questionId,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      });
    }
    console.log(questionId);
    setAnswer("");
    setIsModalOpen(false);
  };

  return (
    <div>
      <Container
        onClick={() =>
          dispatch(
            setQuestionInfo({
              questionId: Id,
              questionName: question,
            })
          )
        }
      >
        <SharedActor>
          <a>
            <img src={users.photo} alt="" />
            <div>
              <span>{users.displayName ? users.displayName : users.email}</span>
              <span>{users.email}</span>
              <span>{new Date(timestamp?.toDate()).toLocaleString()}</span>
            </div>
            <button>
              <img className="menu" src="/images/menu.svg" alt="" />
            </button>
          </a>
        </SharedActor>
        <Description>{question}</Description>
        <SharedImg>
          <a>
            <img src={imageUrl ? imageUrl : null} alt="" />
          </a>
        </SharedImg>
        <SocialActions>
          <button onClick={() => setIsModalOpen(true)}>
            <img src="../images/answer.png" />
            <span>Answer</span>
          </button>
          <button>
            View Answers
            <img src="../images/down-arrow.svg" class="answers" />
          </button>
          <Modal
            isOpen={IsmodalOpen}
            onRequestClose={() => setIsModalOpen(false)}
            shouldCloseOnOverlayClick={false}
            style={{
              overlay: {
                width: 600,
                height: 450,
                backgroundColor: "rgba(0,0,0,0.09)",
                zIndex: "1000",
                top: "50%",
                left: "50%",
                marginTop: "-280px",
                marginLeft: "-295px",
              },
            }}
          >
            <ModalQuestion>
              <button onClick={() => setIsModalOpen(false)}>
                <img src="data:image/png;base64,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" />
              </button>
              <h1>"{question}"</h1>
              <p>
                asked by{" "}
                <span className="name">
                  {users.displayName ? users.displayName : users.email}
                </span>{" "}
                {""}
                on{" "}
                <span className="name">
                  {new Date(timestamp?.toDate()).toLocaleString()}
                </span>
              </p>
            </ModalQuestion>
            <ModalAnswer>
              <textarea
                value={answer}
                onChange={(e) => setAnswer(e.target.value)}
                placeholder="Enter Your Answer"
                type="text"
                required
              />
            </ModalAnswer>
            <ModalButtons>
              {/* <button onClick={() => setIsModalOpen(false)}>Cancel</button> */}
              <button onClick={handleAnswer}>Add Answer</button>
            </ModalButtons>
          </Modal>
        </SocialActions>

        <Answers>
          {getAnswers.map(({ id, answers }) => (
            <p
              key={id}
              style={{
                // paddingBottom: "17px",
                // paddingRight: "350px",
                borderBottom: "1px solid rgba(0,0,0,0.4)",
                margin: "8px 0px 0px 0",
              }}
            >
              {Id === answers.questionId ? (
                <span>
                  {answers.answer}
                  <br />
                  <span
                    style={{
                      // position: "absolute",
                      // color: "gray",
                      // fontSize: "small",
                      // display: "flex",
                      right: "0px",
                    }}
                  >
                    <span style={{ color: "#b92b27" }}>
                      {answers.user.displayName
                        ? answers.user.displayName
                        : answers.user.email}{" "}
                      ' on '
                      {new Date(answers.timestamp?.toDate()).toLocaleString()}'
                    </span>
                  </span>
                </span>
              ) : (
                ""
              )}
            </p>
          ))}
        </Answers>
      </Container>
    </div>
  );
}

export default Article;

const Container = styled.div`
  padding: 0;
  margin: 0 0 8px;
  overflow: visible;
  text-align: center;
  overflow: hidden;
  margin-bottom: 8px;
  background-color: #fff;
  border-radius: 5px;
  position: relative;
  border: none;
  box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 /20%);
`;

const SharedActor = styled.div`
  padding-right: 40px;
  flex-wrap: nowrap;
  padding: 12px 16px 0;
  margin-bottom: 8px;
  display: flex;
  align-items: center;
  a {
    margin-right: 12px;
    flex-grow: 1;
    overflow: hidden;
    display: flex;
    img {
      width: 48px;
      height: 48px;
      border-radius: 50%;
    }
    & > div {
      display: flex;
      flex-direction: column;
      flex-grow: 1;
      flex-basis: 0;
      margin-left: 8px;
      overflow: hidden;
      span {
        text-align: left;
        &:first-child {
          font-size: 14px;
          font-weight: 700;
          color: #000;
        }
        &:nth-child(n + 2) {
          font-size: 12px;
          color: rgba(0, 0, 0, 0.6);
        }
      }
    }
    .menu {
      width: 20px;
    }
  }
  button {
    position: absolute;
    top: 0;
    right: 12px;
    border: none;
    outline: none;
    background: transparent;
  }
`;

const SharedImg = styled.div`
  margin-top: 8px;
  width: 100%;
  display: block;
  position: relative;
  background-color: #f9fafb;
  img {
    width: 80%;
    height: 80%;
  }
`;

const Description = styled.div`
  padding: 0 16px;
  overflow: hidden;
  color: rgba(0, 0, 0, 0.9);
  font-size: 16px;
  text-align: left;
  font-weight: bold;
  box-sizing: inherit;
  font-family: "Merriweather", serif;
  display: block;
  overflow: visible;
`;

const SocialCounts = styled.ul`
  line-height: 1.3;
  display: flex;
  align-items: flex-start;
  overflow: auto;
  /* margin: 0 16px; */
  margin: 0;
  background: transparent;
  align-items: center;
  border-bottom: 1px solid #e9e5df;
  list-style: none;
  img {
    width: 20px;
    height: 20px;
    border: none;
    display: flex;
    align-items: center;
  }
  li {
    margin-right: 5px;
    font-size: 12px;
    button {
      display: flex;
      background: transparent;
      border: none;
      align-items: center;
    }
  }
`;

const SocialActions = styled.div`
  border-top: 2px solid rgba(0, 0, 0, 0.08);
  display: flex;
  justify-content: flex-start;
  padding: 4px 8px;
  img {
    width: 25px;
    height: 25px;
    border: none;
    display: flex;
    color: black;
    padding-right: 2px;
    align-items: center;
  }
  .answers {
    margin-bottom: 2px;
    animation: animateDown infinite 1.5s;
  }
  button {
    font-family: "Merriweather", serif;
    justify-content: center;
    align-items: center;
    font-size: 17px;
    display: inline-flex;
    padding: 8px;
    color: #0a66c2;
    border: none;
    border-radius: 10px;
    background: transparent;

    span {
      margin-left: 4px;
    }
    &:hover {
      cursor: pointer;
      background-color: rgba(0, 0, 0, 0.08);
    }
  }
`;

const ViewAnswers = styled(SocialActions)`
  background-color: transparent;
  button {
    font-size: 16px;
    width: 100%;
    padding-right: 2px;
    text-decoration: none;
    img {
      border: none;
      background-color: transparent;
    }
  }
`;

const Answers = styled.div`
  padding: 0;
  margin: 0 0 8px;
  overflow: visible;
  text-align: center;
  overflow: hidden;
  margin-bottom: 8px;
  background-color: #fff;
  border-radius: 5px;
  position: relative;
  border: none;
  box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 /20%);
  border-bottom: "1px solid rgba(0,0,0,0.09)";
`;

const ModalQuestion = styled.div`
  button {
    flex: 0;
    margin-left: 450px;

    border: none;
    img {
      width: 10px;
    }
  }
  h1 {
    font-size: 25px;
    padding: 2px;
  }
  p {
    margin: 6px 0px 0px 10px;
  }
`;
const ModalAnswer = styled.div`
  textarea {
    margin: 15px 8px 0px 0px;
    width: 100%;
    height: 200px;
  }
`;
const ModalButtons = styled.div`
  button {
    margin-top: 10px;
    width: 100px;
    height: 25px;
    border-radius: 10px;
    margin-left: 280px;
    justify-content: space-between;
  }
`;
