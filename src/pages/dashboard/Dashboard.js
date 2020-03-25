/**
 * IMPORT
 */
import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import Button_create_party from './components/button_create_party/button_create_party';
import Button_join_another_party from './components/button_join_another_party/button_join_another_party';
import Menu_delete_party from './components/Menu_delete_party/Menu_delete_party';
import Box from '@material-ui/core/Box';
/**
 * Class App
 * 
 * Données test 
 * 
 */
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

            <Grid item xs={12} justifyContent="center">
              <Box display="flex" justifyContent="center" m={1} p={1} bgcolor="transparent">
                <Box p={1} bgcolor="transparent">
                  <Button_create_party />
                </Box>
              </Box>
            </Grid>
            {this.state.data.map((person, i) => <TableRow key={i}
              data={person} />)}
          </Grid>
          <Grid item xs={12} justifyContent="center">
              <Box display="flex" justifyContent="center" m={1} p={1} bgcolor="transparent">
                <Box p={1} bgcolor="transparent">
                  <Button_join_another_party />
                </Box>
              </Box>
            </Grid>
        </Container>

      </div>
    );
  }
}


/**
 * Class TableRow
 */
class TableRow extends React.Component {

  render() {
    return (
      <Grid item xs={3}>

        
          <Card className=""  >
          <Link href='/app/tables#/app/tables' target="_blank">
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
                  
                </Typography>

              </CardContent>
            </CardActionArea>
            </Link>
            <Menu_delete_party/>
          </Card>
        

      </Grid>

    );
  }
}
export default App;