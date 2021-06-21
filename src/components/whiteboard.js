import React, { useEffect } from "react";
// import './canvasStyle.css'
import styled from "styled-components";

function Whiteboard() {
  useEffect(() => {
    const canvas = document.querySelector("#myCanvas");
    const ctx = canvas.getContext("2d");

    var clearCanvas = document.getElementById("clearCanvas");
    var saveCanvas = document.getElementById("saveCanvas");

    // ERASER

    var eraser = document.getElementById("eraser");
    eraser.addEventListener("click", erase);

    function erase() {
      ctx.strokeStyle = "black";
      ctx.lineWidth = "10";
    }

    // COLORS

    var redColor = document.getElementById("red");
    redColor.addEventListener("click", redPen);

    var blueColor = document.getElementById("blue");
    blueColor.addEventListener("click", bluePen);

    var whiteColor = document.getElementById("white");
    whiteColor.addEventListener("click", whitePen);

    var yellowColor = document.getElementById("yellow");
    yellowColor.addEventListener("click", yellowPen);

    var greenColor = document.getElementById("green");
    greenColor.addEventListener("click", greenPen);

    function redPen() {
      ctx.strokeStyle = "red";
    }

    function whitePen() {
      ctx.strokeStyle = "white";
    }

    function bluePen() {
      ctx.strokeStyle = "blue";
    }

    function yellowPen() {
      ctx.strokeStyle = "yellow";
    }

    function greenPen() {
      ctx.strokeStyle = "green";
    }

    //Pencil Widths

    var twoPxWidth = document.getElementById("xs");
    twoPxWidth.addEventListener("click", xsWidth);

    function xsWidth() {
      ctx.lineWidth = "2";
    }

    var fivePxWidth = document.getElementById("small");
    fivePxWidth.addEventListener("click", smallWidth);

    function smallWidth() {
      ctx.lineWidth = "5";
    }

    var tenPxWidth = document.getElementById("medium");
    tenPxWidth.addEventListener("click", mediumWidth);

    function mediumWidth() {
      ctx.lineWidth = "10";
    }

    var onefivePxWidth = document.getElementById("large");
    onefivePxWidth.addEventListener("click", largeWidth);

    function largeWidth() {
      ctx.lineWidth = "15";
    }

    var twozeroPxWidth = document.getElementById("xl");
    twozeroPxWidth.addEventListener("click", xlWidth);

    function xlWidth() {
      ctx.lineWidth = "20";
    }

    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;

    let painting = false;

    function startPosition(e) {
      painting = true;
      draw(e);
    }

    function finishedPosition() {
      painting = false;
      ctx.beginPath();
    }

    function draw(e) {
      if (!painting) return;

      ctx.lineCap = "round";

      ctx.lineTo(e.clientX, e.clientY);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(e.clientX, e.clientY);
    }

    // Event Listeners

    canvas.addEventListener("mousedown", startPosition);
    canvas.addEventListener("mouseup", finishedPosition);
    canvas.addEventListener("mousemove", draw);

    clearCanvas.addEventListener("click", eraseCanvas, false);
    saveCanvas.addEventListener("click", saveImage);
  }, []);

  function eraseCanvas() {
    const canvas = document.querySelector("#myCanvas");
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }

  function saveImage() {
    const canvas = document.querySelector("#myCanvas");
    if (window.navigator.msSaveBlob) {
      window.navigator.msSaveBlob(canvas.msToBlob(), "canvas-image.png");
    } else {
      const ctx = canvas.getContext("2d");
      const dataURI = canvas.toDataURL("image/jpeg");
      const a = document.createElement("a");
      a.href = canvas.toDataURL("image/jpeg", 1);

      a.download = "canvas-image.jpg";
      a.style.backgroundColor = "black";
      document.body.appendChild(a).style.background =
        "lightblue repeat-x center";
      a.click();
    }
  }

  return (
    <>
      <Container>
        <Nav id="myNav">
          <P>Whiteboard</P>

          <PencilWidthContainer>
            <Eraser id="eraser">Erase</Eraser>
            <SquareButtonPencil id="xs" className="commonColor">
              2px
            </SquareButtonPencil>
            <SquareButtonPencil id="small" className="commonColor">
              5px
            </SquareButtonPencil>
            <SquareButtonPencil id="medium" className="commonColor">
              10px
            </SquareButtonPencil>
            <SquareButtonPencil id="large" className="commonColor">
              15px
            </SquareButtonPencil>
            <SquareButtonPencil id="xl" className="commonColor">
              20px
            </SquareButtonPencil>
          </PencilWidthContainer>
          <div className="SquareButtonContainer">
            <SquareButtonWhite id="white"></SquareButtonWhite>
            <SquareButtonRed id="red"></SquareButtonRed>
            <SquareButtonBlue id="blue"></SquareButtonBlue>
            <SquareButtonYellow id="yellow"></SquareButtonYellow>
            <SquareButtonGreen id="green"></SquareButtonGreen>
          </div>
        </Nav>

        <Bottom>
          <Canvas id="myCanvas"></Canvas>

          <div className="buttonsSC">
            <Clear id="clearCanvas">Clear</Clear>
            <Save id="saveCanvas">Save</Save>
          </div>
        </Bottom>
      </Container>
    </>
  );
}

const Container = styled.div`
  background: linear-gradient(#e66465, #9198e5);
  background-repeat: no-repeat;
  height: 100%;
  width: 100%;
`;

const Clear = styled.button`
  width: 250px;
  height: 90px;
  font-family: "Caveat", cursive;
  font-size: 45px;
  background-color: lightgoldenrodyellow;
`;

const Save = styled.button`
  width: 250px;
  height: 90px;
  font-family: "Caveat", cursive;
  font-size: 45px;
  background-color: lightgoldenrodyellow;
`;

const Canvas = styled.canvas`
  background-color: black;

  height: 95%;
  border: solid 3px white;
  border-radius: 20px;

  cursor: pointer;
`;

const P = styled.p`
  margin: 0;
`;

const Bottom = styled.div`
  display: flex;
  height: 80%;
  flex-direction: column;
`;
const Nav = styled.nav`
  display: flex;
  font-family: "Caveat", cursive;
  font-size: 45px;
  background-color: lightgoldenrodyellow;
  border: solid 3px black;
  border-radius: 20px;
  padding: 5px;
  padding-left: 50px;
  justify-content: space-around;
`;

const SquareButtonPencil = styled.button`
  width: 40px;
  height: 40px;
  transform: translateY(5px);
  cursor: pointer;
  background: linear-gradient(gray, black);
  color: white;
`;

const SquareButtonRed = styled.button`
  background: linear-gradient(rgb(231, 138, 138), red);
  width: 40px;
  height: 40px;
  cursor: pointer;
`;

const SquareButtonBlue = styled.button`
  background: linear-gradient(rgb(138, 139, 231), blue);
  width: 40px;
  height: 40px;
  cursor: pointer;
`;

const SquareButtonYellow = styled.button`
  background: linear-gradient(rgb(217, 231, 138), yellow);
  width: 40px;
  height: 40px;
  cursor: pointer;
`;

const SquareButtonGreen = styled.button`
  background: linear-gradient(rgb(165, 243, 182), green);
  width: 40px;
  height: 40px;
  cursor: pointer;
`;

const SquareButtonWhite = styled.button`
  background-color: white;
  width: 40px;
  height: 40px;
  cursor: pointer;
`;

const Eraser = styled.button`
  width: 75px;
  height: 40px;
  cursor: pointer;
`;

const PencilWidthContainer = styled.div`
  position: relative;
  bottom: 13px;
`;

export default Whiteboard;
