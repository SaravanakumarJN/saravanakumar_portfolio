import React from "react";
import styled from "styled-components";
import envelope from "../../assets/envelope.svg";
import envelopeBottom from "../../assets/bottom.svg";
import resume from "../../assets/saravanakumar_resume.png";

const Envelope = styled.div`
  width: 90%;
  position: relative;
  max-width: 580px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  position: relative;
  > div::nth-child(1) {
    z-index: 10;
  }
  > div:nth-child(2) {
    z-index: 12;
    img {
      margin-top: -8%;
      width: 100%;
      z-index: 20;
    }
  }
  @media (max-width: 1100px) {
    width: 95%;
  }
`;

const SlideCanal = styled.div`
  padding: 50px 0;
  /* position: absolute; */
  display: flex;
  left: 50%;
  top: 0;
  transform: translate(-50%, 0);
  width: 40%;
  min-height: 180vh;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  width: 100%;
  margin: 0 auto;
`;

const Resume = styled.div`
  background-size: contain;
  background-repeat: no-repeat;
  position: sticky;
  top: 10%;
  width: 85%;
  max-width: 550px;
  z-index: 11;
  border-radius: 5px;
  padding-bottom: 50px;
  margin: 40px auto;
  img {
    width: 100%;
    border-radius: 5px;
    max-height: 650px;
  }
  @media (max-width: 1100px) {
    width: 90%;
    margin: 0 auto;
  }
`;

const ResumeAction = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 20;
  min-width: 200px;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50%;
  margin: 0 auto;
  padding: 25px;
  color: black;
  background-color: #f8f8f8;
  border-radius: 5px;
`;

const ResumeSlider = () => {
  return (
    <SlideCanal id='resume'>
      <Resume>
        <img src={resume} alt='resume' />
      </Resume>
      <div>
        <Envelope>
          <div>
            <img src={envelopeBottom} alt='envelope' />
          </div>
          <div>
            <img src={envelope} alt='envelope' />
          </div>
          <ResumeAction>
            <p>Need a copy?</p>
            <a target='_blank' rel='noreferrer' href='#' download>
              <span> Download</span>
            </a>
          </ResumeAction>
        </Envelope>
      </div>
    </SlideCanal>
  );
};

export { ResumeSlider };
