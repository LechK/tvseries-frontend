import React, { Suspense, lazy, useRef, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Header, Loading, Burger, Menu, Footer } from "./components/";
import { useOnClickOutside } from "./hooks";

const LazyHome = lazy(() => import("./pages/Home/Home"));
const LazyShows = lazy(() => import("./pages/Shows/Shows"));
const AddLazy = lazy(() => import("./pages/Add/AddSeries"));
const AddCharacters = lazy(() => import("./pages/Add/AddCharacters"));
const AddSeasons = lazy(() => import("./pages/Add/AddSeasons"));
const LoginLazy = lazy(() => import("./pages/Login/Login"));
const RegisterLazy = lazy(() => import("./pages/Register/Register"));
const SelectedShowLazy = lazy(() =>
  import("./pages/SelectedShow/SelectedShow")
);
const EpisodeLazy = lazy(() => import("./pages/Episode/Episode"));

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
          <Route exact path="/addSeries" component={AddLazy} />
          <Route exact path="/addSeasons" component={AddSeasons} />
          <Route exact path="/addCharacters" component={AddCharacters} />
          <Route exact path="/login" component={LoginLazy} />
          <Route exact path="/register" component={RegisterLazy} />

          <Route exact path="/shows" component={LazyShows} />
          <Route exact path="/shows/:id" component={SelectedShowLazy} />
          <Route exact path="/shows/:id/seasons" component={SelectedShowLazy} />
          <Route
            exact
            path="/shows/:id/seasons/:seasonId"
            component={SelectedShowLazy}
          />
          <Route
            exact
            path="/shows/:id/seasons/:seasonId/episodes"
            component={SelectedShowLazy}
          />

          <Route
            exact
            path="/shows/:id/seasons/:seasonId/episodes/:episodeNum"
            component={EpisodeLazy}
          />
        </Switch>
      </Suspense>
      <Footer />
    </Router>
  );
}

export default Routes;
