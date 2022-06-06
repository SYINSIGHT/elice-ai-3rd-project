import styled from "styled-components";

export const SeoulImg = styled.div`
  height: 30vh;
  text-align: center;
  position: relative;
  ::before {
    content: "";
    background: url("./seoul.jpg") no-repeat;
    background-size: contain;
    position: absolute;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
    opacity: 0.45;
  }
`;

export const MapText = styled.p`
  font-size: 0.8rem;
  position: relative;
  margin-top: 15%;
`;

export const MapButton = styled.button`
  border: 1px solid black;
  border-radius: 1rem;
  padding: 1% 3%;
  font-size: 0.8rem;
  font-weight: bold;
  background-color: rgba(255, 255, 255, 0);
  position: relative;
`;
