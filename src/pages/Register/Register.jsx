import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Section, TextField, Button, Notification } from "../../components";
import * as S from "./Register.style";

function newUser(email, password, history, setNotification) {
  fetch(`http://localhost:8080/register`, {
    method: "Post",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({
      email: email,
      password: password,
    }),
  })
    .then((res) => res.json())
    .then((data) => {
      if (data.msg === "User has been succesfully registered") {
        history.push("/login");
      } else {
        setNotification(data.msg);
      }
    })
    .catch((err) => setNotification(err));
}

function Register() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [notification, setNotification] = useState();
  const history = useHistory();

  return (
    <S.Main>
      <Section>
        <S.FormBox>
          <S.Heading>Register</S.Heading>
          {notification && (
            <Notification
              color="error"
              handleChange={() => setNotification(false)}
            >
              {notification}
            </Notification>
          )}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              newUser(email, password, history, setNotification);
            }}
          >
            <TextField
              type="email"
              id="email"
              name="email"
              labelText="Email"
              placeholder="tv@series.com"
              handleChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              type="password"
              id="password"
              minLength="8"
              maxLength="64"
              name="password"
              labelText="Password"
              placeholder="password123"
              handleChange={(e) => setPassword(e.target.value)}
            />
            <Button type="submit">Register</Button>
          </form>
        </S.FormBox>
        <S.LinkContainer>
          <S.StyledLink to="/login">
            Already have an account? <strong>Login</strong>.
          </S.StyledLink>
        </S.LinkContainer>
      </Section>
    </S.Main>
  );
}

export default Register;
