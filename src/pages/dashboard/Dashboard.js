import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import {
  Route,
  Switch,
  Redirect,
  withRouter,
} from "react-router-dom";
// pages
import Tables from "../../pages/tables";
import Icons from "../../pages/icons";
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data:
        [
          {
            "id": 1,
            "name": "Le retour [Gaby]",
            "soustitre": "ANIMA BEYOND FANTASY",
            "img": "https://cdn1.philibertnet.com/326204/anima-core-exxet.jpg"
          },
          {
            "id": 2,
            "name": "Sandstorm [Yoshi]",
            "soustitre": "NAHEULBEUK",
            "img": "https://images-na.ssl-images-amazon.com/images/I/81rq-9SVZeL.jpg"
          },
          {
            "id": 3,
            "name": "Phénissia [Mina]",
            "soustitre": "SHADES",
            "img": "https://redcdn.net/hpimg15/pics/133805cofindenza2.jpg"
          },
          {
            "id": 1,
            "name": "Le retour [Gaby]",
            "soustitre": "ANIMA BEYOND FANTASY",
            "img": "https://cdn1.philibertnet.com/326204/anima-core-exxet.jpg"
          },
          {
            "id": 2,
            "name": "Sandstorm [Yoshi]",
            "soustitre": "NAHEULBEUK",
            "img": "https://images-na.ssl-images-amazon.com/images/I/81rq-9SVZeL.jpg"
          },
          {
            "id": 3,
            "name": "Phénissia [Mina]",
            "soustitre": "SHADES",
            "img": "https://redcdn.net/hpimg15/pics/133805cofindenza2.jpg"
          }
        ]
    }
  }
  render() {
    return (
      <div>
        <Container maxWidth="lg">
          <Grid container spacing={3}>
            {this.state.data.map((person, i) => <TableRow key={i}
              data={person} />)}
          </Grid>
        </Container>

      </div>
    );
  }
}


class TableRow extends React.Component {

  render() {
    return (
      <Grid item xs={3}>

        <Link href='/app/tables#/app/tables' target="_blank"> 
          <Card className=""  >

            <CardActionArea>
              <CardMedia

                component="img"
                alt="Contemplative Reptile"
                height="300" width="400"
                image={this.props.data.img}
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {this.props.data.name}
                </Typography>
                <Typography gutterBottom variant="h5" component="h2">
                  {this.props.data.soustitre}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {this.props.data.age}
                </Typography>

              </CardContent>
            </CardActionArea>
          </Card>
        </Link>

      </Grid>

    );
  }
}
export default App;