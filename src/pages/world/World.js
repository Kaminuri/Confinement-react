import React from "react";
import { Grid, Box} from "@material-ui/core";

// components
import PageTitle from "../../component/PageTitle";

// data
import { ComboBoxGames } from "../../component/ComboBoxGames/ComboBoxGames";



export default function World() {
  var token = (localStorage.getItem('id_token'));
  return (
    <>
      <PageTitle title="Hello This new games" button="Action"/>
      <Box>here {token}</Box>
      <ComboBoxGames/>
    </>
  );
}
