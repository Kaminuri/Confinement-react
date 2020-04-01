import React from "react";
import {
  Route,
  Switch,
  Redirect,
  withRouter,
} from "react-router-dom";
import classnames from "classnames";

// styles
import useStyles from "./styles";

// components
import Header from "../Header";
import Sidebar from "../Sidebar";

// pages
import Tables from "../../pages/tables";
import Head from "../../pages/dashboard";
import Icons from "../../pages/icons";
import World from "../../pages/world";

// context
import { useLayoutState } from "../../context/LayoutContext";

function Layout(props) {
  var classes = useStyles();

  // global
  var layoutState = useLayoutState();

  return (
    <div className={classes.root}>
        <>
          <Header history={props.history} />
          {/* <Sidebar /> */}
          <div
            className={classnames(classes.content, {
              [classes.contentShift]: layoutState.isSidebarOpened,
            })}
          > 
            <div className={classes.fakeToolbar} />
            <Switch>
              <Route path="/app/world" component={World} />
              <Route path="/app/tables" component={Tables} />
              <Route path="/app/head" component={Head} />
              <Route path="/app/dashboard" component={Head} />
              <Route
                exact
                path="/app/ui"
                render={() => <Redirect to="/app/ui/icons" />}
              />
              <Route path="/app/ui/icons" component={Icons} />
            </Switch>
          </div>
        </>
     </div> 
  );
}

export default withRouter(Layout);
