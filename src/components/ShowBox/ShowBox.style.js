import styled from "styled-components";

export const Box = styled.div`
  cursor: pointer;
  max-width: 50%;
  box-sizing: border-box;
  @media (max-width: ${({ theme }) => theme.medium}) {
    max-width: 100%;
  }
`;

export const ImgBox = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
`;

export const Title = styled.h3`
  color: whitesmoke;
  background-color: black;
  padding-left: 1em;
  margin-top: -40px;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    font-size: medium;
  }
`;

export const Span = styled.span`
  color: magenta;
  font-weight: lighter;
  font-size: medium;
`;
