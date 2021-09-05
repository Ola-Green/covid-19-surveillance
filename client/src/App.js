import React, { useEffect } from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import HomePage from "./pages/homepage";
import SurveyPage from "./pages/survey";
import Register from "./pages/register";
import Login from "./pages/login";
import Header from "./components/header";
import { useSelector, useDispatch } from "react-redux";
import { Alert } from "./components/alerts/Alert";
import { PageRender } from "./customRouter/pageRender";
import PrivateRouter from "./customRouter/privateRouter";
import { refreshToken } from "./redux/actions/authActions";
export default function App() {
  const { auth } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshToken());
  }, [dispatch]);
  return (
    <Router>
      <Alert />
      <Header />

      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route
          exact
          path="/survey"
          component={auth.token ? SurveyPage : Login}
        />
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
        <PrivateRouter exact path="/:page" component={PageRender} />
        <PrivateRouter exact path="/:page/:id" component={PageRender} />
      </Switch>
    </Router>
  );
}
