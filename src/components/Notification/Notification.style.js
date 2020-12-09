import styled from "styled-components";

export const Box = styled.div`
  padding: 1em 0;
`;

export const NotificationBox = styled.div`
  font-size: 1em;
  display: flex;
  justify-content: space-between;
  padding: 1em 0;
  padding-left: 1em;
  border-radius: 6px;
  color: white;
  font-weight: bolder;
  background-color: ${(props) => (props.color === "error" ? "red" : "green")};
`;

export const NotificationButton = styled.div`
  border-radius: 50%;
  position: relative;
  margin-top: -12px;
  margin-right: 5px;
  width: 23px;
  text-align: center;
  height: 18px;
  border: none;
  background-color: black;
  color: white;
  cursor: pointer;
`;
