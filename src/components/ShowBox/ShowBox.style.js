import styled from "styled-components";

export const Box = styled.div`
  border: 1px solid black;
  position: relative;
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
  position: absolute;
  bottom: 0;
  left: 1em;
  color: white;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    font-size: medium;
  }
`;

export const Span = styled.span`
  color: #999;
  font-weight: lighter;
  font-size: medium;
`;
