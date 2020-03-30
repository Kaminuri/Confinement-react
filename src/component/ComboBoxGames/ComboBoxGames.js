import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

export default function ComboBoxGames() {
  return (
    <Autocomplete
      id="combo-box-demo"
      options={top100Films}
      getOptionLabel={(option) => option.title}
      style={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Choix du jeu" variant="outlined" />}
    />
  ); 
} 

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const top100Films = [
  { title: 'Pokemon Epée', year: 2019 },
  { title: 'Pokemon Bouclier', year: 2019 },
  { title: 'Moderne Warfare Warzone', year: 2020 },
  { title: 'Warframe', year: 2013 },
  { title: 'World Of Warcraft', year: 2000 },
  { title: 'Fortnite', year: 2018 },
];