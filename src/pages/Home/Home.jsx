import React, { useContext } from "react";
import * as S from "./Home.style";
import { AuthContext } from "../../contexts/AuthContext";

function Home() {
  const auth = useContext(AuthContext);
  return (
    <S.Main>
      <S.Section>
        <S.Heading>
          Welcome to <S.Span>tv</S.Span>status!
        </S.Heading>
        {!auth.token && (
          <S.Message>
            <strong>Register</strong>, if you don't have an account, or{" "}
            <strong>Log In</strong>
          </S.Message>
        )}
      </S.Section>
    </S.Main>
  );
}

export default Home;
