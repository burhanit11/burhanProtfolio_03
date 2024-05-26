import styled from "styled-components";

export const Heading = styled.h1`
  text-align: center;
  color: #59c378;
`;

export const Content = styled.div`
  overflowy: scroll;
  height: 2500px;
`;

export const Button = styled.div`
  position: fixed;
  right: 5%;
  border: 1px solid gainsboro;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  place-items: center;
  padding: 0.7rem;
  bottom: 30px;
  z-index: 100000;
  background-color: #fff;
  cursor: pointer;
  color: #59c378;
`;
