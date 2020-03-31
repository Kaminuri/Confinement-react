import React, { useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Modal from '@material-ui/core/Modal';
import Box from '@material-ui/core/Box';
import ComboBoxGames from '../../../../component/ComboBoxGames/ComboBoxGames';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
// context
import {registerWorld } from "../../../../context/WorldContext";



function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function SimpleModal() {
  var [idgame, setIdGame]         = useState(1);
var [worldname, setWorldName]   = useState("");
var [idworldmaster]             = useState(1);
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <Box style={modalStyle} className={classes.paper}>
      <h2 id="simple-modal-title">Création de monde</h2>
      <p id="simple-modal-description">
        Veuillez saisir les informations demandées, Créer votre monde.
      </p>
          <ComboBoxGames value={idgame} onChange={e => setIdGame(e.target.value)}/>
          <InputLabel htmlFor="my-input">Nom de votre monde</InputLabel>
          <Input id="my-input" aria-describedby="my-helper-text" type="text" value={worldname} onChange={e => setWorldName(e.target.value)}/>
          <Button type="submit" name="Créer" color="primary"  onClick={() =>
                      registerWorld(
                        idgame,
                        worldname,
                        idworldmaster
                      )}>Créer la partie</Button>
         
    </Box>
  );


      return (
        <Box>
          <Button variant="contained" color="primary" onClick={handleOpen}>
            Créer une partie
          </Button>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
            >
              {body}
          </Modal>
          </Box>
      );
}
