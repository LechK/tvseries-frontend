import styled from "styled-components";

export const StyledBurger = styled.button`
  display: none;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    cursor: pointer;
    position: fixed;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    border: none;
    top: 1.5em;
    right: 1.5em;
    width: 2em;
    height: 2em;
    background: transparent;
    padding: 0;
    z-index: 10;

    &:focus {
      outline: none;
    }

    div {
      width: 2rem;
      height: 0.25rem;
      background: ${({ theme, open }) =>
        open ? theme.lightGrey : theme.lightGrey};
      border: 1px solid black;
      border-radius: 10px;
      transition: all 0.3s linear;
      position: relative;
      transform-origin: 1px;

      :first-child {
        transform: ${({ open }) => (open ? "rotate(37deg)" : "rotate(0)")};
        width: ${({ open }) => (open ? "2.4rem" : "rotate(0)")};
      }

      :nth-child(2) {
        opacity: ${({ open }) => (open ? "0" : "1")};
        transform: ${({ open }) =>
          open ? "translateX(20px)" : "translateX(0)"};
      }

      :nth-child(3) {
        transform: ${({ open }) => (open ? "rotate(-37deg)" : "rotate(0)")};
        width: ${({ open }) => (open ? "2.4rem" : "rotate(0)")};
      }
    }
  }
`;
