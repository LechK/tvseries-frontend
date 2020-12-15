import React, { Suspense, lazy, useRef, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Header, Loading, Burger, Menu } from "./components/";
import { useOnClickOutside } from "./hooks";

const LazyHome = lazy(() => import("./pages/Home/Home"));
const LazyTV = lazy(() => import("./pages/TV/TV"));
const AboutLazy = lazy(() => import("./pages/About/About"));
const LoginLazy = lazy(() => import("./pages/Login/Login"));
const RegisterLazy = lazy(() => import("./pages/Register/Register"));
const SelectedShowLazy = lazy(() =>
  import("./pages/SelectedShow/SelectedShow")
);

function Routes() {
  const node = useRef();
  useOnClickOutside(node, () => setOpen(false));

  const [open, setOpen] = useState(false);

  return (
    <Router>
      <Header />
      <div ref={node}>
        <Burger open={open} setOpen={setOpen} />
        <Menu open={open} setOpen={setOpen} />
      </div>
      <Suspense fallback={<Loading />}>
        <Switch>
          <Route exact path="/" component={LazyHome} />
          <Route exact path="/tv" component={LazyTV} />
          <Route exact path="/about" component={AboutLazy} />
          <Route exact path="/login" component={LoginLazy} />
          <Route exact path="/register" component={RegisterLazy} />
          <Route exact path="/shows/:id" component={SelectedShowLazy} />
        </Switch>
      </Suspense>
    </Router>
  );
}

export default Routes;
