import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { Section, TextField, Button, Notification } from "../../components";
import * as S from "./Login.style";
import { AuthContext } from "../../contexts/AuthContext";

function loginUser(email, password, history, auth, setNotification) {
  fetch(`http://localhost:8080/login`, {
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
      if (data.token) {
        auth.setToken(data.token);
        history.push("/");
      } else {
        return setNotification(data.msg || "Error");
      }
    })
    .catch((err) => setNotification(err.message));
}

function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const auth = useContext(AuthContext);
  const [notification, setNotification] = useState();
  const history = useHistory();

  return (
    <Section>
      <S.FormBox>
        <S.Heading>Login</S.Heading>
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
            loginUser(email, password, history, auth, setNotification);
          }}
        >
          <TextField
            type="email"
            id="email"
            name="email"
            labelText="Email"
            placeholder="demo@demo.com"
            handleChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            type="password"
            id="password"
            minLength="8"
            maxLength="64"
            name="password"
            labelText="Password"
            placeholder="demo1234"
            handleChange={(e) => setPassword(e.target.value)}
          />
          <Button type="submit">Log In</Button>
        </form>
      </S.FormBox>
      <S.LinkContainer>
        <S.StyledLink to="/register">
          Don't have an account? <strong>Create one</strong>.
        </S.StyledLink>
      </S.LinkContainer>
    </Section>
  );
}

export default Login;
