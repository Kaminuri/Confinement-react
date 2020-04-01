import React from "react";
import TabPanel from "./components/TabPanel"
import SwipeableTemporaryDrawer from "./components/NpcDrawer"
import { Widget } from 'react-chat-widget';

import 'react-chat-widget/lib/styles.css';

import Grid from '@material-ui/core/Grid';
// components
import PageTitle from "../../component/PageTitle";

// data
import { ComboBoxGames } from "../../component/ComboBoxGames/ComboBoxGames";



export default function World() {
  var token = (localStorage.getItem('id_token'));
  return (
    <>
        <TabPanel />
        <div className="App">
        <Widget />
        </div>
        <SwipeableTemporaryDrawer/>
    </>
  );
}
